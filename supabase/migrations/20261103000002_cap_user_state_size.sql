-- SmartCare: cap the size of each user's cloud-sync blob.
-- user_state.data holds a copy of the user's synced localStorage keys
-- (pages/supabase-client.js). Without a limit, any signed-in user could store
-- arbitrarily large blobs through the public API. 1 MiB of JSON text is far
-- above real use (largest production row on 2026-11-03: ~4 KB).
-- A push over the limit fails with a check-constraint error, which the app
-- reports as "Sync failed".

alter table public.user_state
  drop constraint if exists user_state_data_size;

alter table public.user_state
  add constraint user_state_data_size
  check (octet_length(data::text) <= 1048576);
