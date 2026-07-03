export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Hohe Warte Tennis",
    href: "/club",
    children: [
      { label: "Become a member", href: "/club/become-a-member" },
      { label: "About us", href: "/club/about-us" },
      { label: "Massage", href: "/club/massage" },
      { label: "Partner", href: "/club/partner" },
    ],
  },
  {
    label: "Tennis schools",
    href: "/tennis-schools",
    children: [
      { label: "Hohe Warte Tennis Academy", href: "/tennis-schools/hohe-warte-tennis-academy" },
      { label: "Domesport", href: "/tennis-schools/domesport" },
      { label: "Turin Tennis Academy", href: "/tennis-schools/turin-tennis-academy" },
    ],
  },
  { label: "Indoor", href: "/indoor" },
  { label: "Fitness", href: "/fitness" },
  { label: "Summer Camps", href: "/summer-camps" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ *
 * HOMEPAGE CONTENT
 * NOTE: the marketing copy + numbers below are placeholders crafted
 * for the design. Swap them for real academy data when ready
 * (this is where ai/data.md content should eventually live).
 * ------------------------------------------------------------------ */

export const HERO = {
  kicker: "Tennis Academy — Vienna",
  title: "HOHE WARTE",
  lead: "Where discipline becomes art.",
};

// Manifesto is revealed word-by-word on scroll. Keep the accent words
// (wrapped in *asterisks*) short — they render in the serif accent face.
export const MANIFESTO =
  "We don't just teach tennis. We shape the way you *move*, *think* and *compete* — one deliberate rally at a time.";

export const RACKET_SECTION = {
  kicker: "The Instrument",
  title: "Built for the ones\nwho mean it.",
  words: ["Precision", "Power", "Poise"],
  body:
    "Every grip, every string, every degree of swing is intentional. We obsess over the details so that on match point, you don't have to.",
};

export const GALLERY = [
  { src: "/images/court-top.avif", index: "01", title: "From above", caption: "Geometry of the game" },
  { src: "/images/court-side-artistic.png", index: "02", title: "The baseline", caption: "Where rallies are born" },
  { src: "/images/court-top-with-man.avif", index: "03", title: "Solitude", caption: "Just you and the line" },
  { src: "/images/court-in-hall.avif", index: "04", title: "Indoors", caption: "Play through every season" },
];

export const ELITE = {
  overline: "The standard",
  under: "Welcome to the elite.",
  sub: "A century of champions has walked these courts. You could be next.",
};

// Numbers are placeholders — replace with the academy's real figures.
export const STATS = [
  { value: 120, suffix: "", label: "Years on the hill" },
  { value: 14, suffix: "", label: "Championship courts" },
  { value: 24, suffix: "", label: "Dedicated coaches" },
  { value: 900, suffix: "+", label: "Members & players" },
];

export const PROGRAMS = [
  {
    index: "01",
    title: "Tennis Academy",
    href: "/tennis-schools/hohe-warte-tennis-academy",
    desc: "Elite pathways for juniors and pros, guided by coaches who've been there.",
    image: "/images/court-girl-playing-side.avif",
  },
  {
    index: "02",
    title: "Indoor",
    href: "/indoor",
    desc: "Four seasons, one surface. Train no matter what the sky is doing.",
    image: "/images/court-in-hall.avif",
  },
  {
    index: "03",
    title: "Fitness",
    href: "/fitness",
    desc: "Strength, speed and recovery built around the athlete you're becoming.",
    image: "/images/gym2.webp",
  },
  {
    index: "04",
    title: "Summer Camps",
    href: "/summer-camps",
    desc: "Weeks that turn beginners into believers and players into competitors.",
    image: "/images/court-top-with-man.avif",
  },
];

export const FACILITY = {
  kicker: "The grounds",
  title: "A home for the game.",
  body:
    "Perched on Vienna's Hohe Warte hill, our grounds pair a century of tradition with everything a modern player needs to grow.",
  image: "/images/hohewarte-areal.jpg",
};

export const CTA = {
  overline: "Ready when you are",
  title: "Your season\nstarts here.",
  primary: { label: "Become a member", href: "/club/become-a-member" },
  secondary: { label: "Contact us", href: "/contact" },
};

export const SITE = {
  name: "Hohe Warte",
  location: "Vienna, Austria",
  email: "office@hohewarte.tennis",
};
