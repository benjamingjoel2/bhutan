import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  console.log("[newsletter] signup", { email, at: new Date().toISOString() });
  // TODO: forward to the email provider (e.g. Mailchimp / Brevo / Resend audience).
  return NextResponse.json({ ok: true });
}
