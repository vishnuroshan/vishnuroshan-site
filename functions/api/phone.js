import { verifyTurnstile, readToken } from "../_turnstile.js";

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

  return new Response(JSON.stringify({ phone: env.PHONE_NUMBER }), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
