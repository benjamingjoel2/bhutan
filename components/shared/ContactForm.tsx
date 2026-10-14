"use client";

import { useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) errs.email = "A valid email address.";
    if (!data.message?.trim()) errs.message = "A line or two.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(res.ok ? "done" : "error");
    } catch { setState("error"); }
  };

  if (state === "done") return <div className="py-10"><p className="eyebrow mb-3">Received</p><p className="display-md">Thank you. We will write back within two working days.</p></div>;

  return (
    <form onSubmit={submit} noValidate className="space-y-7">
      <p className="eyebrow">Send a message</p>
      <label className="block"><span className="field-label">Name</span><input name="name" className="field" autoComplete="name" aria-invalid={!!errors.name} />{errors.name && <span role="alert" className="mt-1 block text-[0.8125rem] text-maroon">{errors.name}</span>}</label>
      <label className="block"><span className="field-label">Email</span><input name="email" type="email" className="field" autoComplete="email" aria-invalid={!!errors.email} />{errors.email && <span role="alert" className="mt-1 block text-[0.8125rem] text-maroon">{errors.email}</span>}</label>
      <label className="block"><span className="field-label">Phone (optional)</span><input name="phone" type="tel" className="field" autoComplete="tel" /></label>
      <label className="block"><span className="field-label">Message</span><textarea name="message" rows={5} className="field" aria-invalid={!!errors.message} />{errors.message && <span role="alert" className="mt-1 block text-[0.8125rem] text-maroon">{errors.message}</span>}</label>
      <button type="submit" disabled={state === "sending"} className="btn btn-primary">{state === "sending" ? "Sending…" : "Send"}</button>
      {state === "error" && <p role="alert" className="text-[0.875rem] text-maroon">Something went wrong. Please email us directly.</p>}
    </form>
  );
}
