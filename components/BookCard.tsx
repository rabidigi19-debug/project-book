import BookCover from "@/components/BookCover";
import AddToCartButton from "@/components/AddToCartButton";
import { IconStar } from "@/components/Icons";
import type { Book } from "@/lib/books";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function BookCard({ book }: { book: Book }) {
  const filledStars = Math.round(book.rating);

  return (
    <article className="group flex flex-col rounded-2xl p-3 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
      <div className="relative">
        <BookCover
          title={book.title}
          author={book.author}
          style={book.cover}
          size="md"
          className="mx-auto w-full max-w-[190px] transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {book.tag && (
          <span className="absolute top-2 left-2 rounded-full bg-brand-800 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-brass-300 uppercase">
            {book.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-1 pt-4">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-fog uppercase">
          {book.genre}
        </p>
        <h3 className="mt-1 line-clamp-2 font-display text-lg leading-snug font-semibold text-ink">
          {book.title}
        </h3>
        <p className="mt-0.5 text-sm text-ink-soft">by {book.author}</p>

        <div className="mt-2 flex items-center gap-1.5" aria-label={`Rated ${book.rating} out of 5`}>
          <span className="flex items-center gap-0.5 text-brass-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar
                key={i}
                filled={i < filledStars}
                className="h-3.5 w-3.5"
              />
            ))}
          </span>
          <span className="text-xs font-semibold text-ink">{book.rating.toFixed(1)}</span>
          <span className="text-xs text-fog">({book.reviews.toLocaleString()})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-brand-800">
              {formatPrice(book.price)}
            </span>
            {book.oldPrice && (
              <span className="text-sm text-fog line-through">
                {formatPrice(book.oldPrice)}
              </span>
            )}
          </div>
          <AddToCartButton title={book.title} />
        </div>
      </div>
    </article>
  );
}
