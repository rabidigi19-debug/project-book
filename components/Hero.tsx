import BookCover from "@/components/BookCover";
import SearchBar from "@/components/SearchBar";
import { IconArrowRight, IconStar } from "@/components/Icons";

const stats = [
  { value: "60K+", label: "Titles in stock" },
  { value: "1.2M+", label: "Happy readers" },
  { value: "4.9", label: "Average rating" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 text-paper"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-brass-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full flex-1 max-w-7xl gap-14 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-8 lg:pt-40 lg:pb-24">
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brass-400/30 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-brass-300 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
            The reader&apos;s home since 2016
          </span>

          <div
            className="animate-fade-up mt-6 h-px w-16 bg-brass-400/80"
            style={{ animationDelay: "40ms" }}
            aria-hidden="true"
          />

          <h1
            className="animate-fade-up mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Every great story begins with{" "}
            <span className="text-brass-400 italic">a book.</span>
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-xl text-lg leading-relaxed text-paper/70"
            style={{ animationDelay: "160ms" }}
          >
            Handpicked titles, members-only pricing, and a free audiobook with
            every purchase. Welcome to the bookstore that feels like a library.
          </p>

          <div className="animate-fade-up mt-8" style={{ animationDelay: "240ms" }}>
            <SearchBar dark />
          </div>

          <div
            className="animate-fade-up mt-7 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#bestsellers"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-brass-400 px-7 text-sm font-semibold text-brand-950 transition-all duration-300 hover:scale-[1.03] hover:bg-brass-500"
            >
              Shop bestsellers
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#categories"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-7 text-sm font-semibold text-paper transition-colors hover:bg-white/10"
            >
              Explore genres
            </a>
          </div>

          <dl
            className="animate-fade-up mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-7"
            style={{ animationDelay: "400ms" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-paper">
                  {s.value === "4.9" ? (
                    <span className="inline-flex items-center gap-1.5">
                      {s.value}
                      <IconStar className="h-4 w-4 text-brass-400" />
                    </span>
                  ) : (
                    s.value
                  )}
                </dd>
                <dd className="mt-1 text-xs tracking-wide text-paper/55 uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up relative mx-auto hidden w-full max-w-md sm:block lg:max-w-none" style={{ animationDelay: "200ms" }}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-md" aria-hidden="true">
            <div className="absolute inset-6 rounded-full bg-brand-500/20 blur-2xl" />

            <div className="absolute top-6 -left-2 w-32 rotate-[-14deg] opacity-90 sm:w-36 lg:w-40">
              <BookCover title="Dune" author="Frank Herbert" style="terra" size="lg" />
            </div>
            <div className="absolute top-2 left-1/2 w-36 -translate-x-1/2 rotate-[-4deg] opacity-95 sm:w-40 lg:w-44">
              <BookCover title="The Midnight Library" author="Matt Haig" style="forest" size="lg" />
            </div>
            <div className="absolute right-0 bottom-2 w-36 rotate-[10deg] sm:w-40 lg:w-44">
              <BookCover title="Educated" author="Tara Westover" style="cocoa" size="lg" />
            </div>

            <div className="absolute -left-2 bottom-8 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-3.5 w-3.5 text-brass-400" />
                ))}
              </div>
              <p className="mt-1.5 text-xs font-semibold text-paper">
                4.9 / 5 &middot; 21,000+ reviews
              </p>
            </div>

            <div className="absolute -right-1 top-10 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-4">
              <p className="text-[11px] tracking-wide text-paper/60 uppercase">Audio included</p>
              <p className="mt-0.5 text-xs font-semibold text-brass-300">
                Free with every book
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-10 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -bottom-px left-0 h-full w-full text-paper"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0 40h1440V20c-120 14-280 22-520 22C560 42 240 24 0 4v36Z" />
        </svg>
      </div>
    </section>
  );
}
