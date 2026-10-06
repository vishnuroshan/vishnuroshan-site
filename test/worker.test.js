import { SELF, env } from "cloudflare:test";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESUME_KEY = "Vishnu-Roshan-Resume.pdf";
const LEBENSLAUF_KEY = "Vishnu-Roshan-Lebenslauf.pdf";

let fetchSpy;

beforeEach(() => {
  fetchSpy = vi.spyOn(globalThis, "fetch");
});

afterEach(() => {
  vi.restoreAllMocks();
});

function mockSiteverify(success) {
  fetchSpy.mockImplementation(async (input) => {
    const url = typeof input === "string" ? input : input.url;
    if (url !== SITEVERIFY) throw new Error(`unexpected fetch: ${url}`);
    return Response.json({ success });
  });
}

function post(path, body) {
  return SELF.fetch(`https://example.com${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("/api/resume", () => {
  it("rejects non-POST", async () => {
    const res = await SELF.fetch("https://example.com/api/resume");
    expect(res.status).toBe(405);
  });

  it("404s when the object is missing", async () => {
    await env.RESUME_BUCKET.delete(RESUME_KEY);
    mockSiteverify(true);
    const res = await post("/api/resume", { token: "good" });
    expect(res.status).toBe(404);
  });

  it("streams the PDF as an attachment", async () => {
    await env.RESUME_BUCKET.put(RESUME_KEY, "%PDF-1.4 stub");
    mockSiteverify(true);
    const res = await post("/api/resume", { token: "good" });
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("application/pdf");
    expect(res.headers.get("Content-Disposition")).toBe(
      `attachment; filename="${RESUME_KEY}"`,
    );
    expect(await res.arrayBuffer()).toEqual(
      new TextEncoder().encode("%PDF-1.4 stub").buffer,
    );
  });

  it("streams the German PDF for lang de", async () => {
    await env.RESUME_BUCKET.put(LEBENSLAUF_KEY, "%PDF-1.4 de");
    mockSiteverify(true);
    const res = await post("/api/resume", { token: "good", lang: "de" });
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Disposition")).toBe(
      `attachment; filename="${LEBENSLAUF_KEY}"`,
    );
    expect(await res.arrayBuffer()).toEqual(
      new TextEncoder().encode("%PDF-1.4 de").buffer,
    );
  });

  it("streams the English PDF for lang en", async () => {
    await env.RESUME_BUCKET.put(RESUME_KEY, "%PDF-1.4 stub");
    mockSiteverify(true);
    const res = await post("/api/resume", { token: "good", lang: "en" });
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Disposition")).toBe(
      `attachment; filename="${RESUME_KEY}"`,
    );
  });

  it.each(["fr", "toString", "__proto__", 1])(
    "rejects unsupported lang %s before verifying",
    async (lang) => {
      mockSiteverify(true);
      const res = await post("/api/resume", { token: "good", lang });
      expect(res.status).toBe(400);
      expect(fetchSpy).not.toHaveBeenCalled();
    },
  );

  it("403s when verification fails", async () => {
    await env.RESUME_BUCKET.put(RESUME_KEY, "%PDF-1.4 stub");
    mockSiteverify(false);
    const res = await post("/api/resume", { token: "bad" });
    expect(res.status).toBe(403);
  });

  it("403s on a non-object body", async () => {
    mockSiteverify(true);
    const res = await post("/api/resume", null);
    expect(res.status).toBe(403);
  });
});

describe("host redirects", () => {
  it.each([
    "https://vishnuroshan.com/de/?ref=cv",
    "https://vishnuroshan.in/de/?ref=cv",
    "https://www.vishnuroshan.in/de/?ref=cv",
  ])("sends %s to the canonical host", async (url) => {
    const res = await SELF.fetch(url, { redirect: "manual" });
    expect(res.status).toBe(301);
    expect(res.headers.get("Location")).toBe(
      "https://www.vishnuroshan.com/de/?ref=cv",
    );
  });

  it("serves the canonical host", async () => {
    const res = await SELF.fetch("https://www.vishnuroshan.com/", {
      redirect: "manual",
    });
    expect(res.status).toBe(200);
  });
});

describe("static assets", () => {
  it("falls through to the assets binding", async () => {
    const res = await SELF.fetch("https://example.com/");
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toContain("text/html");
  });
});
