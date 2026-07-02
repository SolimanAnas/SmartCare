-- SmartCare: cross-device sync storage (one jsonb row per user).
-- Mirrors docs/SUPABASE_SETUP.md §1. Written idempotently (drop-then-create
-- for policies) so `supabase db push` is safe on projects where this was
-- previously applied by hand through the dashboard SQL editor.

create table if not exists public.user_state (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_state enable row level security;

-- REQUIRED: RLS policies decide *which rows*, but the role still needs base
-- table privileges or every query fails with "42501: permission denied".
grant usage on schema public to authenticated;
grant select, insert, update, delete on public.user_state to authenticated;

-- Each user can only read/write their own row.
drop policy if exists "own row - select" on public.user_state;
create policy "own row - select" on public.user_state
  for select using (auth.uid() = user_id);

drop policy if exists "own row - insert" on public.user_state;
create policy "own row - insert" on public.user_state
  for insert with check (auth.uid() = user_id);

drop policy if exists "own row - update" on public.user_state;
create policy "own row - update" on public.user_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
