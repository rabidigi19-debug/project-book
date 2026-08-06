import BookCover from "@/components/BookCover";
import Reveal from "@/components/Reveal";
import { IconArrowRight, IconCheck } from "@/components/Icons";

const perks = [
  "Up to 40% off bestsellers & new releases",
  "Early access to pre-orders and signed editions",
  "A free audiobook with every hardcover",
  "Unlimited access to the Booknest app library",
];

export default function Membership() {
  return (
    <section id="membership" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-6 py-12 text-paper shadow-2xl sm:px-10 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-brass-500/20 blur-3xl" />
              <div className="absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brass-400/30 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-brass-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
                  Booknest Plus
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Join the club for readers
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/70">
                  One membership, every story. Save more on every shelf and
                  carry a whole library in your pocket.
                </p>

                <ul className="mt-7 space-y-3">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass-400 text-brand-950">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-paper/85">{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#newsletter"
                    className="group inline-flex h-12 items-center gap-2 rounded-full bg-brass-400 px-7 text-sm font-semibold text-brand-950 transition-all duration-300 hover:scale-[1.03] hover:bg-brass-500"
                  >
                    Start 30-day free trial
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <p className="text-xs text-paper/55">
                    No commitment &middot; cancel anytime
                  </p>
                </div>
              </div>

              <div className="relative hidden justify-center gap-5 lg:flex" aria-hidden="true">
                <BookCover
                  title="The Song of Achilles"
                  author="Madeline Miller"
                  style="navy"
                  size="lg"
                  className="w-44 -rotate-6"
                />
                <div className="flex items-center">
                  <BookCover
                    title="Atomic Habits"
                    author="James Clear"
                    style="slate"
                    size="lg"
                    className="w-48 rotate-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
