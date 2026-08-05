"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/components/CartContext";
import { IconCart, IconCheck } from "@/components/Icons";

export default function AddToCartButton({ title }: { title: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const onClick = () => {
    add();
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1400);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Add "${title}" to bag`}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
        added
          ? "bg-brand-700 text-paper"
          : "bg-brand-800/5 text-brand-800 hover:bg-brand-800 hover:text-paper"
      }`}
    >
      {added ? (
        <IconCheck className="h-4.5 w-4.5" />
      ) : (
        <IconCart className="h-4.5 w-4.5" />
      )}
    </button>
  );
}
