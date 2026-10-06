const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const CANONICAL_ORIGIN = "https://www.vishnuroshan.com";
const REDIRECT_HOSTS = new Set([
  "vishnuroshan.com",
  "vishnuroshan.in",
  "www.vishnuroshan.in",
]);
const RESUMES = {
  en: "Vishnu-Roshan-Resume.pdf",
  de: "Vishnu-Roshan-Lebenslauf.pdf",
};

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

async function readBody(request) {
  try {
    const data = await request.json();
    return data && typeof data === "object" ? data : {};
  } catch {
    return {};
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

async function handleResume(request, env) {
  const body = await readBody(request);
  const lang = body.lang ?? "en";
  if (typeof lang !== "string" || !Object.hasOwn(RESUMES, lang)) {
    return json({ error: "unsupported_lang" }, 400);
  }

  const token = typeof body.token === "string" ? body.token : null;
  const ip = request.headers.get("CF-Connecting-IP");
  if (!(await verifyTurnstile(token, env.TURNSTILE_SECRET, ip))) {
    return json({ error: "verification_failed" }, 403);
  }

  const key = RESUMES[lang];
  const object = await env.RESUME_BUCKET.get(key);
  if (!object) return json({ error: "not_found" }, 404);

  return new Response(object.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${key}"`,
      "Cache-Control": "no-store",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (REDIRECT_HOSTS.has(url.hostname)) {
      return Response.redirect(CANONICAL_ORIGIN + url.pathname + url.search, 301);
    }

    if (url.pathname === "/api/resume") {
      if (request.method !== "POST")
        return json({ error: "method_not_allowed" }, 405);
      return handleResume(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
