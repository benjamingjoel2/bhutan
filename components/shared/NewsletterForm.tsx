"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className, light }: { className?: string; light?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setState("error"); return; }
    setState("sending");
    try {
      const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      setState(res.ok ? "done" : "error");
    } catch { setState("error"); }
  };

  if (state === "done") return <p className={cn("text-[0.9375rem]", light ? "text-white/90" : "text-pine", className)}>Thank you. The next letter will find you.</p>;

  return (
    <form onSubmit={submit} className={cn("flex items-end gap-4", className)} noValidate>
      <label className="flex-1">
        <span className="sr-only">Email address</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
          placeholder="Your email"
          aria-invalid={state === "error"}
          className={cn("field", light && "text-white placeholder:text-white/60 border-white/50 focus:border-saffron")}
        />
      </label>
      <button type="submit" disabled={state === "sending"} className={cn("btn !py-3", light ? "btn-ghost" : "btn-outline")}>
        {state === "sending" ? "Sending" : "Subscribe"}
      </button>
      {state === "error" && <span role="alert" className="sr-only">Please enter a valid email address.</span>}
    </form>
  );
}
