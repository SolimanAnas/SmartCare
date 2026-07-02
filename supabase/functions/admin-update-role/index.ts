// PATCH /functions/v1/admin-update-role   body: { userId, role }
// Replaces server.py's PATCH /api/admin/users/<id>/role.
import { audit, corsHeaders, json, requireAdmin } from "../_shared/admin.ts";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders(req) });
  if (req.method !== "PATCH") return json(req, { error: "Method not allowed" }, 405);

  const admin = await requireAdmin(req);
  if (admin instanceof Response) return admin;

  let body: { userId?: string; role?: string };
  try {
    body = await req.json();
  } catch {
    return json(req, { error: "Invalid JSON body" }, 400);
  }

  const userId = (body.userId || "").trim();
  const role = (body.role || "").trim();
  if (!userId) return json(req, { error: "userId is required" }, 400);
  if (!role) return json(req, { error: "Role is required" }, 400);
  if (role.length > 50) return json(req, { error: "Role name is too long" }, 400);

  const { data, error } = await admin.client
    .from("profiles")
    .update({ role })
    .eq("id", userId)
    .select();

  if (error) {
    audit("admin_update_role", "error", admin.email, `user=${userId}`);
    return json(req, { error: "Update failed" }, 502);
  }
  if (!data || data.length === 0) return json(req, { error: "User not found" }, 404);

  audit("admin_update_role", "success", admin.email, `user=${userId} -> ${role}`);
  return json(req, { message: "Role updated", id: userId, role });
});
