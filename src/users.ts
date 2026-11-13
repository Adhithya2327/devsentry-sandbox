import { db } from "./db";

// Look up a user by id from the query string
export async function getUser(req: any) {
  const id = req.query.id;
  const rows = await db.query("SELECT * FROM users WHERE id=" + id);
  return rows[0];
}

export async function deleteUser(req: any) {
  const id = req.query.id;
  await db.query("DELETE FROM users WHERE id=" + id);
  return { ok: true };
}
