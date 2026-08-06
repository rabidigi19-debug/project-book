"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { IconMail } from "@/components/Icons";

type Status = "idle" | "error" | "success";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="newsletter" className="scroll-mt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-sand/80 bg-white px-6 py-12 shadow-sm sm:px-10 lg:px-14">
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800/5 text-brand-800">
                <IconMail className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Get the weekly reading list
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                One email a week. Handpicked new releases, exclusive deals and
                a free ebook to get you started.
              </p>

              <form
                onSubmit={onSubmit}
                className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
                noValidate
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="you@example.com"
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "newsletter-error" : undefined}
                  className={`h-12 w-full rounded-full border bg-paper px-5 text-sm text-ink outline-none transition-colors placeholder:text-fog focus:ring-2 ${
                    status === "error"
                      ? "border-clay focus:ring-clay/30"
                      : "border-sand focus:border-brand-700/30 focus:ring-brand-700/30"
                  }`}
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-full bg-brass-400 px-7 text-sm font-semibold text-brand-950 transition-all duration-300 hover:scale-[1.03] hover:bg-brass-500"
                >
                  Subscribe
                </button>
              </form>

              {status === "error" && (
                <p id="newsletter-error" className="mt-3 text-sm font-medium text-clay-dark" role="alert">
                  Please enter a valid email address.
                </p>
              )}
              {status === "success" && (
                <p className="mt-3 text-sm font-medium text-brand-700" role="status">
                  Welcome to the list! Check your inbox to confirm.
                </p>
              )}
              <p className="mt-3 text-xs text-fog">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
