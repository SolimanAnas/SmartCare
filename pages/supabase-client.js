/* ============================================================================
 * SmartCare — Supabase cloud client (auth + optional progress sync)
 * ----------------------------------------------------------------------------
 * Guest-first: the whole app works without signing in. Signing in (Google)
 * only enables optional cloud backup/sync of local study data across devices.
 *
 * Requires window.SUPABASE_URL and window.SUPABASE_ANON_KEY to be defined
 * first (see pages/supabase-config.js). The Supabase SDK is loaded lazily
 * from a CDN, so this file is a no-op offline / when not configured.
 *
 * Public API (all promise-based unless noted):
 *   SmartCareCloud.ready            -> Promise<boolean>  resolves true if usable
 *   SmartCareCloud.isConfigured()   -> boolean
 *   SmartCareCloud.getUser()        -> Promise<user|null>
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

  var SDK_URL = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
  var TABLE = 'user_state';            // see docs/SUPABASE_SETUP.md
  var LAST_SYNC_KEY = 'smartcare_last_sync';

  /* Local data we treat as "cloud-syncable". Anything matching an exact key
   * or a prefix is included; the blocklist is always excluded. Forward-
   * compatible: future favorites/achievements keys under smartcare_* sync too. */
  var SYNC_EXACT = ['theme', 'smartcare-theme', 'smartcare_font_size'];
  var SYNC_PREFIX = ['smartcare_', 'smartcare-'];
  var SYNC_SUFFIX = ['-theme', '-mode', '-hints-enabled'];
  var SYNC_BLOCK = ['smartcare_local_auth', 'smartcare_last_sync'];

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

    /** Upload local syncable data to the user's cloud row. */
    push: function () {
      return Promise.all([requireClient(), api.getUser()]).then(function (res) {
        var c = res[0], user = res[1];
        if (!user) throw new Error('Not signed in');
        var now = new Date().toISOString();
        return c.from(TABLE).upsert({
          user_id: user.id,
          data: { entries: collectLocal(), updated_at: now },
          updated_at: now
        }, { onConflict: 'user_id' }).then(function (r) {
          if (r.error) throw r.error;
          localStorage.setItem(LAST_SYNC_KEY, now);
          return now;
        });
      });
    },

    /** Download the cloud row and merge it into local storage. */
    pull: function () {
      return Promise.all([requireClient(), api.getUser()]).then(function (res) {
        var c = res[0], user = res[1];
        if (!user) throw new Error('Not signed in');
        return c.from(TABLE).select('data, updated_at').eq('user_id', user.id).maybeSingle()
          .then(function (r) {
            if (r.error) throw r.error;
            var row = r.data;
            if (row && row.data && row.data.entries) {
              applyLocal(row.data.entries);
              localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
            }
            return row ? (row.updated_at || null) : null;
          });
      });
    },

    /** Newest-wins: pull cloud first, then push the merged local state back. */
    sync: function () {
      return api.pull().then(function () { return api.push(); });
    },

    lastSync: function () { return localStorage.getItem(LAST_SYNC_KEY); }
  };

  window.SmartCareCloud = api;
})();
