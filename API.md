# API Reference — SmartCare – Clinical Learning Platform

Base URL (local): `http://localhost:8899`

Request/response bodies are JSON. Authenticated endpoints use the Flask-Login
session cookie issued on login.

## CSRF requirement for state-changing requests

For any `POST`, `PATCH`, `PUT`, or `DELETE` to a `/api/` route, the CSRF guard
requires:

- header `X-Requested-With: XMLHttpRequest`, **and**
- `Content-Type: application/json` for body-carrying methods (POST/PATCH/PUT).

Requests missing these are rejected with `400 {"error": "Invalid request"}`.

## Authentication

| Method | Path | Auth | Rate limit |
|--------|------|------|------------|
| POST | `/api/register` | none | (see config) |
| POST | `/api/login` | none | 10/min; 50/hour |
| POST | `/api/google-login` | none | 10/min; 50/hour |
| GET  | `/api/logout` | session | — |

### POST `/api/register`

```json
{ "username": "user@smartcare.org", "password": "Str0ngPass!", "full_name": "Jane Doe", "professional_level": "Paramedic" }
```
- `username` must be a valid email.
- `password` policy: min 10 chars, with upper/lower/digit; common passwords blocked.
- `professional_level` ∈ {Physician, Paramedic, EMT, Admin, ""}.

Responses: `201` success · `400` validation error / duplicate email.

### POST `/api/login`

```json
{ "username": "user@smartcare.org", "password": "Str0ngPass!" }
```
- `200` — `{ "message", "redirect": "/index.html", "role", "email" }` (sets session)
- `401` — `{ "error": "Invalid username or password" }` (generic, anti-enumeration)

### POST `/api/google-login`

```json
{ "credential": "<google-id-token>" }
```
Responses: `200` success · `400` no token · `401` invalid token · `503` Google login not configured.

### GET `/api/logout`

Requires session. Redirects (`302`) to `/login.html`.

## Admin API

Not part of this Flask app — served by Supabase Edge Functions
(`supabase/functions/admin-*`), deployed separately from `server.py`. See
`docs/SUPABASE_SETUP.md` §4 for deployment. All require a Supabase session
token (`Authorization: Bearer <token>`) **and** an email in the `ADMIN_EMAILS`
Supabase secret; non-admins get `403`.

| Method | Path | Description |
|--------|------|-------------|
| GET    | `<SUPABASE_URL>/functions/v1/admin-list-users` | List all users |
| PATCH  | `<SUPABASE_URL>/functions/v1/admin-update-role` | Update a user's role (`{ "userId", "role" }`) |
| DELETE | `<SUPABASE_URL>/functions/v1/admin-delete-user` | Delete a user (`{ "userId" }`) |

`GET admin-list-users` returns `[{ "id", "full_name", "email", "role", "created_at" }]`.

## Account API

### DELETE `/api/account`

Requires a Supabase session token. Deletes the caller's **own** account — no
admin role required, any signed-in user may always delete themself.

Responses: `200` success · `401` no/invalid session · `503` not configured.

## Operations

### GET `/api/health`

Liveness probe (rate-limit exempt). `server.py` has no database of its own —
the process responding at all is the signal.

- `200` — `{ "status": "healthy" }`

## Error format

Errors return `{ "error": "<message>" }` with the matching status. Rate-limit
breaches return `429`; forbidden returns `403`.

## Audit logging

Auth and admin events emit one JSON line to the `smartcare.audit` logger
(`_audit`). Wire this to a monitored sink in production (see `DEPLOYMENT.md`).
