"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Founder {
  name: string;
  role: string;
  bio: string;
  lesson: string;
  photo?: string;
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
    name: "Aaron",
    role: "Partner",
    photo: "/founders/aaron.jpg",
    bio: "I grew my company from zero to $40M in annual revenue and 200 employees in three years. Not gradually. All at once, with real stakes: hundreds of people counting on decisions I made in real time, with incomplete information and everything on the line.",
    lesson:
      "Advisors tell you what to do. Partners figure out how to do it alongside you, with real skin in the game. I learned the difference the hard way, and it is the only reason I am here.",
  },
  {
    name: "Tyrone",
    role: "Partner",
    photo: "/founders/tyrone.jpg",
    bio: "I built an entirely new consumer product category, grew to 22 employees and over $30M in sales, and was ranked the 12th fastest-growing consumer brand in the U.S. by INC Magazine. Fast growth almost broke the business before it scaled it. Cash flow timing, demand forecasting, inventory risk: I had to master all of it while the plane was already in the air.",
    lesson:
      "Growth exposes every gap you have not patched yet. I learned to look six, nine, twelve months ahead and make decisions with clarity instead of reacting to whatever is in front of me.",
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
    name: "Dylan",
    role: "Partner",
    photo: "/founders/dylan.jpg",
    bio: "I have spent 6+ years building go-to-market strategies and brand campaigns that turned unknown companies into category leaders across eCommerce, SaaS, and service businesses. I specialize in finding the offer that unlocks a market before it is obvious: the right positioning, the right message, the right moment. I leverage AI, automation, and systematic market intelligence to execute at a pace most teams cannot match.",
    lesson:
      "Most growth problems are not marketing problems. They are clarity problems. The sharpest competitive advantage is understanding what your customer wants before they can tell you.",
  },
];

interface FounderRowProps {
  founder: Founder;
  index: number;
}

function FounderRow({ founder, index }: FounderRowProps) {
  const photoLeft = index % 2 === 0;

  const PhotoBlock = (
    <div className="w-full flex-shrink-0 lg:w-[340px] xl:w-[380px]">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={founder.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 380px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-serif text-7xl font-light text-muted-light/20">
              {founder.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  const ContentBlock = (
    <div className="flex flex-1 flex-col justify-center py-4 lg:py-8">
      {/* Role label sits above name */}
      <p className="label label-on-light mb-3">{founder.role}</p>
      <h3 className="font-serif text-3xl font-semibold tracking-tight text-warm-black sm:text-4xl lg:text-5xl">
        {founder.name}
      </h3>
      <div className="gold-rule my-6" />
      <p className="max-w-lg font-sans text-base leading-relaxed text-text-on-light">
        {founder.bio}
      </p>
      <p className="mt-5 max-w-lg font-serif text-base leading-relaxed text-muted-light italic">
        {founder.lesson}
      </p>
    </div>
  );

  return (
    <ScrollReveal>
      <div
        className={`flex flex-col gap-10 lg:gap-16 ${
          photoLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {PhotoBlock}
        {ContentBlock}
      </div>
    </ScrollReveal>
  );
}

export default function Founders() {
  return (
    <section className="bg-cream py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="label label-on-light mb-6">The Founders</p>
          <h2 className="max-w-2xl font-serif text-2xl font-medium leading-snug text-warm-black sm:text-3xl lg:text-4xl">
            Five operators who&rsquo;ve been through it. Now we build
            alongside you.
          </h2>
        </ScrollReveal>

        <div className="mt-20 space-y-20 lg:mt-28 lg:space-y-28">
          {founders.map((founder, i) => (
            <div key={founder.name}>
              <FounderRow founder={founder} index={i} />
              {i < founders.length - 1 && (
                <div className="mt-20 border-t border-warm-black/8 lg:mt-28" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
