export const NAV_LINKS = [
  { label: "Start", href: "/" },
  {
    label: "Hohe Warte Tennis",
    href: "/club",
    children: [
      { label: "Mitglied werden", href: "/club/become-a-member" },
      { label: "Über uns", href: "/club/about-us" },
      { label: "Massage", href: "/club/massage" },
      { label: "Partner", href: "/club/partner" },
    ],
  },
  {
    label: "Tennisschulen",
    href: "/tennis-schools",
    children: [
      { label: "Hohe Warte Tennis Academy", href: "/tennis-schools/hohe-warte-tennis-academy" },
      { label: "Domesport", href: "/tennis-schools/domesport" },
      { label: "Turin Tennis Academy", href: "/tennis-schools/turin-tennis-academy" },
    ],
  },
  { label: "Halle", href: "/indoor" },
  { label: "Fitness", href: "/fitness" },
  { label: "Sommercamps", href: "/summer-camps" },
  { label: "Kontakt", href: "/contact" },
];

/* ------------------------------------------------------------------ *
 * HOMEPAGE CONTENT (German — formal "Sie")
 * NOTE: the marketing copy + numbers below are placeholders crafted
 * for the design. Swap them for real academy data when ready
 * (this is where ai/data.md content should eventually live).
 * ------------------------------------------------------------------ */

export const HERO = {
  kicker: "Tennisakademie — Wien",
  title: "HOHE WARTE",
  lead: "Wo Disziplin zur Kunst wird.",
};

// Manifesto is revealed word-by-word on scroll. Keep the accent words
// (wrapped in *asterisks*) short — they render in the serif accent face.
export const MANIFESTO =
  "Wir bringen Ihnen nicht nur Tennis bei. Wir formen, wie Sie sich *bewegen*, *denken* und *kämpfen* — Ballwechsel für Ballwechsel.";

export const RACKET_SECTION = {
  kicker: "Das Instrument",
  title: "Gebaut für alle,\ndie es ernst meinen.",
  words: ["Präzision", "Kraft", "Haltung"],
  body:
    "Jeder Griff, jede Saite, jeder Grad des Schwungs ist Absicht. Wir sind besessen von den Details — damit Sie es beim Matchball nicht sein müssen.",
};

export const GALLERY = [
  { src: "/images/court-top.avif", index: "01", title: "Turniersand", caption: "Von Hand gepflegt, Linie für Linie" },
  { src: "/images/court-side-artistic.png", index: "02", title: "Für das Licht gebaut", caption: "Ballwechsel zur goldenen Stunde auf rotem Sand" },
  { src: "/images/court-top-with-man.avif", index: "03", title: "Raum zum Atmen", caption: "Platz, um Ihren Rhythmus zu finden" },
  { src: "/images/court-in-hall.avif", index: "04", title: "Der Winterplatz", caption: "Wird es kalt, zieht das Spiel nach drinnen" },
];

export const ELITE = {
  overline: "Der Maßstab",
  under: "Willkommen in der Elite.",
  sub: "Ein Jahrhundert voller Champions hat diese Plätze bespielt. Jetzt sind Sie an der Reihe.",
};

// Numbers are placeholders — replace with the academy's real figures.
export const STATS = [
  { value: 120, suffix: "", label: "Jahre auf der Warte" },
  { value: 14, suffix: "", label: "Turnierplätze" },
  { value: 24, suffix: "", label: "Engagierte Trainer" },
  { value: 900, suffix: "+", label: "Mitglieder & Spieler" },
];

export const PROGRAMS = [
  {
    index: "01",
    title: "Tennisakademie",
    href: "/tennis-schools/hohe-warte-tennis-academy",
    desc: "Elite-Wege für Junioren und Profis, geführt von Trainern, die es selbst erlebt haben.",
    image: "/images/court-girl-playing-side.avif",
  },
  {
    index: "02",
    title: "Kinder & Jugend",
    href: "/tennis-schools",
    desc: "Kindernachmittage dienstags (5–10 Jahre), Teens on Court samstags (8–16 Jahre) — spielerisch, motivierend, für jedes Niveau.",
    image: "/images/court-top-with-man.avif",
  },
  {
    index: "03",
    title: "Sommercamps",
    href: "/summer-camps",
    desc: "Wochen, die aus Anfängern Überzeugte und aus Spielern Wettkämpfer machen.",
    image: "/images/court-top.avif",
  },
  {
    index: "04",
    title: "Fitness",
    href: "/fitness",
    desc: "Kraft, Schnelligkeit und Regeneration — für den Athleten, der in Ihnen steckt.",
    image: "/images/gym2.webp",
  },
];

export const RELAX = {
  kicker: "Abseits des Platzes",
  title: "Das Leben jenseits\nder Grundlinie.",
  body:
    "Eine echte Sportsbar, eine warme Sauna und Hände, die genau wissen, wo es wehtut. Oft kommt das Beste des Tages nach dem letzten Punkt.",
  bar: {
    image: "/images/sportsbar/sportsbar-front.jpg",
    title: "Die Sportsbar",
    desc: "Auftanken, feiern, entspannen — eine echte Mahlzeit und ein kühles Getränk, direkt am Platz.",
  },
  wellness: {
    image: "/images/massage1.avif",
    title: "Sauna & Massage",
    desc: "Ausklingen, regenerieren und stärker zurückkommen.",
  },
  food: [
    { src: "/images/sportsbar/food-1.jpg", label: "Aus der Küche" },
    { src: "/images/sportsbar/food-2.jpg", label: "" },
    { src: "/images/sportsbar/drinks-1.jpg", label: "" },
    { src: "/images/sportsbar/sportsbar-inside.jpg", label: "In der Bar" },
  ],
};

export const FACILITY = {
  kicker: "Die Anlage",
  title: "Ein Zuhause für das Spiel.",
  body:
    "Hoch über Wien auf der Hohen Warte verbindet unsere Anlage ein Jahrhundert Tradition mit allem, was ein moderner Spieler zum Wachsen braucht.",
  image: "/images/hohewarte-areal.jpg",
};

export const CTA = {
  overline: "Bereit, wenn Sie es sind",
  title: "Ihre Saison\nbeginnt hier.",
  primary: { label: "Mitglied werden", href: "/club/become-a-member" },
  secondary: { label: "Kontakt", href: "/contact" },
};

export const SITE = {
  name: "Hohe Warte",
  location: "Wien, Österreich",
  email: "office@hohewarte.tennis",
};
