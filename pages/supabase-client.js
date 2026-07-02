/* ============================================================================
 * SmartCare — Supabase cloud client (auth + optional progress sync)
 * ----------------------------------------------------------------------------
 * Guest-first: the whole app works without signing in. Signing in (Google)
 * only enables optional cloud backup/sync of local study data across devices.
 *
 * Requires window.SUPABASE_URL and window.SUPABASE_ANON_KEY to be defined
 * first (see pages/supabase-config.js). The Supabase SDK is vendored locally
 * (see vendor/) and served/cached by the service worker, so this file works
 * offline (after first load) and isn't a no-op when not configured — it's a
 * no-op only when SUPABASE_URL/ANON_KEY aren't set.
 *
 * Public API (all promise-based unless noted):
 *   SmartCareCloud.ready            -> Promise<boolean>  resolves true if usable
 *   SmartCareCloud.isConfigured()   -> boolean
 *   SmartCareCloud.getUser()        -> Promise<user|null>
 *   SmartCareCloud.getAccessToken() -> Promise<string|null>  JWT for server API calls
 *   SmartCareCloud.signInWithGoogle()
 *   SmartCareCloud.signOut()
 *   SmartCareCloud.onChange(cb)     -> cb(user|null) on auth state change
 *   SmartCareCloud.push()           -> upload local data to cloud
 *   SmartCareCloud.pull()           -> download + merge cloud data into local
 *   SmartCareCloud.sync()           -> pull (newest wins) then push
 *   SmartCareCloud.lastSync()       -> ISO string | null (from localStorage)
 * ========================================================================== */
(function () {
  'use strict';

  // Vendored locally (vendor/supabase-js-2.110.0.mjs, bundled with esbuild —
  // see scripts/vendor_supabase.sh) instead of loaded from a CDN. Closes two
  // gaps a CDN import had: it's now under service-worker control (works
  // offline / survives a CDN hiccup), and the exact bytes that run are
  // pinned in git — no more trusting jsdelivr to keep serving the same
  // content for an already-published version. Path is relative to this
  // file's own location (pages/), not the page that <script src>'d it.
  var SDK_URL = '../vendor/supabase-js-2.110.0.mjs';
  var TABLE = 'user_state';            // see docs/SUPABASE_SETUP.md
  var LAST_SYNC_KEY = 'smartcare_last_sync';
  var SNAPSHOT_KEY = 'smartcare_last_sync_snapshot';

  /* Local data we treat as "cloud-syncable". Anything matching an exact key
   * or a prefix is included; the blocklist is always excluded. Forward-
   * compatible: future favorites/achievements keys under smartcare_* sync too. */
  var SYNC_EXACT = ['theme', 'smartcare-theme', 'smartcare_font_size'];
  var SYNC_PREFIX = ['smartcare_', 'smartcare-'];
  var SYNC_SUFFIX = ['-theme', '-mode', '-hints-enabled'];
  var SYNC_BLOCK = ['smartcare_last_sync', 'smartcare_last_sync_snapshot'];

  function isSyncable(key) {
    if (SYNC_BLOCK.indexOf(key) !== -1) return false;
    if (key.indexOf('sb-') === 0) return false;            // supabase session keys
    if (SYNC_EXACT.indexOf(key) !== -1) return true;
    for (var i = 0; i < SYNC_PREFIX.length; i++) if (key.indexOf(SYNC_PREFIX[i]) === 0) return true;
    for (var j = 0; j < SYNC_SUFFIX.length; j++) if (key.slice(-SYNC_SUFFIX[j].length) === SYNC_SUFFIX[j]) return true;
    return false;
  }

  function collectLocal() {
    var out = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (isSyncable(k)) out[k] = localStorage.getItem(k);
    }
    return out;
  }

  function applyLocal(data) {
    if (!data || typeof data !== 'object') return;
    Object.keys(data).forEach(function (k) {
      if (isSyncable(k) && typeof data[k] === 'string') {
        try { localStorage.setItem(k, data[k]); } catch (e) {}
      }
    });
  }

  /* ── Three-way per-key merge ──────────────────────────────────────────
   * The old design was whole-blob newest-wins: pull() overwrote every local
   * key with the cloud copy, so a device that studied offline could have its
   * fresh progress replaced by another device's stale snapshot of the same
   * keys — silent data loss. Instead, we keep a client-side snapshot of the
   * entries as of the last successful sync (the merge "base") and merge
   * per key:
   *   - key unchanged locally since base  -> take the cloud value
   *   - key unchanged in cloud since base -> keep the local value
   *   - changed on both sides (true concurrent edit of the same key)
   *     -> keep LOCAL: sync() pushes right after merging, making this
   *        device canonical, and the value the user just produced on the
   *        device in their hand beats a background copy losing silently.
   * First sync on a device (no base yet): cloud wins for overlapping keys
   * (the account's accumulated data beats a fresh install's defaults), and
   * keys that exist on only one side are always kept.
   */
  function loadSnapshot() {
    try { return JSON.parse(localStorage.getItem(SNAPSHOT_KEY) || 'null'); }
    catch (e) { return null; }
  }

  function saveSnapshot(entries) {
    try { localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(entries)); } catch (e) {}
  }

  function mergeForSync(local, cloud, base) {
    local = local || {};
    cloud = cloud || {};
    var merged = {};
    var keys = {};
    Object.keys(local).forEach(function (k) { keys[k] = true; });
    Object.keys(cloud).forEach(function (k) { keys[k] = true; });

    Object.keys(keys).forEach(function (k) {
      var inLocal = Object.prototype.hasOwnProperty.call(local, k);
      var inCloud = Object.prototype.hasOwnProperty.call(cloud, k);
      if (!inCloud) { merged[k] = local[k]; return; }
      if (!inLocal) { merged[k] = cloud[k]; return; }
      if (local[k] === cloud[k]) { merged[k] = local[k]; return; }

      if (base && Object.prototype.hasOwnProperty.call(base, k)) {
        if (local[k] === base[k]) { merged[k] = cloud[k]; return; } // only cloud changed
        if (cloud[k] === base[k]) { merged[k] = local[k]; return; } // only local changed
        merged[k] = local[k];                                       // concurrent: local wins
        return;
      }
      // No base for this key: first sync (or pre-upgrade device) — cloud wins.
      merged[k] = cloud[k];
    });
    return merged;
  }

  var configured = !!(window.SUPABASE_URL && window.SUPABASE_ANON_KEY);
  var client = null;
  var changeCbs = [];

  var ready = (function () {
    if (!configured) return Promise.resolve(false);
    return import(SDK_URL)
      .then(function (mod) {
        client = mod.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY, {
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
        });
        client.auth.onAuthStateChange(function (_event, session) {
          var user = session ? session.user : null;
          changeCbs.forEach(function (cb) { try { cb(user); } catch (e) {} });
        });
        return true;
      })
      .catch(function (err) {
        console.warn('[SmartCareCloud] SDK load failed (offline?):', err && err.message);
        return false;
      });
  })();

  function requireClient() {
    return ready.then(function (ok) {
      if (!ok || !client) throw new Error('Cloud not available');
      return client;
    });
  }

  var api = {
    ready: ready,
    isConfigured: function () { return configured; },

    onChange: function (cb) { if (typeof cb === 'function') changeCbs.push(cb); },

    getUser: function () {
      return requireClient()
        .then(function (c) { return c.auth.getUser(); })
        .then(function (r) { return (r && r.data && r.data.user) || null; })
        .catch(function () { return null; });
    },

    /** Current session's access token (JWT), for calling authenticated server APIs. */
    getAccessToken: function () {
      return requireClient()
        .then(function (c) { return c.auth.getSession(); })
        .then(function (r) { return (r && r.data && r.data.session && r.data.session.access_token) || null; })
        .catch(function () { return null; });
    },

    /** @private Google OAuth client ID (from secrets) */
    GOOGLE_CLIENT_ID: '413832763437-a7ofrk4ce3k2m145k25hg4qov7rqahjq.apps.googleusercontent.com',

    signInWithGoogle: function () {
      var redirectTo = window.location.origin + window.location.pathname;
      return requireClient().then(function (c) {
        return c.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: redirectTo, queryParams: { prompt: 'select_account' } }
        });
      });
    },

    /** Sign in via Google Identity Services popup — shows "SmartCare" brand. */
    signInWithGooglePopup: function (idToken) {
      if (!idToken) return Promise.reject(new Error('No Google ID token'));
      return requireClient().then(function (c) {
        return c.auth.signInWithIdToken({
          provider: 'google',
          token: idToken
        }).then(function (r) {
          if (r.error) throw r.error;
          return r.data;
        });
      });
    },

    signOut: function () {
      return requireClient().then(function (c) { return c.auth.signOut(); });
    },

    /** @private exposed for tests — pure three-way merge (local, cloud, base). */
    _mergeForSync: mergeForSync,

    /** Upload local syncable data to the user's cloud row. */
    push: function () {
      return Promise.all([requireClient(), api.getUser()]).then(function (res) {
        var c = res[0], user = res[1];
        if (!user) throw new Error('Not signed in');
        var now = new Date().toISOString();
        var entries = collectLocal();
        return c.from(TABLE).upsert({
          user_id: user.id,
          data: { entries: entries, updated_at: now },
          updated_at: now
        }, { onConflict: 'user_id' }).then(function (r) {
          if (r.error) throw r.error;
          localStorage.setItem(LAST_SYNC_KEY, now);
          saveSnapshot(entries);   // what the cloud now holds = the next merge base
          return now;
        });
      });
    },

    /** Download the cloud row and three-way-merge it into local storage. */
    pull: function () {
      return Promise.all([requireClient(), api.getUser()]).then(function (res) {
        var c = res[0], user = res[1];
        if (!user) throw new Error('Not signed in');
        return c.from(TABLE).select('data, updated_at').eq('user_id', user.id).maybeSingle()
          .then(function (r) {
            if (r.error) throw r.error;
            var row = r.data;
            if (row && row.data && row.data.entries) {
              var merged = mergeForSync(collectLocal(), row.data.entries, loadSnapshot());
              applyLocal(merged);
              // Snapshot is NOT updated here: until the merged state is
              // pushed, the cloud still holds its pre-merge blob, and the
              // base must keep describing what cloud and local last agreed
              // on. push() (called by sync()) updates it.
              localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
            }
            return row ? (row.updated_at || null) : null;
          });
      });
    },

    /** Merge cloud into local (per key, see mergeForSync), then push the result. */
    sync: function () {
      return api.pull().then(function () { return api.push(); });
    },

    lastSync: function () { return localStorage.getItem(LAST_SYNC_KEY); }
  };

  window.SmartCareCloud = api;
})();
