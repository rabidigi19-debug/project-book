import Reveal from "@/components/Reveal";
import {
  IconBadge,
  IconHeadphones,
  IconSparkles,
  IconTruck,
} from "@/components/Icons";

const features = [
  {
    icon: IconTruck,
    title: "Free shipping",
    text: "On every order over $25 — delivered in recyclable, plastic-free packaging.",
  },
  {
    icon: IconBadge,
    title: "Members-only pricing",
    text: "Join Booknest Plus and save up to 40% on bestsellers, new releases and pre-orders.",
  },
  {
    icon: IconHeadphones,
    title: "Audiobook included",
    text: "Every purchase unlocks its professional audio edition on your Booknest app.",
  },
  {
    icon: IconSparkles,
    title: "Expert curation",
    text: "A dedicated librarian team handpicks every title we add to the shelf.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-brass-600 uppercase">
              The Booknest difference
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Everything a reader could ask for
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              We obsess over the details so you can focus on the stories —
              from doorstep to last page.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 70}>
              <div className="group h-full rounded-2xl border border-sand/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800/5 text-brand-800 transition-colors duration-200 group-hover:bg-brand-800 group-hover:text-brass-300">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
