import BookCover from "@/components/BookCover";
import Reveal from "@/components/Reveal";
import { IconChevronRight } from "@/components/Icons";
import { categories } from "@/lib/books";

export default function Categories() {
  return (
    <section id="categories" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brass-600 uppercase">
                Browse the shelves
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Find your next favorite genre
              </h2>
            </div>
            <a
              href="#bestsellers"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-700"
            >
              All categories
              <IconChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 3) * 80}>
              <a
                href="#bestsellers"
                className="group flex items-center gap-4 rounded-2xl border border-sand/80 bg-white p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-brand-200 hover:shadow-xl"
              >
                <BookCover
                  title={cat.name}
                  author="Booknest"
                  style={cat.cover}
                  size="sm"
                  className="w-16 shrink-0 transition-transform duration-200 group-hover:scale-105"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-lg font-semibold text-ink">
                    {cat.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-fog">{cat.count.toLocaleString()} titles</p>
                </div>
                <IconChevronRight className="h-5 w-5 shrink-0 text-fog transition-all group-hover:translate-x-0.5 group-hover:text-brand-700" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
