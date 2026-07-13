const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(token, secret, remoteip) {
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

export async function readToken(request) {
  try {
    const data = await request.json();
    return typeof data.token === "string" ? data.token : null;
  } catch {
    return null;
  }
}
