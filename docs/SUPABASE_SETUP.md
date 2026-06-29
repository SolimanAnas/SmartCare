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
https://smartcare-learning.net/pages/login.html
http://localhost:8000/pages/login.html      (local dev — match your port)
```

Also set **Site URL** to your primary origin (e.g. `https://solimananas.github.io/SmartCare/`).

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
