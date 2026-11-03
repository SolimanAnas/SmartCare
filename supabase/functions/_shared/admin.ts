// Shared helpers for the admin-* and account-delete Edge Functions.
//
// requireUser() verifies the caller's Supabase session token; requireAdmin()
// additionally checks their (Google-verified) email against the ADMIN_EMAILS
// allow-list, a Supabase secret.
// The service_role key lives only in this function's environment; it never
// reaches the browser.
import { createClient, type SupabaseClient } from "npm:@supabase/supabase-js@2.45.4";

const ALLOWED_ORIGINS = new Set([
  "https://smartcare-learning.net",
  "https://solimananas.github.io",
]);

// Local preview (python3 -m http.server ...). Exact host match: a prefix
// check like startsWith("http://localhost") would also accept
// "http://localhost.evil.com".
const LOCALHOST_ORIGIN = /^http:\/\/localhost(:\d{1,5})?$/;

export function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin") || "";
  const allow =
    ALLOWED_ORIGINS.has(origin) || LOCALHOST_ORIGIN.test(origin)
      ? origin
      : "https://smartcare-learning.net";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "GET, PATCH, DELETE, OPTIONS",
    "Vary": "Origin",
  };
}

export function json(req: Request, body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(req), "Content-Type": "application/json" },
  });
}

function serviceClient(): SupabaseClient {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

function adminEmails(): Set<string> {
  const raw = Deno.env.get("ADMIN_EMAILS") || "";
  return new Set(raw.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean));
}

/** One JSON line per security event — visible in the Supabase Functions log
 *  dashboard. */
export function audit(event: string, outcome: string, actor: string, detail = ""): void {
  console.log(JSON.stringify({
    ts: new Date().toISOString(),
    event,
    outcome,
    actor,
    detail,
  }));
}

export type Caller = { id: string; email: string; client: SupabaseClient };
export type AdminCaller = Caller;

/** Verifies the Authorization: Bearer <token> header against Supabase.
 *  Returns the signed-in caller (with a ready-to-use service-role client) on
 *  success, or a 401 Response to return as-is. Any signed-in user passes. */
export async function requireUser(req: Request): Promise<Caller | Response> {
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.toLowerCase().startsWith("bearer ") ? authHeader.slice(7) : "";
  if (!token) return json(req, { error: "Sign in required." }, 401);

  const client = serviceClient();
  const { data, error } = await client.auth.getUser(token);
  if (error || !data?.user?.id) return json(req, { error: "Sign in required." }, 401);

  return { id: data.user.id, email: (data.user.email || "").toLowerCase(), client };
}

/** requireUser(), then checks the caller's email against ADMIN_EMAILS.
 *  Returns the caller on success, or a 401/403 Response on failure. */
export async function requireAdmin(req: Request): Promise<AdminCaller | Response> {
  const caller = await requireUser(req);
  if (caller instanceof Response) return caller;

  const { data, error } = await caller.client.auth.admin.getUserById(caller.id);
  if (error || !data?.user?.email) return json(req, { error: "Sign in required." }, 401);
  const user = data.user;
  const email = user.email.toLowerCase();

  // An email address alone is not proof of identity: if the Supabase Email
  // provider is enabled (it is by default) anyone holding the public anon key
  // can call auth.signUp() with an ADMIN_EMAILS address. Only trust the email
  // when Supabase has confirmed it AND it was asserted by Google, the app's
  // only sign-in method.
  const providers: string[] = Array.isArray(user.app_metadata?.providers)
    ? user.app_metadata.providers
    : [user.app_metadata?.provider].filter(Boolean);
  const verifiedByGoogle = (user.identities || []).some(
    (i) => i.provider === "google" && (i.identity_data?.email || "").toLowerCase() === email,
  );
  if (!user.email_confirmed_at || !providers.includes("google") || !verifiedByGoogle) {
    audit("admin_access", "denied", email, "unverified_identity");
    return json(req, { error: "Forbidden" }, 403);
  }

  if (!adminEmails().has(email)) {
    audit("admin_access", "denied", email);
    return json(req, { error: "Forbidden" }, 403);
  }
  return { id: user.id, email, client: caller.client };
}
