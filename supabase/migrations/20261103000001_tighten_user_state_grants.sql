-- SmartCare: least-privilege table grants.
-- Supabase's default grants give anon/authenticated every table privilege.
-- The app only needs authenticated SELECT/INSERT/UPDATE/DELETE on user_state
-- (row-level security limits each user to their own row) and SELECT on
-- profiles. TRUNCATE in particular ignores RLS, so it must not be granted.
-- Idempotent: revoking a privilege that isn't held is a no-op.

revoke truncate, trigger, references on public.user_state from anon, authenticated;
revoke all on public.user_state from anon;

revoke truncate, trigger, references on public.profiles from anon, authenticated;
revoke all on public.profiles from anon;
