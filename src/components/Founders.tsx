"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Founder {
  name: string;
  role: string;
  photo: string;
  bio: string;
  lesson: string;
}

const founders: Founder[] = [
  {
    name: "Kanishka",
    role: "Managing Director & Founder",
    photo: "/founders/kanishka.jpg",
    bio: "I spent 7 years building a pay-for-performance digital ads agency that scaled 50+ SaaS, DTC, and service companies to seven- and eight-figure revenue, leading to multiple exits. The model forced something most agencies never face: we couldn't earn unless our clients actually grew. That accountability, over years, built the most rigorous growth system I know.",
    lesson:
      "World-class systems only work when they start with real customer empathy. Technology amplifies what you understand. It cannot replace it.",
  },
  {
    name: "Alex",
    role: "Partner",
    photo: "/founders/alex.jpg",
    bio: "I failed my first two businesses. Not from lack of effort: I had mentors, read 50+ books a year, and worked relentlessly. They failed because I was applying strategies proven for someone else's context. After rebuilding from that understanding, I went on to sell two technology companies for over $20M in four years.",
    lesson:
      "The lesson was never what to do. It was when and how to apply it. Every company has its own market, its own timing, its own constraints. Generic strategies do not survive contact with reality.",
  },
  {
    name: "Aaron",
    role: "Partner",
    photo: "/founders/aaron.jpg",
    bio: "I grew my company from zero to $40M in annual revenue and 200 employees in three years. Not gradually. All at once, with real stakes: hundreds of people counting on decisions I made in real time, with incomplete information and everything on the line.",
    lesson:
      "Advisors tell you what to do. Partners figure out how to do it alongside you, with real skin in the game. I learned the difference the hard way, and it is the only reason I am here.",
  },
  {
    name: "Dylan",
    role: "Partner",
    photo: "/founders/dylan.jpg",
    bio: "I have spent 6+ years building go-to-market strategies and brand campaigns that turned unknown companies into category leaders across eCommerce, SaaS, and service businesses. I specialize in finding the offer that unlocks a market before it is obvious: the right positioning, the right message, the right moment. I leverage AI, automation, and systematic market intelligence to execute at a pace most teams cannot match.",
    lesson:
      "Most growth problems are not marketing problems. They are clarity problems. The sharpest competitive advantage is understanding what your customer wants before they can tell you.",
  },
  {
    name: "Tyrone",
    role: "Partner",
    photo: "/founders/tyrone.jpg",
    bio: "I built an entirely new consumer product category, grew to 22 employees and over $30M in sales, and was ranked the 12th fastest-growing consumer brand in the U.S. by INC Magazine. Fast growth almost broke the business before it scaled it. Cash flow timing, demand forecasting, inventory risk: I had to master all of it while the plane was already in the air.",
    lesson:
      "Growth exposes every gap you have not patched yet. I learned to look six, nine, twelve months ahead and make decisions with clarity instead of reacting to whatever is in front of me.",
  },
];

function FounderRow({ founder, index }: { founder: Founder; index: number }) {
  const photoLeft = index % 2 === 0;
  const isLast = index === founders.length - 1;

  const photo = (
    <div
      className={photoLeft ? "" : "lg:order-2"}
      style={{ filter: "grayscale(1) contrast(1.04)" }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-stone-line">
        <Image
          src={founder.photo}
          alt={`${founder.name}, ${founder.role}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 440px"
        />
      </div>
    </div>
  );

  const content = (
    <div className={photoLeft ? "" : "lg:order-1"}>
      <div className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-label">
        {founder.role}
      </div>
      <h3 className="mt-2 mb-[18px] font-display text-[clamp(28px,3.4vw,46px)] font-bold tracking-[-0.03em] text-ink">
        {founder.name}
      </h3>
      <p className="mb-4 max-w-[64ch] font-body text-[clamp(15px,1.15vw,17px)] leading-[1.64] text-text-muted">
        {founder.bio}
      </p>
      <p className="max-w-[64ch] font-body text-[clamp(15px,1.15vw,17px)] font-medium leading-[1.64] text-ink">
        {founder.lesson}
      </p>
    </div>
  );

  const gridCols = photoLeft
    ? "lg:grid-cols-[minmax(220px,0.85fr)_minmax(0,1.45fr)]"
    : "lg:grid-cols-[minmax(0,1.45fr)_minmax(220px,0.85fr)]";

  return (
    <ScrollReveal>
      <div
        className={`grid grid-cols-1 items-start gap-[clamp(28px,4vw,64px)] border-t border-stone-line py-[clamp(36px,5vh,56px)] ${gridCols} ${
          isLast ? "border-b border-stone-line" : ""
        }`}
      >
        {photo}
        {content}
      </div>
    </ScrollReveal>
  );
}

export default function Founders() {
  return (
    <section className="bg-stone px-6 py-[clamp(72px,12vh,140px)] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1180px]">
        <ScrollReveal>
          <p className="eyebrow">The Founders</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="mt-[clamp(22px,3vh,34px)] mb-[clamp(48px,7vh,80px)] max-w-[20ch] font-display text-[clamp(28px,4.2vw,54px)] font-bold leading-[1.06] tracking-[-0.03em] text-balance text-ink">
            Five operators who&rsquo;ve been through it. Now we build alongside
            you.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {founders.map((f, i) => (
            <FounderRow key={f.name} founder={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
