import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return false;
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

function clean(value: unknown, max = 500) {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim().slice(0, max);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many inquiries. Wait a minute." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (clean(body.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const organization = clean(body.organization, 160);
  const interest = clean(body.interest, 40);
  const message = clean(body.message, 4000);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 20) {
    return NextResponse.json({ error: "Name, valid email and a real message are required." }, { status: 400 });
  }

  const allowed = ["primal", "tech", "sciences", "capital", "exploration", "space", "partner"];
  const record = {
    at: new Date().toISOString(),
    name,
    email,
    organization,
    interest: allowed.includes(interest) ? interest : "primal",
    message,
  };

  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "inquiries.json");
  await mkdir(dir, { recursive: true });
  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await readFile(file, "utf8"));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }
  existing.push(record);
  await writeFile(file, JSON.stringify(existing, null, 2), "utf8");

  return NextResponse.json({ ok: true });
}
