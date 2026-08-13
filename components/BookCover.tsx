import { COVER_STYLES, type CoverStyle } from "@/lib/books";

type Size = "sm" | "md" | "lg" | "xl";

const SIZES: Record<
  Size,
  { label: string; title: string; author: string; pad: string }
> = {
  sm: {
    label: "text-[5px] tracking-[0.08em] whitespace-nowrap",
    title: "text-[8px] leading-tight",
    author: "text-[6px] tracking-[0.12em]",
    pad: "px-1 py-3",
  },
  md: {
    label: "text-[8px] tracking-[0.28em]",
    title: "text-base",
    author: "text-[10px] tracking-[0.18em]",
    pad: "px-4 py-4",
  },
  lg: {
    label: "text-[10px] tracking-[0.28em]",
    title: "text-2xl",
    author: "text-xs tracking-[0.18em]",
    pad: "px-5 py-5",
  },
  xl: {
    label: "text-[11px] tracking-[0.28em]",
    title: "text-3xl",
    author: "text-sm tracking-[0.18em]",
    pad: "px-6 py-6",
  },
};

export default function BookCover({
  title,
  author,
  style,
  size = "md",
  className = "",
}: {
  title: string;
  author: string;
  style: CoverStyle;
  size?: Size;
  className?: string;
}) {
  const s = COVER_STYLES[style];
  const t = SIZES[size];

  return (
    <div
      className={`relative aspect-[2/3] overflow-hidden rounded-r-md rounded-l-sm select-none ${className}`}
      style={{
        background: `linear-gradient(135deg, ${s.from} 0%, ${s.to} 100%)`,
        boxShadow: "0 18px 40px -18px rgba(20, 14, 8, 0.55)",
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-0 w-[7px] bg-black/25" />
      <div className="absolute inset-y-0 left-[7px] w-px bg-white/20" />
      <div
        className={`absolute inset-x-2 inset-y-2 flex flex-col justify-between rounded-sm border ${
          s.accent === "#f8e8cf" || s.accent === "#f1e2be" ? "border-white/25" : ""
        } ${t.pad}`}
        style={{
          borderColor: s.accent,
          background: "radial-gradient(120% 90% at 20% 0%, rgba(255,255,255,0.14), transparent 55%)",
        }}
      >
        {size === "sm" ? (
          <div className={`flex flex-col items-center gap-0.5 ${t.label} font-medium uppercase`} style={{ color: s.accent }}>
            <span>Booknest</span>
            <span className="text-[3.5px] tracking-[0.12em] opacity-60">EST. 2016</span>
          </div>
        ) : (
          <div className={`flex items-center justify-between gap-2 ${t.label} font-medium uppercase`} style={{ color: s.accent }}>
            <span>Booknest</span>
            <span className="pr-1.5 opacity-70">EST. 2016</span>
          </div>
        )}
        <div className="text-center">
          <p
            className={`font-display leading-tight font-semibold ${t.title}`}
            style={{ color: "#fff" }}
          >
            {title}
          </p>
          <div
            className="mx-auto mt-2 h-px w-8"
            style={{ background: s.accent }}
          />
        </div>
        <p
          className={`text-center ${t.author} uppercase`}
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          {author}
        </p>
      </div>
    </div>
  );
}
