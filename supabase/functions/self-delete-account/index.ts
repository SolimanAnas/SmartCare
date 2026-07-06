// DELETE /functions/v1/self-delete-account
// Any signed-in user may delete their OWN account — no admin allow-list
// needed, a user is always authorized to delete themself (GDPR Art. 17).
// Replaces server.py's DELETE /api/account, which only worked when the
// Flask backend was actually deployed and reachable at the same origin as
// the client — the production build serves purely static pages (GitHub
// Pages), so that endpoint was silently unreachable there. This function
// is the real, always-reachable path; see pages/login.html's delete handler.
import { audit, corsHeaders, json, requireUser } from "../_shared/admin.ts";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders(req) });
  if (req.method !== "DELETE") return json(req, { error: "Method not allowed" }, 405);

  const caller = await requireUser(req);
  if (caller instanceof Response) return caller;

  // Deletes the Supabase auth user directly; the `profiles`/`user_state`
  // rows cascade via their FK `on delete cascade` — no separate cleanup.
  const { error } = await caller.client.auth.admin.deleteUser(caller.id);
  if (error) {
    audit("account_self_delete", "error", caller.email, error.message);
    return json(req, { error: "Account deletion failed" }, 502);
  }

  audit("account_self_delete", "success", caller.email);
  return json(req, { message: "Account deleted" });
});
