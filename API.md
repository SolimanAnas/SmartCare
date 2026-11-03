# API Reference — SmartCare

SmartCare has no API server of its own. The browser talks to Supabase directly
(auth + the `user_state` table, protected by row-level security) and calls four
Supabase Edge Functions for operations that need the `service_role` key.

Base URL: `<SUPABASE_URL>/functions/v1` (the project URL is in
`pages/supabase-config.js`).

Every request sends:

- `Authorization: Bearer <supabase-access-token>` — the signed-in user's session
- `apikey: <publishable/anon key>`

Errors return `{ "error": "<message>" }`. `401` = missing/invalid session,
`403` = signed in but not allowed.

## Account

| Method | Path | Who | Description |
|--------|------|-----|-------------|
| DELETE | `/account-delete` | any signed-in user | Deletes the caller's **own** account. No body; the user id comes from the session token, never the request. `profiles` / `user_state` rows cascade. |

Responses: `200 {"message": "Account deleted"}` · `401` · `502` delete failed.

## Admin

Require a session whose email is **confirmed, asserted by Google, and listed
in the `ADMIN_EMAILS`** Supabase secret; anyone else gets `403`.

| Method | Path | Body | Description |
|--------|------|------|-------------|
| GET    | `/admin-list-users`  | — | `[{ "id", "full_name", "email", "role", "created_at" }]` |
| PATCH  | `/admin-update-role` | `{ "userId", "role" }` | Set a user's role (≤ 50 chars) |
| DELETE | `/admin-delete-user` | `{ "userId" }` | Delete another user (not yourself) |

## Audit logging

Each function writes one JSON line per security event (`admin_access`,
`admin_*`, `account_self_delete`) to the Supabase Functions logs.
