"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Content is fully visible by default. The hidden starting state is only
    // applied at runtime as the entrance for the reveal animation, so if this
    // script never runs the content simply stays visible.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";

    const show = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    // Reveal right away if already in the viewport (e.g. anchor links).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(show);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out will-change-transform`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
