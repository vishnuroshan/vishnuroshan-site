import { verifyTurnstile, readToken } from "../_turnstile.js";

const RESUME_KEY = "vishnu-Roshan-Resume.pdf";
const DOWNLOAD_NAME = "Vishnu-Roshan-Resume.pdf";

export async function onRequestPost(context) {
  const { request, env } = context;

  const token = await readToken(request);
  const ip = request.headers.get("CF-Connecting-IP");
  const ok = await verifyTurnstile(token, env.TURNSTILE_SECRET, ip);

  if (!ok) {
    return new Response(JSON.stringify({ error: "verification_failed" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  const object = await env.RESUME_BUCKET.get(RESUME_KEY);
  if (!object) {
    return new Response(JSON.stringify({ error: "not_found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(object.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
      "Cache-Control": "no-store",
    },
  });
}
