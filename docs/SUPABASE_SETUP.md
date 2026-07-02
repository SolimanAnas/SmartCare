# Supabase Cloud Sync — setup

SmartCare is **guest-first**: the whole app works offline with no account. Signing in
(Google) only enables optional cloud backup/sync of local study data
(favorites, reading progress, quiz history, achievements, settings, offline list).

The frontend is wired in:

| File | Role |
|------|------|
| `pages/supabase-config.js` | Public project URL + publishable/anon key (safe to ship; protected by RLS). **Generated from your secrets — do not put the `service_role` key here.** |
| `pages/supabase-client.js` | Loads the Supabase SDK lazily, exposes `window.SmartCareCloud` (auth + sync). |
| `pages/login.html` | Google sign-in + sync/backup/restore UI. |
| `pages/signup.html` | Redirects to `login.html` (Google sign-in == sign-up). |
| `pages/admin.html` | Hidden admin console — calls the Supabase Edge Functions below. |
| `supabase/functions/admin-*` | Serverless admin API (list/update-role/delete users) — holds the `service_role` key server-side. See §4. |

To make sign-in actually work you must complete the **3 dashboard steps** below
(these can't be done from code).

---

## 1. Create the sync table + Row-Level Security

Supabase dashboard → **SQL Editor** → run:

```sql
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
create policy "own row - select" on public.user_state
  for select using (auth.uid() = user_id);
create policy "own row - insert" on public.user_state
  for insert with check (auth.uid() = user_id);
create policy "own row - update" on public.user_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

> **If you already created the table** and get `42501: permission denied for table
> user_state`, just run the two `grant …` lines above — that's the fix.

The client calls `upsert(... onConflict: 'user_id')`, so one row per user.

## 2. Enable the Google provider

Dashboard → **Authentication → Providers → Google** → enable, then paste the
**Client ID** and **Client secret** from your Google Cloud OAuth client
(`D:\Apps\secrets\client_secret_*.json`).

In **Google Cloud Console → Credentials → your OAuth client**, add the Supabase
callback to **Authorized redirect URIs**:

```
https://zltfrrudihtrtxutvdqq.supabase.co/auth/v1/callback
```

(This matches the project URL in `pages/supabase-config.js`; also shown under
Supabase → Authentication → Providers → Google → "Callback URL".)

## 3. Allow your app's redirect URLs

Dashboard → **Authentication → URL Configuration** → add every origin the app is
served from to **Redirect URLs** (the client redirects back to the current login page):

```
https://solimananas.github.io/SmartCare/pages/login.html
http://localhost:8000/pages/login.html      (local dev — match your port)
```

Also set **Site URL** to your primary origin (e.g. `https://solimananas.github.io/SmartCare/`).

---

## 4. Admin panel — provider roster + roles

The hidden admin console (`pages/admin.html`) manages your **real** signed-in users
(the people who actually sign in with Google), not a separate account system. It's
reached via a secret gesture on the login page (tap the cloud icon 4× fast, enter the
PIN) and is protected server-side — the PIN only reveals the link, it does not grant
API access.

Reads/writes are handled by three **Supabase Edge Functions**
(`supabase/functions/admin-list-users`, `admin-update-role`, `admin-delete-user`) —
serverless, deployed straight to your Supabase project, no separate app server to
host or keep alive. This replaced the old Flask (`server.py`) `/api/admin/*` routes,
which required `server.py` to be deployed and reachable at the same origin as
`pages/admin.html`; `server.py` now only serves the self-service account-deletion
endpoint (`/api/account`), which every signed-in user is always authorized to call.

### 4a. Create the `profiles` table + auto-sync trigger

Dashboard → **SQL Editor** → run:

```sql
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
```

This backfills nothing retroactively — existing users get a `profiles` row the next
time they sign in. To backfill immediately, run once:

```sql
insert into public.profiles (id, email, full_name)
select id, email, coalesce(raw_user_meta_data->>'full_name', raw_user_meta_data->>'name', split_part(email, '@', 1))
from auth.users
on conflict (id) do nothing;
```

### 4b. Deploy the admin Edge Functions

Requires the [Supabase CLI](https://supabase.com/docs/guides/cli) (`npm install -g
supabase` or your platform's package manager), logged in and linked to your project:

```bash
supabase login
supabase link --project-ref zltfrrudihtrtxutvdqq

supabase functions deploy admin-list-users
supabase functions deploy admin-update-role
supabase functions deploy admin-delete-user
```

Each function reads `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` automatically —
Supabase injects both into every Edge Function's environment, so you don't set them
yourself. You only need to set the admin allow-list, as a **secret** (not a file in
this repo):

```bash
supabase secrets set ADMIN_EMAILS=you@example.com,teammate@example.com
```

`ADMIN_EMAILS` is a comma-separated list of emails allowed to reach the admin
functions — each function verifies the caller's Supabase session token first
(`supabase/functions/_shared/admin.ts`'s `requireAdmin()`), then checks their email
against this list. The `service_role` key never leaves the function's server-side
environment; it is not reachable from `pages/admin.html` or any other browser code.

To test a deployed function directly:

```bash
curl -i "$SUPABASE_URL/functions/v1/admin-list-users" \
  -H "Authorization: Bearer <your-own-supabase-access-token>" \
  -H "apikey: $SUPABASE_ANON_KEY"
```

### 4c. Reaching the admin console

On `pages/login.html`, tap the cloud icon above "SmartCare Cloud" **4 times within
~2 seconds** to trigger a PIN prompt. You must already be signed in with an email
from `ADMIN_EMAILS` — the PIN only unlocks navigation to `admin.html`; the page
itself will bounce you back to login if your account isn't allow-listed (the
admin-list-users function returns `403`, which the page treats the same as `401`).

---

## Notes

- **Key safety:** only the publishable/anon key lives in `supabase-config.js`. Never add
  `service_role` — it bypasses RLS and would be exposed in the browser.
- **CSP:** `server.py` (the Render deployment) already allows `https://*.supabase.co`
  and `https://cdn.jsdelivr.net`. GitHub Pages has no server CSP.
- **What syncs:** `supabase-client.js` `SYNC_*` lists control which `localStorage`
  keys are backed up (currently `smartcare_*`, `*-theme`, `*-mode`, `*-hints-enabled`,
  `theme`, font size). `smartcare_local_auth` and Supabase session keys are excluded.
- **Conflict strategy:** `sync()` pulls the cloud row, merges into local, then pushes
  back (last-write-wins per device at sync time). `Restore from cloud` overwrites local.
