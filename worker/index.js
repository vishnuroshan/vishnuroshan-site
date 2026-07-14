const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESUME_KEY = "Vishnu-Roshan-Resume.pdf";
const DOWNLOAD_NAME = "Vishnu-Roshan-Resume.pdf";

async function verifyTurnstile(token, secret, remoteip) {
  if (!token || !secret) return false;

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (remoteip) body.append("remoteip", remoteip);

  try {
    const res = await fetch(SITEVERIFY, { method: "POST", body });
    const outcome = await res.json();
    return outcome.success === true;
  } catch {
    return false;
  }
}

async function readToken(request) {
  try {
    const data = await request.json();
    return typeof data.token === "string" ? data.token : null;
  } catch {
    return null;
  }
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

async function handlePhone(request, env) {
  const token = await readToken(request);
  const ip = request.headers.get("CF-Connecting-IP");
  if (!(await verifyTurnstile(token, env.TURNSTILE_SECRET, ip))) {
    return json({ error: "verification_failed" }, 403);
  }
  return json({ phone: env.PHONE_NUMBER });
}

async function handleResume(request, env) {
  const token = await readToken(request);
  const ip = request.headers.get("CF-Connecting-IP");
  if (!(await verifyTurnstile(token, env.TURNSTILE_SECRET, ip))) {
    return json({ error: "verification_failed" }, 403);
  }

  const object = await env.RESUME_BUCKET.get(RESUME_KEY);
  if (!object) return json({ error: "not_found" }, 404);

  return new Response(object.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
      "Cache-Control": "no-store",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/phone") {
      if (request.method !== "POST")
        return json({ error: "method_not_allowed" }, 405);
      return handlePhone(request, env);
    }

    if (url.pathname === "/api/resume") {
      if (request.method !== "POST")
        return json({ error: "method_not_allowed" }, 405);
      return handleResume(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
