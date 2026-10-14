import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !/^\S+@\S+\.\S+$/.test(String(body?.email ?? "")) || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  console.log("[contact] message", JSON.stringify({ ...body, receivedAt: new Date().toISOString() }));
  // TODO: forward to email / CRM.
  return NextResponse.json({ ok: true });
}
