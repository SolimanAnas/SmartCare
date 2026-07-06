// Shared helpers for the admin-* Edge Functions.
//
// Replaces server.py's _require_supabase_admin() — verifies the caller's
// Supabase session token, then checks their email against the ADMIN_EMAILS
// allow-list (a Supabase secret, same mechanism the old Flask backend used).
// The service_role key lives only in this function's environment; it never
// reaches the browser.
import { createClient, type SupabaseClient } from "npm:@supabase/supabase-js@2.45.4";

const ALLOWED_ORIGINS = new Set([
  "https://smartcare-learning.net",
  "https://solimananas.github.io",
]);

export function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin") || "";
  const allow =
    ALLOWED_ORIGINS.has(origin) || origin.startsWith("http://localhost")
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
 *  dashboard, mirroring server.py's `smartcare.audit` logger. */
export function audit(event: string, outcome: string, actor: string, detail = ""): void {
  console.log(JSON.stringify({
    ts: new Date().toISOString(),
    event,
    outcome,
    actor,
    detail,
  }));
}

export type AdminCaller = { id: string; email: string; client: SupabaseClient };

/** Verifies the Authorization: Bearer <token> header against Supabase, then
 *  checks the caller's email against ADMIN_EMAILS. Returns the caller (with
 *  a ready-to-use service-role client) on success, or a Response to return
 *  as-is on failure. */
export async function requireAdmin(req: Request): Promise<AdminCaller | Response> {
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.toLowerCase().startsWith("bearer ") ? authHeader.slice(7) : "";
  if (!token) return json(req, { error: "Sign in required." }, 401);

  const client = serviceClient();
  const { data, error } = await client.auth.getUser(token);
  if (error || !data?.user?.email) return json(req, { error: "Sign in required." }, 401);

  const email = data.user.email.toLowerCase();
  if (!adminEmails().has(email)) {
    audit("admin_access", "denied", email);
    return json(req, { error: "Forbidden" }, 403);
  }
  return { id: data.user.id, email, client };
}

export type Caller = { id: string; email: string; client: SupabaseClient };

/** Verifies the Authorization: Bearer <token> header against Supabase — no
 *  ADMIN_EMAILS check, since not every caller needs to be an admin (e.g.
 *  self-service account deletion, which every signed-in user is always
 *  authorized to do to their own account). Returns the caller on success,
 *  or a Response to return as-is on failure. */
export async function requireUser(req: Request): Promise<Caller | Response> {
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.toLowerCase().startsWith("bearer ") ? authHeader.slice(7) : "";
  if (!token) return json(req, { error: "Sign in required." }, 401);

  const client = serviceClient();
  const { data, error } = await client.auth.getUser(token);
  if (error || !data?.user?.email) return json(req, { error: "Sign in required." }, 401);

  return { id: data.user.id, email: data.user.email.toLowerCase(), client };
}
