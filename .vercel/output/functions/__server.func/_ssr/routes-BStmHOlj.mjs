import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Leaf, c as Check, i as Menu, l as ArrowRight, o as ChevronRight, r as Phone, s as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BStmHOlj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PHONE_DISPLAY = "+91 80780 84771";
var PHONE_TEL = "+918078084771";
var WHATSAPP = "918078084771";
var NAV = [
	{
		id: "story",
		label: "The idea"
	},
	{
		id: "villa",
		label: "The villa"
	},
	{
		id: "land",
		label: "The land"
	},
	{
		id: "life",
		label: "Amenities"
	},
	{
		id: "gallery",
		label: "Gallery"
	},
	{
		id: "place",
		label: "Location"
	},
	{
		id: "visit",
		label: "Visit"
	}
];
var PILLARS = [
	{
		n: "01",
		title: "Form",
		text: "The villas are drawn with a calm, timeless line. Proportions, shade and materials are chosen so the home feels balanced — never busy.",
		image: "/images/g2.jpg",
		alt: "A Zenora villa with a deep timber soffit and planted front garden"
	},
	{
		n: "02",
		title: "Function",
		text: "Rooms are planned around ordinary days: arriving home, cooking, gathering, and retreating. The layout is meant to make living simpler.",
		image: "/images/g3.jpg",
		alt: "Living and dining room inside a Zenora villa"
	},
	{
		n: "03",
		title: "Nature",
		text: "Half the site is kept green. Gardens, trees and open ground sit between the homes, so the address feels open rather than packed.",
		image: "/images/about.jpg",
		alt: "Landscaped garden court between the villas at Zenora"
	},
	{
		n: "04",
		title: "Comfort",
		text: "A quieter plan for peaceful living. Shade, setbacks and generous rooms give each home room to breathe.",
		image: "/images/g1.jpg",
		alt: "A planted water court with stepping stones at Zenora"
	},
	{
		n: "05",
		title: "Future-readiness",
		text: "The community is planned to stay useful — shared amenities, open land and a clear master plan, not a layout that only works on day one.",
		image: "/images/slider1.jpg",
		alt: "The central court of Zenora, with a circular garden and gold sculpture"
	}
];
var AMENITIES = [
	{
		title: "Landscaped gardens",
		text: "Planted courts, lawns and trees held between the villas.",
		image: "/images/about.jpg",
		alt: "Landscaped garden court between the villas at Zenora",
		frame: "col-span-2 row-span-2"
	},
	{
		title: "Swimming pool",
		text: "A shared pool for unhurried mornings and warm evenings.",
		image: "/images/amenities/pool.jpg",
		alt: "Swimming pool beside a timber pavilion at Zenora",
		frame: "col-span-2"
	},
	{
		title: "Clubhouse",
		text: "A place to gather, host a small occasion, or simply pause.",
		image: "/images/amenities/clubhouse.jpg",
		alt: "The clubhouse pavilion at Zenora",
		frame: "col-span-2"
	},
	{
		title: "Gym",
		text: "A quiet room for a daily session, steps from home.",
		image: "/images/amenities/gym.jpg",
		alt: "Gym inside the Zenora community",
		frame: ""
	},
	{
		title: "Jogging track",
		text: "A loop through the open ground, made for an easy pace.",
		image: "/images/amenities/jogging.jpg",
		alt: "A garden path for walking and jogging at Zenora",
		frame: ""
	},
	{
		title: "Yoga",
		text: "Outdoor space to slow down, with sky and garden around you.",
		image: "/images/amenities/yoga.jpg",
		alt: "An open yoga deck among the gardens",
		frame: ""
	},
	{
		title: "Children’s play",
		text: "A garden corner set aside for children.",
		image: "/images/amenities/play.jpg",
		alt: "Children’s play lawn at Zenora",
		frame: ""
	},
	{
		title: "Indoor games",
		text: "A covered room for play when the weather turns.",
		image: "/images/amenities/games.jpg",
		alt: "Indoor games room at Zenora",
		frame: "col-span-2 md:col-span-4"
	}
];
var SHOTS = [
	{
		src: "/images/slider1.jpg",
		alt: "Aerial view of Zenora’s central court and sculpture",
		caption: "Central court",
		group: "Architecture"
	},
	{
		src: "/images/slider2.jpg",
		alt: "Arrival gateway of the Zenvistas community",
		caption: "Arrival",
		group: "Architecture"
	},
	{
		src: "/images/g2.jpg",
		alt: "Front elevation of a Zenora villa",
		caption: "Villa elevation",
		group: "Architecture"
	},
	{
		src: "/images/g4.jpg",
		alt: "Overhead view of villa roofs and a planted internal street",
		caption: "The street",
		group: "Architecture"
	},
	{
		src: "/images/about.jpg",
		alt: "Flowering garden with a bench between villa blocks",
		caption: "Garden court",
		group: "Gardens"
	},
	{
		src: "/images/g1.jpg",
		alt: "Lily pond and stone stepping path",
		caption: "Water garden",
		group: "Gardens"
	},
	{
		src: "/images/g3.jpg",
		alt: "Dining and living room with warm timber doors",
		caption: "Living & dining",
		group: "Interiors"
	}
];
var PLACES = [
	{
		name: "KMCH Medical College",
		km: "4.1",
		kind: "Care",
		query: "KMCH Institute of Health Sciences and Research, Coimbatore"
	},
	{
		name: "Coimbatore Airport",
		km: "4.7",
		kind: "Travel",
		query: "Coimbatore International Airport"
	},
	{
		name: "Tidel Park",
		km: "7",
		kind: "Work",
		query: "TIDEL Park, Coimbatore"
	},
	{
		name: "Fun Mall",
		km: "7.4",
		kind: "Retail",
		query: "Fun Republic Mall, Coimbatore"
	},
	{
		name: "Prozone",
		km: "9.4",
		kind: "Retail",
		query: "Prozone Mall, Coimbatore"
	},
	{
		name: "Cognizant",
		km: "11.2",
		kind: "Work",
		query: "Cognizant Technology Solutions, Coimbatore"
	}
];
var MAX_KM = Math.max(...PLACES.map((p) => Number(p.km)));
var ORIGIN = "11.065362,77.046092";
function routeEmbed(query) {
	return `https://maps.google.com/maps?f=d&saddr=${ORIGIN}&daddr=${encodeURIComponent(query)}&hl=en&z=12&output=embed`;
}
function routeLink(query) {
	return `https://www.google.com/maps/dir/?api=1&origin=${ORIGIN}&destination=${encodeURIComponent(query)}&travelmode=driving`;
}
var INTENTS = [
	{
		id: "visit",
		label: "Site visit"
	},
	{
		id: "brochure",
		label: "Brochure"
	},
	{
		id: "unit",
		label: "Unit plan"
	},
	{
		id: "master",
		label: "Master plan"
	},
	{
		id: "callback",
		label: "Call back"
	}
];
var FACTS = [
	{
		k: "60",
		l: "Exclusive villas"
	},
	{
		k: "7",
		l: "Acres at Goldwins"
	},
	{
		k: "50%",
		l: "Kept as gardens"
	},
	{
		k: "4 BHK",
		l: "7,829.23 sq.ft"
	}
];
function useReveal(dep) {
	(0, import_react.useEffect)(() => {
		const nodes = Array.from(document.querySelectorAll(".reveal"));
		if (!nodes.length) return;
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				entry.target.classList.add("in");
				io.unobserve(entry.target);
			}
		}, {
			threshold: .16,
			rootMargin: "0px 0px -8% 0px"
		});
		nodes.forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, [dep]);
}
function waLink(note) {
	const text = `Hi! I'm interested in Zenora by Zenvistas at Goldwins, Coimbatore. ${note}`.trim();
	return `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(text)}`;
}
function ZenoraPage() {
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("story");
	const [pillar, setPillar] = (0, import_react.useState)(0);
	const [amenity, setAmenity] = (0, import_react.useState)(0);
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const [plan, setPlan] = (0, import_react.useState)(null);
	const [place, setPlace] = (0, import_react.useState)(0);
	const [drawer, setDrawer] = (0, import_react.useState)(null);
	const filmRef = (0, import_react.useRef)(null);
	const ideaRef = (0, import_react.useRef)(null);
	const pillarRef = (0, import_react.useRef)(0);
	const bannerRef = (0, import_react.useRef)(null);
	const shots = filter === "All" ? SHOTS : SHOTS.filter((s) => s.group === filter);
	useReveal(filter);
	(0, import_react.useEffect)(() => {
		const els = NAV.map((n) => n.id).map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [
				0,
				.2,
				.5
			]
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const locked = menu || drawer !== null || lightbox !== null || plan !== null;
		const prev = document.body.style.overflow;
		document.body.style.overflow = locked ? "hidden" : prev || "";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [
		menu,
		drawer,
		lightbox,
		plan
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") {
				setMenu(false);
				setDrawer(null);
				setLightbox(null);
				setPlan(null);
			}
			if (lightbox === null) return;
			if (e.key === "ArrowRight") setLightbox((i) => i === null ? i : (i + 1) % shots.length);
			if (e.key === "ArrowLeft") setLightbox((i) => i === null ? i : (i - 1 + shots.length) % shots.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [lightbox, shots.length]);
	(0, import_react.useEffect)(() => {
		const video = bannerRef.current;
		if (!video) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			video.pause();
			return;
		}
		video.play().catch(() => {});
	}, []);
	(0, import_react.useEffect)(() => {
		const root = ideaRef.current;
		if (!root) return;
		const snap = () => {
			root.scrollTo({
				left: pillarRef.current * root.clientWidth,
				behavior: "auto"
			});
		};
		window.addEventListener("resize", snap);
		return () => window.removeEventListener("resize", snap);
	}, []);
	const go = (id) => {
		setMenu(false);
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	const showIdea = (index) => {
		const next = (index % PILLARS.length + PILLARS.length) % PILLARS.length;
		pillarRef.current = next;
		setPillar(next);
		const root = ideaRef.current;
		if (!root) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		root.scrollTo({
			left: next * root.clientWidth,
			behavior: reduce ? "auto" : "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#story",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 flex h-16 items-center justify-between border-b border-line bg-paper px-4 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "inline-flex h-full items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.png",
						alt: "Zenora",
						className: "h-12 w-auto"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card",
					"aria-expanded": menu,
					"aria-label": menu ? "Close menu" : "Open menu",
					onClick: () => setMenu((v) => !v),
					children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				})]
			}),
			menu && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-paper px-6 pt-4 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-1",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(item.id),
						className: "border-b border-line py-4 text-left font-display text-4xl",
						children: item.label
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setMenu(false);
						setDrawer("visit");
					},
					className: "mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-paper active:scale-[0.96]",
					children: ["Arrange a visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "top",
				className: "lg:grid lg:grid-cols-[25rem_minmax(0,1fr)] xl:grid-cols-[28rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "order-2 border-b border-line px-5 py-8 lg:sticky lg:top-0 lg:order-1 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:border-r lg:border-b-0 lg:px-8 lg:py-8 xl:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/logo.png",
								alt: "Zenora, authorized channel partner",
								className: "h-auto w-56 max-w-full"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs font-medium tracking-widest text-muted uppercase",
							children: "Goldwins, Coimbatore"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-lg leading-relaxed text-ink",
							children: "Sixty luxury villas on seven acres in Coimbatore. Half the land stays garden. A calm 4 BHK address, from ₹5.50 crore."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "mt-5 overflow-hidden rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/g2.jpg",
								alt: "A Zenora villa with a timber soffit and a planted front garden",
								className: "aspect-[5/4] w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line",
							children: FACTS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "num text-2xl leading-none",
									children: f.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm leading-snug text-muted",
									children: f.l
								})]
							}, f.l))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "mt-6 hidden flex-col gap-1 lg:flex",
							"aria-label": "Sections",
							children: NAV.map((item) => {
								const on = active === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => go(item.id),
									className: `flex min-h-11 items-center justify-between rounded-xl px-3 text-left text-base transition-colors ${on ? "bg-ink text-paper" : "text-ink hover:bg-card"}`,
									children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-xs ${on ? "text-paper/70" : "text-muted"}`,
										"aria-hidden": true,
										children: on ? "●" : ""
									})]
								}, item.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-3 lg:mt-auto lg:pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setDrawer("visit"),
									className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-paper transition-transform active:scale-[0.96]",
									children: ["Arrange a visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline",
										href: `tel:${PHONE_TEL}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }),
											" ",
											PHONE_DISPLAY
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "inline-flex min-h-11 items-center underline-offset-4 hover:underline",
										href: waLink("Please share details."),
										target: "_blank",
										rel: "noreferrer",
										children: "WhatsApp"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs leading-relaxed text-muted",
									children: "Booking is open. Spot booking offers and early-buy discounts are available. RERA TNRERA/11/BLG/0013/2026."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-1 min-w-0 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-[58svh] min-h-[420px] overflow-hidden bg-ink lg:h-dvh",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								ref: bannerRef,
								className: "absolute inset-0 h-full w-full object-cover object-center",
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								poster: "/images/banner-hero.jpg",
								"aria-label": "The central court at Zenora",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
									src: "/videos/banner.mp4",
									type: "video/mp4"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-10 bottom-8 hidden lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceCard, { onInterest: () => setDrawer("callback") })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 -mt-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceCard, { onInterest: () => setDrawer("callback") })
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "story",
							className: "scroll-mt-20 px-5 py-16 lg:px-12 lg:py-24 xl:px-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "reveal",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium tracking-widest text-muted uppercase",
											children: "Five ideas"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl",
											children: "A home planned to feel easy."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
											children: "Every decision at Zenora comes back to the same five ideas. Together they balance how the villa looks, how it works, the gardens around it, the comfort inside, and how well it will live years from now."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "reveal mt-8 flex gap-2 overflow-x-auto pb-1",
									role: "tablist",
									"aria-label": "Design ideas",
									children: PILLARS.map((p, i) => {
										const on = i === pillar;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											role: "tab",
											"aria-selected": on,
											id: `pillar-tab-${i}`,
											onClick: () => showIdea(i),
											onKeyDown: (e) => {
												if (e.key === "ArrowRight") showIdea(i + 1);
												if (e.key === "ArrowLeft") showIdea(i - 1);
											},
											className: `min-h-12 shrink-0 rounded-full border px-4 text-base transition-colors active:scale-[0.96] ${on ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "num mr-2 text-sm opacity-70",
												children: p.n
											}), p.title]
										}, p.title);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: ideaRef,
									role: "region",
									"aria-roledescription": "carousel",
									"aria-label": "Five ideas",
									className: "mt-6 flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
									onScroll: (e) => {
										const el = e.currentTarget;
										const i = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
										const next = Math.max(0, Math.min(PILLARS.length - 1, i));
										pillarRef.current = next;
										setPillar((cur) => cur === next ? cur : next);
									},
									children: PILLARS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										role: "tabpanel",
										"aria-labelledby": `pillar-tab-${i}`,
										className: "grid min-w-0 max-w-full shrink-0 grow-0 basis-full snap-start items-stretch gap-8 overflow-hidden pr-4 sm:pr-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:pr-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 flex-col justify-center rounded-2xl border border-line bg-card p-6 md:p-8",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "num text-5xl leading-none text-brass",
													children: p.n
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-4 font-display text-3xl",
													children: p.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 max-w-md text-lg leading-relaxed",
													children: p.text
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "min-w-0 overflow-hidden rounded-2xl bg-line",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: p.image,
												alt: p.alt,
												className: "aspect-[4/3] h-full w-full max-w-full object-cover lg:aspect-auto lg:min-h-[380px]"
											})
										})]
									}, p.title))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "num text-sm text-muted",
										children: [
											PILLARS[pillar].n,
											" / 05",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-3 font-sans text-sm tracking-normal text-muted lg:hidden",
												children: "Swipe"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "Previous idea",
											className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card active:scale-[0.96]",
											onClick: () => showIdea(pillarRef.current - 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "Next idea",
											className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card active:scale-[0.96]",
											onClick: () => showIdea(pillarRef.current + 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "villa",
							className: "scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "reveal grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium tracking-widest text-muted uppercase",
											children: "The residence"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
											children: "Four bedrooms. One generous plan."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-lg leading-relaxed text-muted",
											children: "The published home is a luxury 4 BHK of 7,829.23 sq.ft, offered from ₹5.50 Cr* onwards. Sixty of these villas share the seven-acre land."
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "num text-6xl leading-none md:text-7xl",
										children: ["₹5.50 Cr*", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block text-lg text-muted",
											children: "onwards"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "reveal mt-10 divide-y divide-line border-y border-line",
									children: [
										["Configuration", "Luxury 4 BHK"],
										["Published area", "7,829.23 sq.ft"],
										["Collection", "60 villas"],
										["Land", "7 acres · 50% gardens"],
										["Location", "Goldwins, Coimbatore"],
										["Starting price", "₹5.50 Cr* onwards"]
									].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-1 py-4 transition-colors sm:grid-cols-[12rem_1fr] sm:items-baseline sm:px-2 hover:bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-sm text-muted",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-lg",
											children: v
										})]
									}, k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
									children: "*Starting price and area are as published. Confirm price, availability and specifications with the team before you decide. RERA TNRERA/11/BLG/0013/2026."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setDrawer("unit"),
										className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-paper active:scale-[0.96]",
										children: "Request the unit plan"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setDrawer("brochure"),
										className: "inline-flex min-h-12 items-center rounded-full border border-line bg-card px-5 active:scale-[0.96]",
										children: "Request the brochure"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "reveal mt-12 grid gap-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCard, {
										title: "Master plan",
										text: "How sixty homes sit inside seven acres, with half the ground kept open.",
										src: "/images/masterplan-hd.webp",
										alt: "Published master plan of Zenora",
										onOpen: () => setPlan("master"),
										onRequest: () => setDrawer("master")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCard, {
										title: "Unit plan",
										text: "The published 4 BHK layout. Ask the team for a larger, labelled copy.",
										src: "/images/plan-4bhk-hd.webp",
										alt: "Published 4 BHK unit plan of Zenora",
										onOpen: () => setPlan("unit"),
										onRequest: () => setDrawer("unit")
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "land",
							className: "scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "reveal max-w-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium tracking-widest text-muted uppercase",
											children: "The land"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
											children: "Half of it stays green."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-lg leading-relaxed text-muted",
											children: "Drag the line. On one side, the villas and their street. On the other, the gardens that take half the site. The balance is the point of the plan."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "reveal mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandCompare, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid gap-3 sm:grid-cols-2",
									children: [
										"60 exclusive villas with timeless design",
										"A balanced plan for peaceful living",
										"50% of the area dedicated to green space",
										"Spread across 7 acres of open ground"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 rounded-2xl border border-line bg-card px-4 py-4 text-base leading-snug",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
											className: "mt-0.5 shrink-0 text-brass",
											size: 18
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "life",
							className: "scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium tracking-widest text-muted uppercase",
										children: "Amenities"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
										children: ["The day, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic",
											children: "close to home."
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm text-base leading-relaxed text-muted",
									children: "Eight places inside the community. Choose one to see it in full."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "relative min-h-[68vh] overflow-hidden rounded-3xl bg-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: AMENITIES[amenity].image,
										alt: AMENITIES[amenity].alt,
										className: "absolute inset-0 h-full w-full object-cover"
									}, AMENITIES[amenity].image), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
										className: "absolute inset-x-4 bottom-4 max-w-md rounded-2xl bg-card/95 p-4 sm:inset-x-auto sm:left-5 sm:bottom-5 sm:p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "num text-sm text-brass",
												children: [String(amenity + 1).padStart(2, "0"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted",
													children: [" / ", String(AMENITIES.length).padStart(2, "0")]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 font-display text-3xl leading-tight sm:text-4xl",
												children: AMENITIES[amenity].title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-base leading-relaxed text-muted",
												children: AMENITIES[amenity].text
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid grid-cols-2 gap-3 md:grid-cols-4",
									role: "listbox",
									"aria-label": "Amenities",
									children: AMENITIES.map((a, i) => {
										const on = i === amenity;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											role: "option",
											"aria-selected": on,
											onClick: () => setAmenity(i),
											className: `relative aspect-[4/3] overflow-hidden rounded-2xl text-left active:scale-[0.98] ${on ? "ring-2 ring-ink ring-offset-2 ring-offset-paper" : ""}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: a.image,
												alt: "",
												className: "absolute inset-0 h-full w-full object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute inset-x-2 bottom-2 rounded-xl bg-card/95 px-2.5 py-1.5 font-display text-base leading-tight",
												children: a.title
											})]
										}, a.title);
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "gallery",
							className: "scroll-mt-20 border-t border-line py-16 lg:py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal flex flex-col gap-6 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-12 xl:px-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium tracking-widest text-muted uppercase",
											children: "Gallery"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
											children: "Published views"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-lg leading-relaxed text-muted",
											children: "Architectural studies of the court, the villas, the gardens and the rooms. Tap any image to see it larger."
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									role: "tablist",
									"aria-label": "Filter gallery",
									children: [
										"All",
										"Architecture",
										"Gardens",
										"Interiors"
									].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										role: "tab",
										"aria-selected": filter === g,
										onClick: () => {
											setFilter(g);
											setLightbox(null);
										},
										className: `min-h-11 rounded-full border px-4 text-sm active:scale-[0.96] ${filter === g ? "border-ink bg-ink text-paper" : "border-line bg-card"}`,
										children: g
									}, g))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: filmRef,
									className: "film flex snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 lg:scroll-px-12 lg:px-12 xl:scroll-px-16 xl:px-16",
									children: shots.map((shot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setLightbox(i),
										className: "group w-[72vw] max-w-[420px] shrink-0 snap-start text-left sm:w-[420px] active:scale-[0.98]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block overflow-hidden rounded-2xl bg-line",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: shot.src,
												alt: shot.alt,
												className: "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lg leading-snug",
												children: shot.caption
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs tracking-widest text-muted uppercase",
												children: shot.group
											})]
										})]
									}, shot.src))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex justify-end gap-2 px-5 lg:px-12 xl:px-16",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Previous images",
										className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card active:scale-[0.96]",
										onClick: () => filmRef.current?.scrollBy({
											left: -440,
											behavior: "smooth"
										}),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Next images",
										className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card active:scale-[0.96]",
										onClick: () => filmRef.current?.scrollBy({
											left: 440,
											behavior: "smooth"
										}),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "place",
							className: "scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "reveal max-w-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium tracking-widest text-muted uppercase",
											children: "Location"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 font-display text-4xl leading-tight md:text-5xl",
											children: "Goldwins, Coimbatore."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-lg leading-relaxed text-muted",
											children: "The listed distances, other than the airport, are the ones published for Zenora. The airport figure is the drive from the site. Choose a place to see the route."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid content-start gap-2",
										role: "listbox",
										"aria-label": "Nearby places",
										children: PLACES.map((p, i) => {
											const on = i === place;
											const width = `${Math.max(12, Number(p.km) / MAX_KM * 100)}%`;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												role: "option",
												"aria-selected": on,
												onClick: () => {
													setPlace(i);
													document.getElementById("route-map")?.scrollIntoView({
														behavior: "smooth",
														block: "nearest"
													});
												},
												className: `rounded-2xl border px-4 py-3 text-left transition-colors ${on ? "border-ink bg-card" : "border-line bg-paper"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-baseline justify-between gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "min-w-0 text-lg leading-snug",
															children: p.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "num shrink-0 text-lg",
															children: [p.km, " km"]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-2 block h-1.5 overflow-hidden rounded-full bg-line",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block h-full rounded-full bg-brass transition-[width] duration-500",
															style: { width }
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-2 block text-sm text-muted",
														children: p.kind
													})
												]
											}, p.name);
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										id: "route-map",
										className: "flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-line bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-3 border-b border-line px-4 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "min-w-0 text-base",
												children: ["Route to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium",
													children: PLACES[place].name
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "num shrink-0 text-base text-brass",
												children: [PLACES[place].km, " km"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											title: `Driving route from Zenora to ${PLACES[place].name}`,
											src: routeEmbed(PLACES[place].query),
											className: "min-h-[360px] w-full flex-1 border-0",
											loading: "lazy",
											referrerPolicy: "no-referrer-when-downgrade"
										}, PLACES[place].name)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: routeLink(PLACES[place].query),
									target: "_blank",
									rel: "noreferrer",
									className: "mt-4 inline-flex min-h-11 items-center gap-2 text-base underline-offset-4 hover:underline",
									children: ["Open this route ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: "visit",
							className: "scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24 xl:px-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid items-stretch gap-8 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "reveal overflow-hidden rounded-2xl bg-line",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/slider2.jpg",
										alt: "The arrival gateway at Zenora by Zenvistas",
										className: "h-64 w-full object-cover lg:h-full lg:min-h-[560px]"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "reveal rounded-2xl border border-line bg-card p-6 md:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium tracking-widest text-muted uppercase",
											children: "Visit"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 font-display text-4xl leading-tight",
											children: "Come and see the land."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-lg leading-relaxed text-muted",
											children: [
												"Tell us how to reach you. We’ll note your interest here, and you can message the team on WhatsApp or call ",
												PHONE_DISPLAY,
												"."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { intent: "visit" })
										})
									]
								})]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				id: "site-footer",
				className: "bg-ink text-paper pb-24 lg:pb-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/logo.png",
								alt: "Zenora, authorized channel partner",
								className: "h-16 w-auto rounded-lg bg-paper px-3 py-2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-sm text-sm leading-relaxed text-paper/75",
								children: "Luxury 4 BHK villas at Goldwins, Coimbatore. Sixty residences across seven acres."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-widest text-paper/60 uppercase",
								children: "Visit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-1 text-sm",
								children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => go(item.id),
									className: "min-h-11 text-left text-paper/90 underline-offset-4 hover:underline",
									children: item.label
								}) }, item.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-paper/60 uppercase",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm text-paper/75",
									children: "Goldwins, Coimbatore"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${PHONE_TEL}`,
									className: "num mt-2 block text-3xl text-paper",
									children: PHONE_DISPLAY
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink("Please share details."),
									target: "_blank",
									rel: "noreferrer",
									className: "mt-3 inline-flex min-h-11 items-center text-sm text-paper/90 underline-offset-4 hover:underline",
									children: "WhatsApp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-xs tracking-widest text-[#e6d3b8] uppercase",
									children: "RERA TNRERA/11/BLG/0013/2026"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-paper/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl space-y-4 px-5 py-8 text-xs leading-relaxed text-paper/75 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Privacy & disclaimer. This page presents published details of Zenora by Zenvistas for information. It is not the official Zenvistas website and does not replace a conversation with the project team. Images are architectural visualisations. The starting price of ₹5.50 Cr* and the 7,829.23 sq.ft 4 BHK plan are as published and may change. Project RERA number as published: TNRERA/11/BLG/0013/2026. Confirm registration, pricing, availability and specifications directly before you decide." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Zenora by Zenvistas. All rights reserved to their respective owners."
						] })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-line bg-card lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "flex min-h-14 items-center justify-center gap-2 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), " Call"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink("Please share details."),
						target: "_blank",
						rel: "noreferrer",
						className: "flex min-h-14 items-center justify-center border-x border-line text-sm font-medium",
						children: "WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDrawer("visit"),
						className: "flex min-h-14 items-center justify-center bg-ink text-sm font-medium text-paper",
						children: "Enquire"
					})
				]
			}),
			drawer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex justify-end bg-ink/40",
				role: "presentation",
				onClick: () => setDrawer(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "enquiry-title",
					className: "h-full w-full max-w-md overflow-y-auto bg-paper p-6 shadow-xl sm:p-8",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-widest text-muted uppercase",
								children: "Zenora"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "enquiry-title",
								className: "mt-2 font-display text-3xl",
								children: "Express your interest"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close",
								onClick: () => setDrawer(null),
								className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base leading-relaxed text-muted",
							children: "A short note is enough. The team can call you back, share the brochure, or arrange a site visit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
								intent: drawer,
								onDone: () => void 0
							})
						})
					]
				})
			}),
			lightbox !== null && shots[lightbox] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				shot: shots[lightbox],
				index: lightbox,
				total: shots.length,
				onClose: () => setLightbox(null),
				onPrev: () => setLightbox((i) => i === null ? i : (i - 1 + shots.length) % shots.length),
				onNext: () => setLightbox((i) => i === null ? i : (i + 1) % shots.length)
			}),
			plan && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				shot: {
					src: plan === "master" ? "/images/masterplan-hd.webp" : "/images/plan-4bhk-hd.webp",
					alt: plan === "master" ? "Published master plan" : "Published 4 BHK unit plan",
					caption: plan === "master" ? "Master plan" : "4 BHK unit plan",
					group: "Architecture"
				},
				contain: true,
				index: 0,
				total: 1,
				onClose: () => setPlan(null),
				onPrev: () => setPlan(null),
				onNext: () => setPlan(null)
			})
		]
	});
}
function PriceCard({ onInterest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-sm rounded-2xl border border-line bg-card p-5 shadow-sm sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-brass uppercase",
				children: "Booking open"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "num mt-2 text-4xl leading-none",
				children: "₹5.50 Cr*"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base leading-relaxed text-muted",
				children: "Luxury 4 BHK · 7,829.23 sq.ft · onwards at Goldwins."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onInterest,
				className: "mt-4 inline-flex min-h-11 items-center gap-2 text-base font-medium underline-offset-4 hover:underline",
				children: ["Express your interest ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
			})
		]
	});
}
function PlanCard({ title, text, src, alt, onOpen, onRequest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col rounded-2xl border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onOpen,
				className: "overflow-hidden rounded-xl bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					className: "mx-auto aspect-[4/3] w-full object-contain"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-base leading-relaxed text-muted",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onOpen,
					className: "min-h-11 text-sm font-medium underline-offset-4 hover:underline",
					children: "View larger"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onRequest,
					className: "min-h-11 text-sm font-medium underline-offset-4 hover:underline",
					children: "Request a copy"
				})]
			})
		]
	});
}
function LandCompare() {
	const ref = (0, import_react.useRef)(null);
	const [pct, setPct] = (0, import_react.useState)(56);
	const drag = (0, import_react.useRef)(false);
	const move = (clientX) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const next = (clientX - r.left) / r.width * 100;
		setPct(Math.min(90, Math.max(10, next)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		role: "slider",
		tabIndex: 0,
		"aria-valuemin": 10,
		"aria-valuemax": 90,
		"aria-valuenow": Math.round(pct),
		"aria-label": "Compare villas and gardens",
		className: "relative aspect-[16/10] w-full touch-none overflow-hidden rounded-2xl bg-ink select-none",
		onPointerDown: (e) => {
			drag.current = true;
			e.currentTarget.setPointerCapture(e.pointerId);
			move(e.clientX);
		},
		onPointerMove: (e) => {
			if (drag.current) move(e.clientX);
		},
		onPointerUp: () => {
			drag.current = false;
		},
		onPointerCancel: () => {
			drag.current = false;
		},
		onKeyDown: (e) => {
			if (e.key === "ArrowLeft") setPct((p) => Math.max(10, p - 4));
			if (e.key === "ArrowRight") setPct((p) => Math.min(90, p + 4));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/about.jpg",
				alt: "Gardens at Zenora",
				className: "absolute inset-0 h-full w-full object-cover",
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/g4.jpg",
				alt: "Villas and the internal street at Zenora",
				className: "absolute inset-0 h-full w-full object-cover",
				style: { clipPath: `inset(0 ${100 - pct}% 0 0)` },
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-y-0",
				style: { left: `${pct}%` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 -translate-x-1/2 w-0.5 bg-paper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card text-ink shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 14 })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute top-4 left-4 rounded-full bg-card/95 px-3 py-1 text-sm",
				children: "Villas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute top-4 right-4 rounded-full bg-card/95 px-3 py-1 text-sm",
				children: "Gardens"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Drag to compare villas and gardens. Half the site is green space."
			})
		]
	});
}
function Lightbox({ shot, index, total, contain, onClose, onPrev, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex flex-col bg-ink/92 text-paper",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": shot.caption,
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-base",
				children: [shot.caption, total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-3 text-sm text-paper/70",
					children: [
						index + 1,
						" / ",
						total
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Close image",
				onClick: onClose,
				className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-paper/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16",
			children: [
				total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Previous image",
					onClick: (e) => {
						e.stopPropagation();
						onPrev();
					},
					className: "absolute left-3 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-paper/30 bg-ink/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shot.src,
					alt: shot.alt,
					onClick: (e) => e.stopPropagation(),
					className: `max-h-full max-w-full rounded-xl ${contain ? "object-contain bg-card p-2" : "object-contain"}`
				}),
				total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next image",
					onClick: (e) => {
						e.stopPropagation();
						onNext();
					},
					className: "absolute right-3 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-paper/30 bg-ink/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
				})
			]
		})]
	});
}
function EnquiryForm({ intent, onDone }) {
	const uid = (0, import_react.useId)();
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [choice, setChoice] = (0, import_react.useState)(intent);
	const [consent, setConsent] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setChoice(intent);
	}, [intent]);
	const submit = (e) => {
		e.preventDefault();
		const cleanName = name.trim().replace(/\s+/g, " ");
		const digits = phone.replace(/\D/g, "");
		const mobile = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits.length === 11 && digits.startsWith("0") ? digits.slice(1) : digits;
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
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("zenora-enquiries") || "[]");
			const next = Array.isArray(prev) ? [...prev, entry].slice(-30) : [entry];
			localStorage.setItem("zenora-enquiries", JSON.stringify(next));
		} catch {}
		setError("");
		setDone(cleanName);
		onDone?.();
	};
	if (done) {
		const label = INTENTS.find((i) => i.id === choice)?.label ?? "a visit";
		const note = `My name is ${done}. Phone: ${phone.replace(/\D/g, "").slice(-10)}. I would like: ${label}.`;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-line bg-paper p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 font-display text-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 22 }),
						" Thank you, ",
						done.split(" ")[0],
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-base leading-relaxed text-muted",
					children: [
						"Your note is saved on this device. Message the team so they have it, or call ",
						PHONE_DISPLAY,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink(note),
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-12 items-center rounded-full bg-ink px-5 text-paper",
						children: "Continue on WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "inline-flex min-h-12 items-center rounded-full border border-line px-5",
						children: "Call"
					})]
				})
			]
		});
	}
	const field = "mt-1 w-full min-h-12 rounded-xl border border-line bg-paper px-4 text-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "flex flex-col gap-4",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-medium",
				htmlFor: `${uid}-name`,
				children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${uid}-name`,
					name: "name",
					autoComplete: "name",
					value: name,
					onChange: (e) => setName(e.target.value),
					className: field,
					placeholder: "Your name"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-medium",
				htmlFor: `${uid}-phone`,
				children: ["Mobile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${uid}-phone`,
					name: "tel",
					inputMode: "numeric",
					autoComplete: "tel",
					value: phone,
					onChange: (e) => setPhone(e.target.value),
					className: field,
					placeholder: "10-digit mobile"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-medium",
				htmlFor: `${uid}-email`,
				children: [
					"Email ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-normal text-muted",
						children: "(optional)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `${uid}-email`,
						name: "email",
						type: "email",
						autoComplete: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: field,
						placeholder: "you@email.com"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-medium",
				htmlFor: `${uid}-intent`,
				children: ["I’m interested in", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: `${uid}-intent`,
					value: choice,
					onChange: (e) => setChoice(e.target.value),
					className: field,
					children: INTENTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: i.id,
						children: i.label
					}, i.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 text-sm leading-relaxed text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: consent,
					onChange: (e) => setConsent(e.target.checked),
					className: "mt-1 h-5 w-5 accent-ink"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I agree to be contacted about Zenora at Goldwins, and to confirm details with the team." })]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "text-sm font-medium",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 text-paper transition-transform active:scale-[0.96]",
				children: "Send my interest"
			})
		]
	});
}
var SplitComponent = ZenoraPage;
//#endregion
export { SplitComponent as component };
