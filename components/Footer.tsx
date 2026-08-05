import {
  IconBook,
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from "@/components/Icons";

const columns = [
  {
    title: "Shop",
    links: ["Bestsellers", "New arrivals", "Pre-orders", "Signed editions", "Gift cards"],
  },
  {
    title: "Company",
    links: ["About us", "Our book club", "Careers", "Press", "Sustainability"],
  },
  {
    title: "Support",
    links: ["Help center", "Shipping & returns", "Track your order", "Gift codes", "Contact us"],
  },
];

const socials = [
  { label: "Twitter", icon: IconTwitter },
  { label: "Instagram", icon: IconInstagram },
  { label: "Facebook", icon: IconFacebook },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Booknest — back to top">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800 text-brass-400">
                <IconBook className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">Booknest</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              The premium online bookstore for curious minds. Handpicked
              titles, delivered to your door since 2016.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper/70 transition-colors hover:border-brass-400/40 hover:text-brass-300"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-xs font-semibold tracking-[0.18em] text-brass-400 uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-paper/65 transition-colors hover:text-paper"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Booknest Books &amp; Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#top" className="transition-colors hover:text-paper">Terms</a>
            <a href="#top" className="transition-colors hover:text-paper">Privacy</a>
            <a href="#top" className="transition-colors hover:text-paper">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
