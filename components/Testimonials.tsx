import Reveal from "@/components/Reveal";
import { IconQuote, IconStar } from "@/components/Icons";

const testimonials = [
  {
    quote:
      "Booknest is dangerous for my wallet. The curated picks are so good I can't stop adding to my bag — and the free audiobooks seal the deal.",
    name: "Priya Sharma",
    role: "Member since 2019 · 214 books",
    initials: "PS",
    color: "bg-brand-700",
  },
  {
    quote:
      "As a high school librarian, I've ordered from every bookstore out there. Booknest is the only one whose recommendations my students actually read.",
    name: "Daniel Okafor",
    role: "Librarian, Chicago",
    initials: "DO",
    color: "bg-brass-600",
  },
  {
    quote:
      "The membership pays for itself within a month. Fast delivery, gorgeous packaging, and the reading app is a joy. Five stars isn't enough.",
    name: "Elena Rodriguez",
    role: "Avid reader · 89 reviews",
    initials: "ER",
    color: "bg-brand-800",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-brass-600 uppercase">
              Reader reviews
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Loved by readers everywhere
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Trusted by over 1.2 million readers and 3,400 libraries across
              the country.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-sand/80 bg-white p-6 shadow-sm">
                <IconQuote className="h-7 w-7 text-brass-400" />
                <div className="mt-3 flex items-center gap-0.5 text-brass-500" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <IconStar key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-sand/70 pt-5">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${t.color} font-display text-sm font-bold text-paper`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-fog">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
