"use client";

import { useState, type FormEvent } from "react";
import { IconSearch } from "@/components/Icons";

export default function SearchBar({
  placeholder = "Search a title, author, or ISBN…",
  dark = false,
}: {
  placeholder?: string;
  dark?: boolean;
}) {
  const [query, setQuery] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    document.getElementById("bestsellers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className={`flex w-full max-w-xl items-center gap-2 rounded-full border p-1.5 shadow-sm transition-shadow focus-within:ring-2 ${
        dark
          ? "border-white/15 bg-white/10 ring-brass-400/60 backdrop-blur-md focus-within:bg-white/15"
          : "border-ink/10 bg-white ring-brand-700/30 focus-within:border-brand-700/20"
      }`}
    >
      <span className={`pl-3 ${dark ? "text-white/60" : "text-fog"}`}>
        <IconSearch className="h-5 w-5" />
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label="Search books"
        className={`h-10 w-full bg-transparent text-sm outline-none ${
          dark ? "text-white placeholder:text-white/50" : "text-ink placeholder:text-fog"
        }`}
      />
      <button
        type="submit"
        className={`h-10 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors ${
          dark
            ? "bg-brass-400 text-brand-950 hover:bg-brass-300"
            : "bg-brand-800 text-paper hover:bg-brand-700"
        }`}
      >
        Search
      </button>
    </form>
  );
}
