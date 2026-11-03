# Deployment Guide — SmartCare

SmartCare has no application server. It is:

- **Static files** (HTML/CSS/JS, PWA service worker), published to GitHub Pages
  by `.github/workflows/static.yml` on every push to `main`. `.pagesignore`
  keeps tooling, tests, docs and Supabase source out of the published site.
- **Supabase** for everything server-side: Google sign-in, cloud sync storage
  (`user_state`, row-level security), user profiles, and four Edge Functions —
  `admin-list-users`, `admin-update-role`, `admin-delete-user` and
  `account-delete`. See [`docs/SUPABASE_SETUP.md`](docs/SUPABASE_SETUP.md).

## 1. Local preview

Any static file server works. Bind it to localhost so it isn't reachable from
your network (Python's `http.server` listens on every interface by default and
would serve `.env`, `.git/`, etc. to anyone on the same Wi-Fi):

```bash
python3 -m http.server 8899 --bind 127.0.0.1
# open http://localhost:8899/
```

Use `localhost` rather than `127.0.0.1` in the browser: the Edge Functions'
CORS allow-list accepts `http://localhost` origins. To sign in locally, add
`http://localhost:8899/pages/login.html` to Supabase → Authentication → URL
Configuration → Redirect URLs.

## 2. Tests

```bash
pip install -r requirements.txt    # pytest only
python -m pytest tests/ -v         # content / course data checks
npm ci && npm test                 # Playwright E2E (starts its own http.server)
```

## 3. Production

1. **Static site** — merge to `main`; the Pages workflow builds `_site/` with
   `rsync --exclude-from=.pagesignore` and deploys it. Nothing else to run.
2. **Database** — apply `supabase/migrations/` (`supabase db push`).
3. **Edge Functions** — `supabase functions deploy <name>` for each function
   under `supabase/functions/`, and set the `ADMIN_EMAILS` secret
   (`supabase secrets set ADMIN_EMAILS=...`). `SUPABASE_URL` and
   `SUPABASE_SERVICE_ROLE_KEY` are injected by Supabase automatically.
4. **Auth** — Google provider on; Email provider **off** (the app only signs in
   with Google); Redirect URLs list every origin the app is served from.

## 4. Post-deploy verification

```bash
curl -fsSI https://solimananas.github.io/SmartCare/ | head -1          # 200
curl -s -o /dev/null -w "%{http_code}\n" \
  https://solimananas.github.io/SmartCare/supabase/functions/_shared/admin.ts   # 404
curl -s -o /dev/null -w "%{http_code}\n" -X DELETE \
  "$SUPABASE_URL/functions/v1/account-delete" -H "apikey: $SUPABASE_ANON_KEY"   # 401
```
