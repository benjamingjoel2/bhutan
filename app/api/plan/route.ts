import { NextResponse } from "next/server";

/**
 * Receives a trip-planner submission.
 * TODO: forward to email (e.g. Resend / Postmark) and CRM (e.g. HubSpot / Pipedrive).
 * For now the payload is logged so it shows in the Vercel function logs.
 */
export async function POST(req: Request) {
  const payload = await req.json().catch(() => null);
  if (!payload || typeof payload !== "object") return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  const required = ["name", "email", "nights", "journeyTypes"];
  const missing = required.filter((k) => payload[k] === undefined || payload[k] === "" || (Array.isArray(payload[k]) && payload[k].length === 0));
  if (missing.length) return NextResponse.json({ ok: false, error: `Missing: ${missing.join(", ")}` }, { status: 400 });
  if (!/^\S+@\S+\.\S+$/.test(String(payload.email))) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });

  const enquiry = { ...payload, receivedAt: new Date().toISOString(), userAgent: req.headers.get("user-agent") };
  console.log("[plan-your-journey] enquiry", JSON.stringify(enquiry, null, 2));
  // TODO: await sendEmail(enquiry); await crm.createLead(enquiry);
  return NextResponse.json({ ok: true, reference: `DH-${Date.now().toString(36).toUpperCase()}` });
}
