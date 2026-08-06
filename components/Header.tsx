"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/CartContext";
import { IconBook, IconCart, IconClose, IconMenu, IconSearch } from "@/components/Icons";

const NAV_LINKS = [
  { label: "Categories", href: "#categories" },
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "Features", href: "#features" },
  { label: "Booknest Plus", href: "#membership" },
  { label: "Reviews", href: "#reviews" },
];

export default function Header() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = !scrolled && !open;

  const navLinkClass = overHero
    ? "text-white/85 hover:text-white"
    : "text-ink-soft hover:text-ink";

  const iconBtnClass = overHero
    ? "text-white hover:bg-white/10"
    : "text-ink hover:bg-brand-800/5";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overHero
          ? "bg-transparent text-white"
          : "border-b border-sand/70 bg-paper/90 text-ink backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Booknest — home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800 text-brass-400 transition-colors group-hover:bg-brand-700">
            <IconBook className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">Booknest</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative px-3 py-2 text-sm font-medium transition-colors ${navLinkClass}`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#bestsellers"
            aria-label="Search books"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${iconBtnClass}`}
          >
            <IconSearch className="h-5 w-5" />
          </a>
          <a
            href="#bestsellers"
            aria-label="Search books"
            className={`hidden h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors lg:flex ${
              overHero
                ? "border-white/25 text-white/85 hover:bg-white/10"
                : "border-ink/10 text-ink-soft hover:bg-ink/5"
            }`}
          >
            <IconSearch className="h-4 w-4" />
            <span>Search a title, author…</span>
          </a>
          <a
            href="#bestsellers"
            aria-label={`Shopping bag, ${count} item${count === 1 ? "" : "s"}`}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:h-11 lg:w-11 ${iconBtnClass}`}
          >
            <IconCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brass-500 px-1 text-[11px] font-bold text-brand-950">
                {count}
              </span>
            )}
          </a>
          <a
            href="#membership"
            className={`hidden h-11 items-center rounded-full bg-brass-400 px-5 text-sm font-semibold text-brand-950 transition-all duration-300 hover:scale-[1.03] hover:bg-brass-500 sm:flex`}
          >
            Sign in
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${iconBtnClass}`}
          >
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-sand/70 bg-paper text-ink shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-cream hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#membership"
              onClick={() => setOpen(false)}
              className="mt-2 flex h-12 items-center justify-center rounded-full bg-brass-400 px-5 text-base font-semibold text-brand-950 transition-all duration-300 hover:scale-[1.02] hover:bg-brass-500"
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
