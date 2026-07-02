# SmartCare database migrations

The schema previously lived only as SQL snippets in `docs/SUPABASE_SETUP.md`,
applied by hand through the dashboard SQL editor. These files are the same
schema as reviewable, reproducible migrations.

## Applying

With the [Supabase CLI](https://supabase.com/docs/guides/cli) linked to the
project:

```bash
supabase login
supabase link --project-ref zltfrrudihtrtxutvdqq
supabase db push
```

Both migrations are **idempotent** (`create table if not exists`,
`drop policy if exists` before every `create policy`), so pushing them against
a project where the dashboard SQL was already run is safe and changes nothing.

> These migrations could not be executed from the environment that authored
> them (no project credentials); `supabase db push` must be run by someone
> with access. Until then the running database's schema is whatever was last
> applied by hand — see `docs/SUPABASE_SETUP.md`.

## Adding migrations

New files follow the CLI's `YYYYMMDDHHMMSS_description.sql` naming. Keep
`docs/SUPABASE_SETUP.md` prose in sync — it is the human-readable companion,
not the source of truth; these files are.
