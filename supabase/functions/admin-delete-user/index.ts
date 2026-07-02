// DELETE /functions/v1/admin-delete-user   body: { userId }
// Replaces server.py's DELETE /api/admin/users/<id>.
import { audit, corsHeaders, json, requireAdmin } from "../_shared/admin.ts";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders(req) });
  if (req.method !== "DELETE") return json(req, { error: "Method not allowed" }, 405);

  const admin = await requireAdmin(req);
  if (admin instanceof Response) return admin;

  let body: { userId?: string };
  try {
    body = await req.json();
  } catch {
    return json(req, { error: "Invalid JSON body" }, 400);
  }

  const userId = (body.userId || "").trim();
  if (!userId) return json(req, { error: "userId is required" }, 400);
  if (userId === admin.id) return json(req, { error: "You cannot delete your own account" }, 400);

  const { error } = await admin.client.auth.admin.deleteUser(userId);
  if (error) {
    audit("admin_delete_user", "error", admin.email, `user=${userId}`);
    return json(req, { error: "User not found or delete failed" }, 404);
  }

  audit("admin_delete_user", "success", admin.email, `deleted=${userId}`);
  return json(req, { message: "User deleted", id: userId });
});
