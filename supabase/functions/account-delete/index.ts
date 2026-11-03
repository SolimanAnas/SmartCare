// DELETE /functions/v1/account-delete   (no body)
// Self-service account deletion (GDPR Art. 17). Any signed-in user may delete
// their OWN account: the user id comes from the verified session token, never
// from the request, so a caller can only ever delete themself. The
// `profiles` and `user_state` rows go with it via their FK `on delete cascade`.
import { audit, corsHeaders, json, requireUser } from "../_shared/admin.ts";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders(req) });
  if (req.method !== "DELETE") return json(req, { error: "Method not allowed" }, 405);

  const caller = await requireUser(req);
  if (caller instanceof Response) return caller;

  const { error } = await caller.client.auth.admin.deleteUser(caller.id);
  if (error) {
    audit("account_self_delete", "error", caller.email || caller.id, error.message);
    return json(req, { error: "Account deletion failed" }, 502);
  }

  audit("account_self_delete", "success", caller.email || caller.id);
  return json(req, { message: "Account deleted" });
});
