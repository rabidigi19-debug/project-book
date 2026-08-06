import BookCard from "@/components/BookCard";
import Reveal from "@/components/Reveal";
import { IconChevronRight } from "@/components/Icons";
import { books } from "@/lib/books";

export default function FeaturedBooks() {
  return (
    <section id="bestsellers" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brass-600 uppercase">
                This week&apos;s picks
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Bestsellers you&apos;ll love
              </h2>
            </div>
            <a
              href="#bestsellers"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-700"
            >
              View all books
              <IconChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          {books.map((book, i) => (
            <Reveal key={book.id} delay={(i % 4) * 70}>
              <BookCard book={book} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
