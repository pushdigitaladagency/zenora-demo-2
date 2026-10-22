import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Menu,
  Phone,
  X,
} from "lucide-react";

const PHONE_DISPLAY = "+91 80780 84771";
const PHONE_TEL = "+918078084771";
const WHATSAPP = "918078084771";

const NAV = [
  { id: "story", label: "The idea" },
  { id: "villa", label: "The villa" },
  { id: "land", label: "The land" },
  { id: "life", label: "Amenities" },
  { id: "gallery", label: "Gallery" },
  { id: "place", label: "Location" },
  { id: "visit", label: "Visit" },
] as const;

const PILLARS = [
  {
    n: "01",
    title: "Form",
    text: "The villas are drawn with a calm, timeless line. Proportions, shade and materials are chosen so the home feels balanced — never busy.",
    image: "/images/g2.jpg",
    alt: "A Zenora villa with a deep timber soffit and planted front garden",
  },
  {
    n: "02",
    title: "Function",
    text: "Rooms are planned around ordinary days: arriving home, cooking, gathering, and retreating. The layout is meant to make living simpler.",
    image: "/images/g3.jpg",
    alt: "Living and dining room inside a Zenora villa",
  },
  {
    n: "03",
    title: "Nature",
    text: "Half the site is kept green. Gardens, trees and open ground sit between the homes, so the address feels open rather than packed.",
    image: "/images/about.jpg",
    alt: "Landscaped garden court between the villas at Zenora",
  },
  {
    n: "04",
    title: "Comfort",
    text: "A quieter plan for peaceful living. Shade, setbacks and generous rooms give each home room to breathe.",
    image: "/images/g1.jpg",
    alt: "A planted water court with stepping stones at Zenora",
  },
  {
    n: "05",
    title: "Future-readiness",
    text: "The community is planned to stay useful — shared amenities, open land and a clear master plan, not a layout that only works on day one.",
    image: "/images/slider1.jpg",
    alt: "The central court of Zenora, with a circular garden and gold sculpture",
  },
] as const;

const AMENITIES: { title: string; text: string; image: string; alt: string; frame: string }[] = [
  {
    title: "Landscaped gardens",
    text: "Planted courts, lawns and trees held between the villas.",
    image: "/images/about.jpg",
    alt: "Landscaped garden court between the villas at Zenora",
    frame: "col-span-2 row-span-2",
  },
  {
    title: "Swimming pool",
    text: "A shared pool for unhurried mornings and warm evenings.",
    image: "/images/amenities/pool.jpg",
    alt: "Swimming pool beside a timber pavilion at Zenora",
    frame: "col-span-2",
  },
  {
    title: "Clubhouse",
    text: "A place to gather, host a small occasion, or simply pause.",
    image: "/images/amenities/clubhouse.jpg",
    alt: "The clubhouse pavilion at Zenora",
    frame: "col-span-2",
  },
  {
    title: "Gym",
    text: "A quiet room for a daily session, steps from home.",
    image: "/images/amenities/gym.jpg",
    alt: "Gym inside the Zenora community",
    frame: "",
  },
  {
    title: "Jogging track",
    text: "A loop through the open ground, made for an easy pace.",
    image: "/images/amenities/jogging.jpg",
    alt: "A garden path for walking and jogging at Zenora",
    frame: "",
  },
  {
    title: "Yoga",
    text: "Outdoor space to slow down, with sky and garden around you.",
    image: "/images/amenities/yoga.jpg",
    alt: "An open yoga deck among the gardens",
    frame: "",
  },
  {
    title: "Children’s play",
    text: "A garden corner set aside for children.",
    image: "/images/amenities/play.jpg",
    alt: "Children’s play lawn at Zenora",
    frame: "",
  },
  {
    title: "Indoor games",
    text: "A covered room for play when the weather turns.",
    image: "/images/amenities/games.jpg",
    alt: "Indoor games room at Zenora",
    frame: "col-span-2 md:col-span-4",
  },
];

type Shot = {
  src: string;
  alt: string;
  caption: string;
  group: "Architecture" | "Gardens" | "Interiors";
};

const SHOTS: Shot[] = [
  {
    src: "/images/slider1.jpg",
    alt: "Aerial view of Zenora’s central court and sculpture",
    caption: "Central court",
    group: "Architecture",
  },
  {
    src: "/images/slider2.jpg",
    alt: "Arrival gateway of the Zenvistas community",
    caption: "Arrival",
    group: "Architecture",
  },
  {
    src: "/images/g2.jpg",
    alt: "Front elevation of a Zenora villa",
    caption: "Villa elevation",
    group: "Architecture",
  },
  {
    src: "/images/g4.jpg",
    alt: "Overhead view of villa roofs and a planted internal street",
    caption: "The street",
    group: "Architecture",
  },
  {
    src: "/images/about.jpg",
    alt: "Flowering garden with a bench between villa blocks",
    caption: "Garden court",
    group: "Gardens",
  },
  {
    src: "/images/g1.jpg",
    alt: "Lily pond and stone stepping path",
    caption: "Water garden",
    group: "Gardens",
  },
  {
    src: "/images/g3.jpg",
    alt: "Dining and living room with warm timber doors",
    caption: "Living & dining",
    group: "Interiors",
  },
];

const PLACES = [
  { name: "KMCH Medical College", km: "4.1", kind: "Care", query: "KMCH Institute of Health Sciences and Research, Coimbatore" },
  { name: "Coimbatore Airport", km: "4.7", kind: "Travel", query: "Coimbatore International Airport" },
  { name: "Tidel Park", km: "7", kind: "Work", query: "TIDEL Park, Coimbatore" },
  { name: "Fun Mall", km: "7.4", kind: "Retail", query: "Fun Republic Mall, Coimbatore" },
  { name: "Prozone", km: "9.4", kind: "Retail", query: "Prozone Mall, Coimbatore" },
  { name: "Cognizant", km: "11.2", kind: "Work", query: "Cognizant Technology Solutions, Coimbatore" },
] as const;

const MAX_KM = Math.max(...PLACES.map((p) => Number(p.km)));

const ORIGIN = "11.065362,77.046092";

function routeEmbed(query: string) {
  return `https://maps.google.com/maps?f=d&saddr=${ORIGIN}&daddr=${encodeURIComponent(query)}&hl=en&z=12&output=embed`;
}

function routeLink(query: string) {
  return `https://www.google.com/maps/dir/?api=1&origin=${ORIGIN}&destination=${encodeURIComponent(query)}&travelmode=driving`;
}

const INTENTS = [
  { id: "visit", label: "Site visit" },
  { id: "brochure", label: "Brochure" },
  { id: "unit", label: "Unit plan" },
  { id: "master", label: "Master plan" },
  { id: "callback", label: "Call back" },
] as const;

type Intent = (typeof INTENTS)[number]["id"];

const FACTS = [
  { k: "60", l: "Exclusive villas" },
  { k: "7", l: "Acres at Goldwins" },
  { k: "50%", l: "Kept as gardens" },
  { k: "4 BHK", l: "7,829.23 sq.ft" },
];

function useReveal(dep: unknown) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [dep]);
}

function waLink(note: string) {
  const text = `Hi! I'm interested in Zenora by Zenvistas at Goldwins, Coimbatore. ${note}`.trim();
  return `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(text)}`;
}

export function ZenoraPage() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("story");
  const [pillar, setPillar] = useState(0);
  const [amenity, setAmenity] = useState(0);
  const [filter, setFilter] = useState<"All" | Shot["group"]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [plan, setPlan] = useState<null | "master" | "unit">(null);
  const [place, setPlace] = useState(0);
  const [drawer, setDrawer] = useState<Intent | null>(null);
  const filmRef = useRef<HTMLDivElement>(null);
  const ideaRef = useRef<HTMLDivElement>(null);
  const pillarRef = useRef(0);
  const bannerRef = useRef<HTMLVideoElement>(null);

  const shots = filter === "All" ? SHOTS : SHOTS.filter((s) => s.group === filter);

  useReveal(filter);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const locked = menu || drawer !== null || lightbox !== null || plan !== null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menu, drawer, lightbox, plan]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        setDrawer(null);
        setLightbox(null);
        setPlan(null);
      }
      if (lightbox === null) return;
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % shots.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, shots.length]);

  useEffect(() => {
    const video = bannerRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const root = ideaRef.current;
    if (!root) return;
    const snap = () => {
      root.scrollTo({ left: pillarRef.current * root.clientWidth, behavior: "auto" });
    };
    window.addEventListener("resize", snap);
    return () => window.removeEventListener("resize", snap);
  }, []);

  const go = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showIdea = (index: number) => {
    const next = ((index % PILLARS.length) + PILLARS.length) % PILLARS.length;
    pillarRef.current = next;
    setPillar(next);
    const root = ideaRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.scrollTo({ left: next * root.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-line bg-paper px-4 lg:hidden">
        <a href="#top" className="inline-flex h-full items-center">
          <img src="/images/logo.png" alt="Zenora" className="h-12 w-auto" />
        </a>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card"
          aria-expanded={menu}
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu((v) => !v)}
        >
          {menu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menu && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-paper px-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="border-b border-line py-4 text-left font-display text-4xl"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMenu(false);
              setDrawer("visit");
            }}
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-paper active:scale-[0.96]"
          >
            Arrange a visit <ArrowRight size={18} />
          </button>
        </div>
      )}

      <div id="top" className="lg:grid lg:grid-cols-[25rem_minmax(0,1fr)] xl:grid-cols-[28rem_minmax(0,1fr)]">
        <aside className="order-2 border-b border-line px-5 py-8 lg:sticky lg:top-0 lg:order-1 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:border-r lg:border-b-0 lg:px-8 lg:py-8 xl:px-10">
          <h1 className="hidden lg:block">
            <img
              src="/images/logo.png"
              alt="Zenora, authorized channel partner"
              className="h-auto w-56 max-w-full"
            />
          </h1>
          <p className="mt-4 text-xs font-medium tracking-widest text-muted uppercase">Goldwins, Coimbatore</p>
          <p className="mt-3 max-w-sm text-lg leading-relaxed text-ink">
            Sixty luxury villas on seven acres in Coimbatore. Half the land stays garden. A calm 4 BHK
            address, from ₹5.50 crore.
          </p>
          <figure className="mt-5 overflow-hidden rounded-2xl">
            <img
              src="/images/g2.jpg"
              alt="A Zenora villa with a timber soffit and a planted front garden"
              className="aspect-[5/4] w-full object-cover"
            />
          </figure>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {FACTS.map((f) => (
              <div key={f.l} className="bg-card px-4 py-3">
                <dt className="num text-2xl leading-none">{f.k}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{f.l}</dd>
              </div>
            ))}
          </dl>

          <nav className="mt-6 hidden flex-col gap-1 lg:flex" aria-label="Sections">
            {NAV.map((item) => {
              const on = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className={`flex min-h-11 items-center justify-between rounded-xl px-3 text-left text-base transition-colors ${
                    on ? "bg-ink text-paper" : "text-ink hover:bg-card"
                  }`}
                >
                  {item.label}
                  <span className={`text-xs ${on ? "text-paper/70" : "text-muted"}`} aria-hidden>
                    {on ? "●" : ""}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3 lg:mt-auto lg:pt-6">
            <button
              type="button"
              onClick={() => setDrawer("visit")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-paper transition-transform active:scale-[0.96]"
            >
              Arrange a visit <ArrowRight size={18} />
            </button>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <a className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline" href={`tel:${PHONE_TEL}`}>
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
              <a
                className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                href={waLink("Please share details.")}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-xs leading-relaxed text-muted">
              Booking is open. Spot booking offers and early-buy discounts are available. RERA
              TNRERA/11/BLG/0013/2026.
            </p>
          </div>
        </aside>

        <div className="order-1 min-w-0 lg:order-2">
          <div>
            <div className="relative h-[58svh] min-h-[420px] overflow-hidden bg-ink lg:h-dvh">
              <video
                ref={bannerRef}
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/banner-hero.jpg"
                aria-label="The central court at Zenora"
              >
                <source src="/videos/banner.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-x-10 bottom-8 hidden lg:block">
                <PriceCard onInterest={() => setDrawer("callback")} />
              </div>
            </div>
            <div className="px-5 lg:hidden">
              <div className="relative z-10 -mt-16">
                <PriceCard onInterest={() => setDrawer("callback")} />
              </div>
            </div>
          </div>

          <section id="story" className="scroll-mt-20 px-5 py-16 lg:px-12 lg:py-24 xl:px-16">
            <div className="reveal">
              <p className="text-xs font-medium tracking-widest text-muted uppercase">Five ideas</p>
              <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">
                A home planned to feel easy.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                Every decision at Zenora comes back to the same five ideas. Together they balance how the
                villa looks, how it works, the gardens around it, the comfort inside, and how well it will
                live years from now.
              </p>
            </div>

            <div
              className="reveal mt-8 flex gap-2 overflow-x-auto pb-1"
              role="tablist"
              aria-label="Design ideas"
            >
              {PILLARS.map((p, i) => {
                const on = i === pillar;
                return (
                  <button
                    key={p.title}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    id={`pillar-tab-${i}`}
                    onClick={() => showIdea(i)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight") showIdea(i + 1);
                      if (e.key === "ArrowLeft") showIdea(i - 1);
                    }}
                    className={`min-h-12 shrink-0 rounded-full border px-4 text-base transition-colors active:scale-[0.96] ${
                      on ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink"
                    }`}
                  >
                    <span className="num mr-2 text-sm opacity-70">{p.n}</span>
                    {p.title}
                  </button>
                );
              })}
            </div>

            <div
              ref={ideaRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Five ideas"
              className="mt-6 flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onScroll={(e) => {
                const el = e.currentTarget;
                const i = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
                const next = Math.max(0, Math.min(PILLARS.length - 1, i));
                pillarRef.current = next;
                setPillar((cur) => (cur === next ? cur : next));
              }}
            >
              {PILLARS.map((p, i) => (
                <article
                  key={p.title}
                  role="tabpanel"
                  aria-labelledby={`pillar-tab-${i}`}
                  className="grid min-w-0 max-w-full shrink-0 grow-0 basis-full snap-start items-stretch gap-8 overflow-hidden pr-4 sm:pr-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:pr-8"
                >
                  <div className="flex min-w-0 flex-col justify-center rounded-2xl border border-line bg-card p-6 md:p-8">
                    <p className="num text-5xl leading-none text-brass">{p.n}</p>
                    <h3 className="mt-4 font-display text-3xl">{p.title}</h3>
                    <p className="mt-3 max-w-md text-lg leading-relaxed">{p.text}</p>
                  </div>
                  <div className="min-w-0 overflow-hidden rounded-2xl bg-line">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="aspect-[4/3] h-full w-full max-w-full object-cover lg:aspect-auto lg:min-h-[380px]"
                    />
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="num text-sm text-muted">
                {PILLARS[pillar].n} / 05
                <span className="ml-3 font-sans text-sm tracking-normal text-muted lg:hidden">Swipe</span>
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous idea"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card active:scale-[0.96]"
                  onClick={() => showIdea(pillarRef.current - 1)}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next idea"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card active:scale-[0.96]"
                  onClick={() => showIdea(pillarRef.current + 1)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </section>

          <section id="villa" className="scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16">
            <div className="reveal grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
              <div>
                <p className="text-xs font-medium tracking-widest text-muted uppercase">The residence</p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                  Four bedrooms. One generous plan.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  The published home is a luxury 4 BHK of 7,829.23 sq.ft, offered from ₹5.50 Cr* onwards.
                  Sixty of these villas share the seven-acre land.
                </p>
              </div>
              <p className="num text-6xl leading-none md:text-7xl">
                ₹5.50 Cr*
                <span className="mt-2 block text-lg text-muted">onwards</span>
              </p>
            </div>

            <dl className="reveal mt-10 divide-y divide-line border-y border-line">
              {[
                ["Configuration", "Luxury 4 BHK"],
                ["Published area", "7,829.23 sq.ft"],
                ["Collection", "60 villas"],
                ["Land", "7 acres · 50% gardens"],
                ["Location", "Goldwins, Coimbatore"],
                ["Starting price", "₹5.50 Cr* onwards"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-1 gap-1 py-4 transition-colors sm:grid-cols-[12rem_1fr] sm:items-baseline sm:px-2 hover:bg-card"
                >
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="text-lg">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              *Starting price and area are as published. Confirm price, availability and specifications with
              the team before you decide. RERA TNRERA/11/BLG/0013/2026.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setDrawer("unit")}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-paper active:scale-[0.96]"
              >
                Request the unit plan
              </button>
              <button
                type="button"
                onClick={() => setDrawer("brochure")}
                className="inline-flex min-h-12 items-center rounded-full border border-line bg-card px-5 active:scale-[0.96]"
              >
                Request the brochure
              </button>
            </div>

            <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
              <PlanCard
                title="Master plan"
                text="How sixty homes sit inside seven acres, with half the ground kept open."
                src="/images/masterplan-hd.webp"
                alt="Published master plan of Zenora"
                onOpen={() => setPlan("master")}
                onRequest={() => setDrawer("master")}
              />
              <PlanCard
                title="Unit plan"
                text="The published 4 BHK layout. Ask the team for a larger, labelled copy."
                src="/images/plan-4bhk-hd.webp"
                alt="Published 4 BHK unit plan of Zenora"
                onOpen={() => setPlan("unit")}
                onRequest={() => setDrawer("unit")}
              />
            </div>
          </section>

          <section id="land" className="scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16">
            <div className="reveal max-w-2xl">
              <p className="text-xs font-medium tracking-widest text-muted uppercase">The land</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Half of it stays green.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Drag the line. On one side, the villas and their street. On the other, the gardens that take
                half the site. The balance is the point of the plan.
              </p>
            </div>
            <div className="reveal mt-8">
              <LandCompare />
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "60 exclusive villas with timeless design",
                "A balanced plan for peaceful living",
                "50% of the area dedicated to green space",
                "Spread across 7 acres of open ground",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-line bg-card px-4 py-4 text-base leading-snug">
                  <Leaf className="mt-0.5 shrink-0 text-brass" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="life" className="scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16">
            <div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-medium tracking-widest text-muted uppercase">Amenities</p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                  The day, <span className="italic">close to home.</span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                Eight places inside the community. Choose one to see it in full.
              </p>
            </div>

            <div className="mt-8">
              <figure className="relative min-h-[68vh] overflow-hidden rounded-3xl bg-ink">
                <img
                  key={AMENITIES[amenity].image}
                  src={AMENITIES[amenity].image}
                  alt={AMENITIES[amenity].alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-4 bottom-4 max-w-md rounded-2xl bg-card/95 p-4 sm:inset-x-auto sm:left-5 sm:bottom-5 sm:p-5">
                  <p className="num text-sm text-brass">
                    {String(amenity + 1).padStart(2, "0")}
                    <span className="text-muted"> / {String(AMENITIES.length).padStart(2, "0")}</span>
                  </p>
                  <h3 className="mt-1 font-display text-3xl leading-tight sm:text-4xl">{AMENITIES[amenity].title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{AMENITIES[amenity].text}</p>
                </figcaption>
              </figure>

              <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4" role="listbox" aria-label="Amenities">
                {AMENITIES.map((a, i) => {
                  const on = i === amenity;
                  return (
                    <button
                      key={a.title}
                      type="button"
                      role="option"
                      aria-selected={on}
                      onClick={() => setAmenity(i)}
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl text-left active:scale-[0.98] ${
                        on ? "ring-2 ring-ink ring-offset-2 ring-offset-paper" : ""
                      }`}
                    >
                      <img src={a.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                      <span className="absolute inset-x-2 bottom-2 rounded-xl bg-card/95 px-2.5 py-1.5 font-display text-base leading-tight">
                        {a.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="gallery" className="scroll-mt-20 border-t border-line py-16 lg:py-24">
            <div className="reveal flex flex-col gap-6 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-12 xl:px-16">
              <div className="max-w-xl">
                <p className="text-xs font-medium tracking-widest text-muted uppercase">Gallery</p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Published views</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Architectural studies of the court, the villas, the gardens and the rooms. Tap any image to
                  see it larger.
                </p>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
                {(["All", "Architecture", "Gardens", "Interiors"] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    role="tab"
                    aria-selected={filter === g}
                    onClick={() => {
                      setFilter(g);
                      setLightbox(null);
                    }}
                    className={`min-h-11 rounded-full border px-4 text-sm active:scale-[0.96] ${
                      filter === g ? "border-ink bg-ink text-paper" : "border-line bg-card"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative mt-8">
              <div
                ref={filmRef}
                className="film flex snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 lg:scroll-px-12 lg:px-12 xl:scroll-px-16 xl:px-16"
              >
                {shots.map((shot, i) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="group w-[72vw] max-w-[420px] shrink-0 snap-start text-left sm:w-[420px] active:scale-[0.98]"
                  >
                    <span className="block overflow-hidden rounded-2xl bg-line">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </span>
                    <span className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                      <span className="text-lg leading-snug">{shot.caption}</span>
                      <span className="text-xs tracking-widest text-muted uppercase">{shot.group}</span>
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-2 flex justify-end gap-2 px-5 lg:px-12 xl:px-16">
                <button
                  type="button"
                  aria-label="Previous images"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card active:scale-[0.96]"
                  onClick={() => filmRef.current?.scrollBy({ left: -440, behavior: "smooth" })}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next images"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card active:scale-[0.96]"
                  onClick={() => filmRef.current?.scrollBy({ left: 440, behavior: "smooth" })}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </section>

          <section id="place" className="scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16">
            <div className="reveal max-w-2xl">
              <p className="text-xs font-medium tracking-widest text-muted uppercase">Location</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Goldwins, Coimbatore.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                The listed distances, other than the airport, are the ones published for Zenora. The airport
                figure is the drive from the site. Choose a place to see the route.
              </p>
            </div>
            <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
              <div className="grid content-start gap-2" role="listbox" aria-label="Nearby places">
                {PLACES.map((p, i) => {
                  const on = i === place;
                  const width = `${Math.max(12, (Number(p.km) / MAX_KM) * 100)}%`;
                  return (
                    <button
                      key={p.name}
                      type="button"
                      role="option"
                      aria-selected={on}
                      onClick={() => {
                        setPlace(i);
                        document.getElementById("route-map")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }}
                      className={`rounded-2xl border px-4 py-3 text-left transition-colors ${
                        on ? "border-ink bg-card" : "border-line bg-paper"
                      }`}
                    >
                      <span className="flex items-baseline justify-between gap-3">
                        <span className="min-w-0 text-lg leading-snug">{p.name}</span>
                        <span className="num shrink-0 text-lg">{p.km} km</span>
                      </span>
                      <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-line">
                        <span
                          className="block h-full rounded-full bg-brass transition-[width] duration-500"
                          style={{ width }}
                        />
                      </span>
                      <span className="mt-2 block text-sm text-muted">{p.kind}</span>
                    </button>
                  );
                })}
              </div>
              <div id="route-map" className="flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-line bg-card">
                <div className="flex items-baseline justify-between gap-3 border-b border-line px-4 py-3">
                  <p className="min-w-0 text-base">
                    Route to <span className="font-medium">{PLACES[place].name}</span>
                  </p>
                  <p className="num shrink-0 text-base text-brass">{PLACES[place].km} km</p>
                </div>
                <iframe
                  key={PLACES[place].name}
                  title={`Driving route from Zenora to ${PLACES[place].name}`}
                  src={routeEmbed(PLACES[place].query)}
                  className="min-h-[360px] w-full flex-1 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <a
              href={routeLink(PLACES[place].query)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-base underline-offset-4 hover:underline"
            >
              Open this route <ArrowRight size={16} />
            </a>
          </section>

          <section id="visit" className="scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16">
            <div className="grid items-stretch gap-8 lg:grid-cols-2">
              <div className="reveal overflow-hidden rounded-2xl bg-line">
                <img
                  src="/images/slider2.jpg"
                  alt="The arrival gateway at Zenora by Zenvistas"
                  className="h-64 w-full object-cover lg:h-full lg:min-h-[560px]"
                />
              </div>
              <div className="reveal rounded-2xl border border-line bg-card p-6 md:p-8">
                <p className="text-xs font-medium tracking-widest text-muted uppercase">Visit</p>
                <h2 className="mt-3 font-display text-4xl leading-tight">Come and see the land.</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">
                  Tell us how to reach you. We’ll note your interest here, and you can message the team on
                  WhatsApp or call {PHONE_DISPLAY}.
                </p>
                <div className="mt-6">
                  <EnquiryForm intent="visit" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer id="site-footer" className="bg-ink text-paper pb-24 lg:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <img
              src="/images/logo.png"
              alt="Zenora, authorized channel partner"
              className="h-16 w-auto rounded-lg bg-paper px-3 py-2"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/75">
              Luxury 4 BHK villas at Goldwins, Coimbatore. Sixty residences across seven acres.
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-medium tracking-widest text-paper/60 uppercase">Visit</p>
            <ul className="mt-5 space-y-1 text-sm">
              {NAV.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className="min-h-11 text-left text-paper/90 underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-widest text-paper/60 uppercase">Contact</p>
            <p className="mt-5 text-sm text-paper/75">Goldwins, Coimbatore</p>
            <a href={`tel:${PHONE_TEL}`} className="num mt-2 block text-3xl text-paper">
              {PHONE_DISPLAY}
            </a>
            <a
              href={waLink("Please share details.")}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-sm text-paper/90 underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>
            <p className="mt-6 text-xs tracking-widest text-[#e6d3b8] uppercase">RERA TNRERA/11/BLG/0013/2026</p>
          </div>
        </div>
        <div className="border-t border-paper/15">
          <div className="mx-auto max-w-7xl space-y-4 px-5 py-8 text-xs leading-relaxed text-paper/75 lg:px-10">
            <p>
              Privacy & disclaimer. This page presents published details of Zenora by Zenvistas for
              information. It is not the official Zenvistas website and does not replace a conversation with
              the project team. Images are architectural visualisations. The starting price of ₹5.50 Cr* and
              the 7,829.23 sq.ft 4 BHK plan are as published and may change. Project RERA number as published:
              TNRERA/11/BLG/0013/2026. Confirm registration, pricing, availability and specifications directly
              before you decide.
            </p>
            <p>© {new Date().getFullYear()} Zenora by Zenvistas. All rights reserved to their respective owners.</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-line bg-card lg:hidden">
        <a href={`tel:${PHONE_TEL}`} className="flex min-h-14 items-center justify-center gap-2 text-sm font-medium">
          <Phone size={16} /> Call
        </a>
        <a
          href={waLink("Please share details.")}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 items-center justify-center border-x border-line text-sm font-medium"
        >
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setDrawer("visit")}
          className="flex min-h-14 items-center justify-center bg-ink text-sm font-medium text-paper"
        >
          Enquire
        </button>
      </div>

      {drawer && (
        <div className="fixed inset-0 z-50 flex justify-end bg-ink/40" role="presentation" onClick={() => setDrawer(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="h-full w-full max-w-md overflow-y-auto bg-paper p-6 shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium tracking-widest text-muted uppercase">Zenora</p>
                <h2 id="enquiry-title" className="mt-2 font-display text-3xl">
                  Express your interest
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setDrawer(null)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted">
              A short note is enough. The team can call you back, share the brochure, or arrange a site visit.
            </p>
            <div className="mt-6">
              <EnquiryForm intent={drawer} onDone={() => undefined} />
            </div>
          </div>
        </div>
      )}

      {lightbox !== null && shots[lightbox] && (
        <Lightbox
          shot={shots[lightbox]}
          index={lightbox}
          total={shots.length}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => (i === null ? i : (i - 1 + shots.length) % shots.length))}
          onNext={() => setLightbox((i) => (i === null ? i : (i + 1) % shots.length))}
        />
      )}

      {plan && (
        <Lightbox
          shot={{
            src: plan === "master" ? "/images/masterplan-hd.webp" : "/images/plan-4bhk-hd.webp",
            alt: plan === "master" ? "Published master plan" : "Published 4 BHK unit plan",
            caption: plan === "master" ? "Master plan" : "4 BHK unit plan",
            group: "Architecture",
          }}
          contain
          index={0}
          total={1}
          onClose={() => setPlan(null)}
          onPrev={() => setPlan(null)}
          onNext={() => setPlan(null)}
        />
      )}
    </div>
  );
}

function PriceCard({ onInterest }: { onInterest: () => void }) {
  return (
    <div className="max-w-sm rounded-2xl border border-line bg-card p-5 shadow-sm sm:p-6">
      <p className="text-xs font-medium tracking-widest text-brass uppercase">Booking open</p>
      <p className="num mt-2 text-4xl leading-none">₹5.50 Cr*</p>
      <p className="mt-2 text-base leading-relaxed text-muted">
        Luxury 4 BHK · 7,829.23 sq.ft · onwards at Goldwins.
      </p>
      <button
        type="button"
        onClick={onInterest}
        className="mt-4 inline-flex min-h-11 items-center gap-2 text-base font-medium underline-offset-4 hover:underline"
      >
        Express your interest <ArrowRight size={16} />
      </button>
    </div>
  );
}

function PlanCard({
  title,
  text,
  src,
  alt,
  onOpen,
  onRequest,
}: {
  title: string;
  text: string;
  src: string;
  alt: string;
  onOpen: () => void;
  onRequest: () => void;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-card p-4">
      <button type="button" onClick={onOpen} className="overflow-hidden rounded-xl bg-paper">
        <img src={src} alt={alt} className="mx-auto aspect-[4/3] w-full object-contain" />
      </button>
      <h3 className="mt-4 font-display text-2xl">{title}</h3>
      <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{text}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={onOpen} className="min-h-11 text-sm font-medium underline-offset-4 hover:underline">
          View larger
        </button>
        <button type="button" onClick={onRequest} className="min-h-11 text-sm font-medium underline-offset-4 hover:underline">
          Request a copy
        </button>
      </div>
    </article>
  );
}

function LandCompare() {
  const ref = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(56);
  const drag = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPct(Math.min(90, Math.max(10, next)));
  };

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-valuemin={10}
      aria-valuemax={90}
      aria-valuenow={Math.round(pct)}
      aria-label="Compare villas and gardens"
      className="relative aspect-[16/10] w-full touch-none overflow-hidden rounded-2xl bg-ink select-none"
      onPointerDown={(e) => {
        drag.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => {
        if (drag.current) move(e.clientX);
      }}
      onPointerUp={() => {
        drag.current = false;
      }}
      onPointerCancel={() => {
        drag.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPct((p) => Math.max(10, p - 4));
        if (e.key === "ArrowRight") setPct((p) => Math.min(90, p + 4));
      }}
    >
      <img
        src="/images/about.jpg"
        alt="Gardens at Zenora"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <img
        src="/images/g4.jpg"
        alt="Villas and the internal street at Zenora"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pct}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-paper" />
        <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card text-ink shadow-sm">
          <ChevronLeft size={14} />
          <ChevronRight size={14} />
        </div>
      </div>
      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-card/95 px-3 py-1 text-sm">
        Villas
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-card/95 px-3 py-1 text-sm">
        Gardens
      </span>
      <span className="sr-only">Drag to compare villas and gardens. Half the site is green space.</span>
    </div>
  );
}

function Lightbox({
  shot,
  index,
  total,
  contain,
  onClose,
  onPrev,
  onNext,
}: {
  shot: Shot;
  index: number;
  total: number;
  contain?: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-ink/92 text-paper"
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3" onClick={(e) => e.stopPropagation()}>
        <p className="text-base">
          {shot.caption}
          {total > 1 && (
            <span className="ml-3 text-sm text-paper/70">
              {index + 1} / {total}
            </span>
          )}
        </p>
        <button
          type="button"
          aria-label="Close image"
          onClick={onClose}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-paper/30"
        >
          <X size={18} />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        {total > 1 && (
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-paper/30 bg-ink/40"
          >
            <ChevronLeft />
          </button>
        )}
        <img
          src={shot.src}
          alt={shot.alt}
          onClick={(e) => e.stopPropagation()}
          className={`max-h-full max-w-full rounded-xl ${contain ? "object-contain bg-card p-2" : "object-contain"}`}
        />
        {total > 1 && (
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-paper/30 bg-ink/40"
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}

function EnquiryForm({ intent, onDone }: { intent: Intent; onDone?: () => void }) {
  const uid = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [choice, setChoice] = useState<Intent>(intent);
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  useEffect(() => {
    setChoice(intent);
  }, [intent]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().replace(/\s+/g, " ");
    const digits = phone.replace(/\D/g, "");
    const mobile =
      digits.length === 12 && digits.startsWith("91")
        ? digits.slice(2)
        : digits.length === 11 && digits.startsWith("0")
          ? digits.slice(1)
          : digits;
    if (cleanName.length < 2) {
      setError("Please add your name.");
      return;
    }
    if (!/^[A-Za-z][A-Za-z\s.'-]{1,60}$/.test(cleanName)) {
      setError("Use letters in your name.");
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      setError("Enter a 10-digit mobile number.");
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("That email doesn’t look right. You can leave it blank.");
      return;
    }
    if (!consent) {
      setError("Please agree to be contacted about Zenora.");
      return;
    }
    const entry = {
      name: cleanName,
      phone: mobile,
      email: email.trim(),
      intent: choice,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("zenora-enquiries") || "[]");
      const next = Array.isArray(prev) ? [...prev, entry].slice(-30) : [entry];
      localStorage.setItem("zenora-enquiries", JSON.stringify(next));
    } catch {
      /* storage may be blocked; the WhatsApp handoff still works */
    }
    setError("");
    setDone(cleanName);
    onDone?.();
  };

  if (done) {
    const label = INTENTS.find((i) => i.id === choice)?.label ?? "a visit";
    const note = `My name is ${done}. Phone: ${phone.replace(/\D/g, "").slice(-10)}. I would like: ${label}.`;
    return (
      <div className="rounded-2xl border border-line bg-paper p-5">
        <p className="flex items-center gap-2 font-display text-2xl">
          <Check size={22} /> Thank you, {done.split(" ")[0]}.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Your note is saved on this device. Message the team so they have it, or call {PHONE_DISPLAY}.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={waLink(note)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 text-paper"
          >
            Continue on WhatsApp
          </a>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-12 items-center rounded-full border border-line px-5">
            Call
          </a>
        </div>
      </div>
    );
  }

  const field = "mt-1 w-full min-h-12 rounded-xl border border-line bg-paper px-4 text-ink";

  return (
    <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
      <label className="text-sm font-medium" htmlFor={`${uid}-name`}>
        Name
        <input
          id={`${uid}-name`}
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Your name"
        />
      </label>
      <label className="text-sm font-medium" htmlFor={`${uid}-phone`}>
        Mobile
        <input
          id={`${uid}-phone`}
          name="tel"
          inputMode="numeric"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={field}
          placeholder="10-digit mobile"
        />
      </label>
      <label className="text-sm font-medium" htmlFor={`${uid}-email`}>
        Email <span className="font-normal text-muted">(optional)</span>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          placeholder="you@email.com"
        />
      </label>
      <label className="text-sm font-medium" htmlFor={`${uid}-intent`}>
        I’m interested in
        <select
          id={`${uid}-intent`}
          value={choice}
          onChange={(e) => setChoice(e.target.value as Intent)}
          className={field}
        >
          {INTENTS.map((i) => (
            <option key={i.id} value={i.id}>
              {i.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-5 w-5 accent-ink"
        />
        <span>I agree to be contacted about Zenora at Goldwins, and to confirm details with the team.</span>
      </label>
      {error && (
        <p role="alert" className="text-sm font-medium">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 text-paper transition-transform active:scale-[0.96]"
      >
        Send my interest
      </button>
    </form>
  );
}
