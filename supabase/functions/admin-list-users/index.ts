// GET /functions/v1/admin-list-users
// Replaces server.py's GET /api/admin/users.
import { audit, corsHeaders, json, requireAdmin } from "../_shared/admin.ts";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders(req) });
  if (req.method !== "GET") return json(req, { error: "Method not allowed" }, 405);

  const admin = await requireAdmin(req);
  if (admin instanceof Response) return admin;

  const { data, error } = await admin.client
    .from("profiles")
    .select("id, email, full_name, role, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    audit("admin_list_users", "error", admin.email, error.message);
    return json(req, { error: "Could not reach Supabase" }, 502);
  }

  audit("admin_list_users", "success", admin.email);
  return json(
    req,
    (data || []).map((u) => ({
      id: u.id,
      full_name: u.full_name || "Google User",
      email: u.email || "",
      role: u.role || "Unassigned",
      created_at: u.created_at,
    })),
  );
});
