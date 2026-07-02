-- SmartCare: user profiles + role storage for the admin console.
-- Mirrors docs/SUPABASE_SETUP.md §4a. Written idempotently so
-- `supabase db push` is safe on projects where this was previously applied
-- by hand through the dashboard SQL editor.

create table if not exists public.profiles (
  id         uuid primary key references auth.users (id) on delete cascade,
  email      text,
  full_name  text,
  role       text not null default 'Unassigned',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

grant usage on schema public to authenticated;
grant select on public.profiles to authenticated;

-- Each user can read (only) their own profile row from the client.
-- Admin reads/writes go through the admin-* Edge Functions using the
-- service_role key, which bypasses RLS entirely — this policy only matters
-- for direct client-side queries, which the app doesn't currently make.
drop policy if exists "own profile - select" on public.profiles;
create policy "own profile - select" on public.profiles
  for select using (auth.uid() = id);

-- Keep profiles in sync with auth.users automatically: creates the row on
-- first sign-in, refreshes email/full_name on every subsequent sign-in.
-- SECURITY DEFINER lets this write to public.profiles regardless of RLS.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
  )
  on conflict (id) do update
    set email = excluded.email,
        full_name = coalesce(public.profiles.full_name, excluded.full_name),
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert or update on auth.users
  for each row execute function public.handle_new_user();

-- Backfill: existing users get a profiles row immediately instead of on
-- their next sign-in.
insert into public.profiles (id, email, full_name)
select id, email, coalesce(raw_user_meta_data->>'full_name', raw_user_meta_data->>'name', split_part(email, '@', 1))
from auth.users
on conflict (id) do nothing;
