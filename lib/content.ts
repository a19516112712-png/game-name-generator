/* eslint-disable @typescript-eslint/no-unused-vars */
import pages from "@/data/pages.json";

// ---- Seeded PRNG (mulberry32) ----
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (Math.imul(31, h) + slug.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

function pick<T>(arr: readonly T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function shuffle<T>(arr: readonly T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- Word pools ----
const FIRST_PARTS = [
  "shadow", "iron", "star", "storm", "fire", "frost", "night", "blood", "holy", "void",
  "dragon", "wolf", "raven", "eagle", "lion", "serpent", "hawk", "bear", "viper", "phoenix",
  "crystal", "silver", "golden", "ebon", "crimson", "azure", "obsidian", "emerald", "onyx", "jade",
  "thunder", "blade", "rune", "soul", "mind", "heart", "spirit", "bone", "ash", "dust",
  "dark", "light", "deep", "high", "low", "far", "near", "lost", "last", "first",
  "war", "peace", "doom", "fate", "hope", "fear", "rage", "calm", "pain", "joy",
  "steel", "stone", "wood", "ice", "flame", "wind", "wave", "earth", "sky", "sea",
  "dawn", "dusk", "noon", "tide", "moon", "sun", "cloud", "rain", "snow", "mist",
  "grim", "swift", "fierce", "silent", "lone", "wild", "pale", "grim", "bleak", "bright",
];

const SECOND_PARTS = [
  "thorn", "bane", "fell", "hold", "gard", "heim", "vale", "mere", "wood", "field",
  "forge", "stone", "keep", "watch", "wall", "gate", "tower", "spire", "peak", "crest",
  "blade", "shield", "helm", "spear", "bow", "arrow", "sword", "axe", "mace", "claw",
  "heart", "mind", "soul", "eye", "hand", "fist", "foot", "wing", "fang", "tooth",
  "fire", "flame", "frost", "ice", "storm", "wind", "rain", "wave", "tide", "flood",
  "shadow", "light", "dark", "dawn", "dusk", "night", "day", "star", "moon", "sun",
  "song", "cry", "roar", "howl", "whisper", "echo", "call", "chant", "hymn", "dirge",
  "haven", "rest", "home", "den", "lair", "nest", "pit", "crypt", "tomb", "grave",
  "rune", "sigil", "mark", "sign", "seal", "brand", "scar", "wound", "veil", "shroud",
  "path", "road", "way", "trail", "track", "bridge", "ford", "cross", "pass", "gate",
];

// ---- Meaning templates ----
const MEANING_TEMPLATES: Array<(t: string, r: string, c: string) => string> = [
  (t, r, c) => `A ${c.toLowerCase()} known for its ${t.toLowerCase()}-touched ${r.toLowerCase()} heritage.`,
  (t, r, _) => `Where ${r.toLowerCase()}s wield the power of ${t.toLowerCase()} magic.`,
  (t, r, c) => `The ${c.toLowerCase()} of ${t.toLowerCase()} ${r.toLowerCase()}s, shrouded in legend.`,
  (t, r, c) => `A sacred ${c.toLowerCase()} blessed by ${t.toLowerCase()} forces and guarded by ${r.toLowerCase()} warriors.`,
  (t, r, _) => `Home to the ${t.toLowerCase()} ${r.toLowerCase()}s who rule the land with ancient wisdom.`,
  (t, r, c) => `A ${c.toLowerCase()} forged in ${t.toLowerCase()} flames by the ${r.toLowerCase()} lords.`,
  (t, r, c) => `The ${t.toLowerCase()} stronghold of the ${r.toLowerCase()} ${c.toLowerCase()}.`,
  (t, r, c) => `Where ${r.toLowerCase()} ${c.toLowerCase()} dwells beneath ${t.toLowerCase()} skies.`,
  (_, r, c) => `A legendary ${c.toLowerCase()} where ${r.toLowerCase()}s channel ancient energy.`,
  (t, r, c) => `The ancient ${c.toLowerCase()} of ${t.toLowerCase()} ${r.toLowerCase()}s, untouched by time.`,
  (t, r, c) => `A ${t.toLowerCase()}-infused ${c.toLowerCase()} ruled by mighty ${r.toLowerCase()} chieftains.`,
  (t, r, c) => `The ${t.toLowerCase()} ${c.toLowerCase()} where ${r.toLowerCase()}s defend their sacred realm.`,
  (_, r, c) => `Eternal ${c.toLowerCase()} of the ${r.toLowerCase()}s, bathed in divine light.`,
  (t, r, c) => `A hidden ${c.toLowerCase()} where ${r.toLowerCase()}s master the arts of ${t.toLowerCase()}.`,
  (t, r, c) => `The fabled ${c.toLowerCase()} of ${t.toLowerCase()} ${r.toLowerCase()}s, feared across the land.`,
];

const LORE_TEMPLATES: Array<(t: string, r: string, c: string, n: string) => string> = [
  (t, r, c, n) => `Long ago, the ${r.toLowerCase()}s of the ${t.toLowerCase()} ${c.toLowerCase()} forged ${n} as a bastion against the encroaching darkness. Centuries of ${t.toLowerCase()} magic have seeped into its very stones, granting the ${c.toLowerCase()} an ethereal presence that few outsiders have witnessed.`,
  (t, r, c, n) => `${n} was established during the Age of ${t}, when ${r.toLowerCase()} seers foresaw a great cataclysm. The ${c.toLowerCase()} has since grown into a thriving hub of ${t.toLowerCase()} lore, attracting ${r.toLowerCase()} scholars from distant lands.`,
  (t, r, c, n) => `According to ${r.toLowerCase()} legend, ${n} rose from the ashes of a fallen empire. Blessed by the ${t.toLowerCase()} spirits, the ${c.toLowerCase()} became a sanctuary for ${r.toLowerCase()} refugees seeking a new beginning.`,
  (t, r, c, n) => `The founding of ${n} is tied to the great ${t.toLowerCase()} war, where ${r.toLowerCase()} heroes united under a single banner. Today, the ${c.toLowerCase()} stands as a monument to their sacrifice and valor.`,
  (t, r, c, n) => `Whispers tell of ${n} being a gateway to the ${t.toLowerCase()} plane, discovered by ${r.toLowerCase()} explorers who ventured too deep. The ${c.toLowerCase()} now guards this portal, its ${r.toLowerCase()} inhabitants forever changed.`,
  (t, r, c, n) => `The ${r.toLowerCase()}s of ${n} believe their ${c.toLowerCase()} was carved from living ${t.toLowerCase()} essence. Each ruler undergoes a trial of ${t.toLowerCase()} to prove their worthiness to lead.`,
  (t, r, c, n) => `${n} emerged during the ${t.toLowerCase()} Convergence, when ${r.toLowerCase()} mystics bound the elemental forces to the mortal plane. The ${c.toLowerCase()} has withstood countless invasions thanks to its ${t.toLowerCase()} wards.`,
  (t, r, c, n) => `Ancient ${r.toLowerCase()} texts speak of ${n} as the birthplace of ${t.toLowerCase()} sorcery. The ${c.toLowerCase()} trains new generations of ${r.toLowerCase()} mages in the forbidden arts.`,
  (t, r, _, n) => `Once a barren wasteland, ${n} was transformed by ${r.toLowerCase()} pioneers who harnessed ${t.toLowerCase()} energies. The settlement now flourishes as a beacon of ${r.toLowerCase()} ingenuity.`,
  (t, r, c, n) => `The ${c.toLowerCase()} of ${n} was hidden from the world for millennia, protected by ${t.toLowerCase()} enchantments woven by ${r.toLowerCase()} archmages. Recently rediscovered, it remains a place of wonder and danger.`,
  (t, r, c, n) => `${n} owes its existence to an ancient pact between ${r.toLowerCase()} chieftains and ${t.toLowerCase()} entities. The ${c.toLowerCase()} thrives on this symbiotic bond, its power growing with each passing generation.`,
  (t, r, c, n) => `Legend says ${n} was built upon the bones of a colossal ${t.toLowerCase()} beast slain by ${r.toLowerCase()} heroes. The ${c.toLowerCase()} draws strength from the creature's lingering essence.`,
  (t, r, c, n) => `In the heart of the ${t.toLowerCase()} wastes, ${n} emerged as a defiant ${c.toLowerCase()} of ${r.toLowerCase()} exiles. Against all odds, they built a civilization that rivals the greatest empires.`,
  (t, r, c, n) => `The ${r.toLowerCase()} oracle prophesied the rise of ${n} a thousand years before its founding. When ${t.toLowerCase()} omens aligned, the ${c.toLowerCase()} was established exactly as foretold.`,
  (t, r, c, n) => `${n} serves as the spiritual heart of the ${r.toLowerCase()} ${c.toLowerCase()}, where ${t.toLowerCase()} rituals are performed under the watchful eyes of ancient guardians.`,
];
// ---- Name Meanings explainer ----
const NAME_MEANINGS_INTRO: Array<(t: string, r: string, c: string) => string> = [
  (t, r, c) => `Every name generated for the ${t} ${r} ${c} carries a unique meaning that reflects the deep connection between ${t.toLowerCase()} forces and ${r.toLowerCase()} culture. Understanding these meanings helps worldbuilders integrate names seamlessly into their settings.`,
  (t, r, c) => `The meanings behind ${t} ${r} ${c} names are carefully crafted to reflect the interplay of ${t.toLowerCase()} energy and ${r.toLowerCase()} heritage. Each meaning provides a glimpse into the ${c.toLowerCase()}'s history, values, and place in the fantasy world.`,
];

// ---- Lore Ideas ----
const LORE_IDEAS: Array<(t: string, r: string, c: string) => string> = [
  (t, r, c) => `Consider how the ${t.toLowerCase()} nature of your ${r.toLowerCase()} ${c.toLowerCase()} shapes its founding myth. Was it born from a ${t.toLowerCase()} catastrophe, blessed by ${t.toLowerCase()} spirits, or forged through ${r.toLowerCase()} determination against ${t.toLowerCase()} forces?`,
  (t, r, c) => `The political structure of a ${r.toLowerCase()} ${c.toLowerCase()} often reflects ${t.toLowerCase()} principles. A council of ${t.toLowerCase()}-touched elders, a single ${t.toLowerCase()}-blessed monarch, or a meritocracy based on ${t.toLowerCase()} mastery — each creates different narrative opportunities.`,
  (t, r, c) => `Think about how neighboring ${c.toLowerCase()}s view your ${t} ${r} ${c}. Do they fear its ${t.toLowerCase()} power, seek alliances, or trade for ${t.toLowerCase()} resources? These external relationships add depth to your worldbuilding.`,
  (t, r, c) => `The geography of a ${t} ${r} ${c} should complement its name. ${t.toLowerCase()}-themed landmarks, ${r.toLowerCase()} architectural styles, and ${t.toLowerCase()} environmental features create a vivid and consistent setting.`,
];

// ---- Naming Rules ----
const NAMING_RULES: Array<(t: string, r: string, c: string) => string> = [
  (t, r, c) => `Rule 1: The name must reflect the ${t} theme. Every ${r.toLowerCase()} ${c.toLowerCase()} name incorporates ${t.toLowerCase()} elements in its prefix or root word, establishing the ${c.toLowerCase()}'s magical or elemental alignment.`,
  (t, r, c) => `Rule 2: Honor ${r} naming traditions. ${r} names follow specific phonetic patterns — certain consonant clusters, vowel preferences, and syllable structures that distinguish ${r.toLowerCase()} names from those of other races.`,
  (t, r, c) => `Rule 3: Match the ${c} scale. Empire names should sound grand and sweeping; guild names should feel tight-knit and purposeful; clan names should evoke kinship and shared heritage.`,
  (t, r, c) => `Rule 4: Maintain internal consistency. If you generate multiple ${r.toLowerCase()} ${c.toLowerCase()}s for the same world, ensure their names share linguistic DNA while remaining distinct enough to avoid confusion.`,
  (t, r, c) => `Rule 5: Consider the name's evolution. Great names often have shortened forms, nicknames, or historical variants. A ${c.toLowerCase()} called "The ${t} ${r} ${c}" might be known colloquially as "The ${t}hold" by its inhabitants.`,
];

// ---- People Also Search (keyword generation) ----
function generatePeopleAlsoSearch(theme: string, race: string, context: string): string[] {
  const t = theme.toLowerCase();
  const r = race.toLowerCase();
  const c = context.toLowerCase();
  
  return [
    `${t} ${r} ${c} name generator`,
    `${r} ${c} names fantasy`,
    `best ${t} ${c} names`,
    `${r} name generator`,
    `${c} name generator`,
    `fantasy ${c} names`,
    `${t} fantasy names`,
    `${r} ${c} ideas`,
    `cool ${c} names`,
    `unique ${r} ${c} names`,
    `${t} ${r} names for D&D`,
    `${c} naming guide`,
    `medieval ${c} names`,
    `epic ${c} names`,
    `${t} themed ${c} names`,
    `${r} worldbuilding names`,
    `fantasy ${r} ${c} generator`,
    `${t} ${r} naming conventions`,
    `RPG ${c} names`,
    `legendary ${r} ${c} names`,
  ];
}


// ---- FAQ question templates ----
const FAQ_QUESTIONS: Array<(t: string, r: string, c: string) => string> = [
  (t, r, c) => `What kind of names does the ${t} ${r} ${c} generator create?`,
  (t, r, c) => `How do I choose the best ${t} ${r} ${c} name?`,
  (t, r, c) => `Are these names based on real ${r.toLowerCase()} mythology?`,
  (t, r, c) => `What makes a ${t.toLowerCase()} ${c.toLowerCase()} name feel authentic?`,
  (t, r, c) => `Can I use these names for my D&D campaign?`,
  (t, r, c) => `How many different names can the ${t} ${r} ${c} generator produce?`,
  (t, r, c) => `What do ${t.toLowerCase()} elements symbolize in ${r.toLowerCase()} naming?`,
  (t, r, c) => `How are ${r.toLowerCase()} ${c.toLowerCase()} names structured?`,
  (t, r, c) => `Do these names work for both male and female ${r.toLowerCase()} ${c.toLowerCase()}s?`,
  (t, r, c) => `Can I combine multiple generated names for a larger ${c.toLowerCase()}?`,
];

const FAQ_ANSWERS: Array<(t: string, r: string, c: string) => string> = [
  (t, r, c) => `This generator creates unique ${c.toLowerCase()} names that blend ${t.toLowerCase()} themes with ${r.toLowerCase()} cultural elements, perfect for fantasy worldbuilding, RPG campaigns, and creative writing projects.`,
  (t, r, c) => `Look for names that resonate with your ${c.toLowerCase()}'s core identity. Consider how ${t.toLowerCase()} influences shape the ${r.toLowerCase()} culture and choose a name that reflects those values.`,
  (t, r, c) => `While inspired by fantasy ${r.toLowerCase()} archetypes, the names are original creations that combine ${t.toLowerCase()} themes with ${c.toLowerCase()} naming conventions found across various mythologies.`,
  (t, r, c) => `Authentic ${t.toLowerCase()} ${c.toLowerCase()} names typically feature strong consonants, ${t.toLowerCase()}-themed prefixes or suffixes, and ${r.toLowerCase()} cultural markers that ground the name in its fantasy world.`,
  (t, r, c) => `Absolutely! All names are designed for tabletop RPGs like Dungeons & Dragons, Pathfinder, and other fantasy systems. Feel free to adapt them to fit your campaign setting.`,
  (t, r, c) => `With ${t.toLowerCase()} themes combined with ${r.toLowerCase()} naming patterns and ${c.toLowerCase()} structures, the generator can produce thousands of unique variations from its template-based engine.`,
  (t, r, c) => `${t} elements in ${r.toLowerCase()} naming often represent power, mystery, and the fundamental forces that shape the ${c.toLowerCase()}'s identity and its place in the world.`,
  (t, r, c) => `${r} ${c.toLowerCase()} names typically follow a two-part structure: a ${t.toLowerCase()}-themed prefix combined with a ${c.toLowerCase()} suffix, creating names that are both meaningful and memorable.`,
  (t, r, c) => `Yes, the generated names are gender-neutral ${c.toLowerCase()} names that focus on territorial and cultural identity rather than individual gender. They work equally well for any ${r.toLowerCase()} ${c.toLowerCase()} concept.`,
  (t, r, c) => `Definitely! Many worldbuilders combine names to create ${c.toLowerCase()} federations, alliances, or historical predecessors. The ${t.toLowerCase()} ${r.toLowerCase()} naming style adapts well to multi-${c.toLowerCase()} settings.`,
];

// ---- Introduction paragraphs ----
const INTRO_SENTENCES: Array<(t: string, r: string, c: string) => string> = [
  (t, r, c) => `The ${t} ${r} ${c} is a name generator designed for fantasy worldbuilders, RPG enthusiasts, and creative writers seeking unique ${c.toLowerCase()} names with ${t.toLowerCase()} aesthetics and ${r.toLowerCase()} heritage.`,
  (t, r, c) => `In the realm of fantasy naming, ${r.toLowerCase()} ${c.toLowerCase()}s infused with ${t.toLowerCase()} energy hold a special place — they evoke mystery, power, and ancient traditions that captivate the imagination.`,
  (t, r, c) => `${t} ${r} ${c.toLowerCase()}s are characterized by their ${t.toLowerCase()}-themed naming conventions, reflecting the deep connection between ${r.toLowerCase()} culture and the elemental forces of ${t.toLowerCase()}.`,
  (t, r, c) => `From the annals of ${r.toLowerCase()} history, ${t.toLowerCase()}-infused ${c.toLowerCase()}s have produced some of the most memorable names in fantasy lore, each carrying the weight of millennia.`,
  (t, r, c) => `The art of naming a ${r.toLowerCase()} ${c.toLowerCase()} draws from the wellspring of ${t.toLowerCase()} symbolism, where every syllable speaks of power, legacy, and the ${r.toLowerCase()} spirit.`,
  (t, r, c) => `Whether you are crafting a Dungeons & Dragons campaign or building a novel's fantasy world, a well-chosen ${t.toLowerCase()} ${r.toLowerCase()} ${c.toLowerCase()} name can define an entire civilization.`,
  (t, r, c) => `${r} ${c.toLowerCase()}s have long been associated with ${t.toLowerCase()} forces, and their names reflect this bond — each title a testament to the ${t.toLowerCase()} power that flows through ${r.toLowerCase()} lands.`,
  (t, r, c) => `The naming traditions of ${t} ${r} ${c.toLowerCase()}s are rooted in ancient ${r.toLowerCase()} languages, where ${t.toLowerCase()} motifs infuse every title with layers of meaning and cultural significance.`,
];

// ---- Naming guide paragraphs ----
const NAMING_GUIDE_PARTS: string[] = [
  `When creating names for a "T" "R" "C", the most important principle is to capture the essence of "t" culture while honoring "r" traditions. Start with a strong root word that reflects the "t" energy of the "c", then add a suffix that grounds the name in "r" heritage.`,
  `The phonetics of "r" "C" names should feel weighty and ancient. Use hard consonants and deep vowels to convey the permanence of the "t" force. Avoid soft, melodic sounds unless they specifically align with the chosen "t" aesthetic.`,
  `A "r" "C" name should tell a story at a glance. Consider what the "t" theme says about the "c"'s geography, history, and values. The name becomes a shorthand for the entire "c"'s identity.`,
  `Many "r" "C" names follow a compound structure: a "t"-themed prefix paired with a "C"-specific suffix. This pattern creates names that are instantly recognizable as belonging to the "r" "t" tradition.`,
  `The best "r" "C" names balance uniqueness with familiarity. While every "t" "c" should have a distinct identity, the name should still feel like it belongs within the broader "r" naming ecosystem.`,
  `Prefix choices are critical in "r" "C" naming. A "t"-themed prefix sets the emotional tone and signals the "c"'s alignment, whether it leans toward "t" might, "t" wisdom, or "t" mystery.`,
  `Suffix selection defines the type of "C" governance. Different endings convey different political structures — whether a sprawling empire, a close-knit clan, or a sacred realm.`,
  `Mixing "r" and "t" elements should feel natural, not forced. The most evocative names arise when the "t" theme authentically complements the "r" cultural identity.`,
];

function fillTemplate(text: string, theme: string, race: string, context: string): string {
  return text
    .replace(/"T"/g, theme)
    .replace(/"R"/g, race)
    .replace(/"C"/g, context)
    .replace(/"t"/g, theme.toLowerCase())
    .replace(/"r"/g, race.toLowerCase())
    .replace(/"c"/g, context.toLowerCase());
}

// ---- Exportable generators ----

export interface NameEntry {
  name: string;
  meaning: string;
}

export interface FeaturedName extends NameEntry {
  lore: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export interface PageContent {
  nameMeaningsIntro: string;
  loreIdeas: string[];
  namingRules: string[];
  peopleAlsoSearch: string[];
  introduction: string;
  namingGuide: string;
  names: NameEntry[];
  featured: FeaturedName[];
  faqs: FAQEntry[];
  related: {
    byTheme: { slug: string; title: string }[];
    byRace: { slug: string; title: string }[];
    byContext: { slug: string; title: string }[];
    popular: { slug: string; title: string }[];
  };
}

export function generateContent(theme: string, race: string, context: string): PageContent {
  const slug = `${theme.toLowerCase()}-${race.toLowerCase()}-${context.toLowerCase()}-name-generator`;
  const seed = hashSlug(slug);
  const rng = mulberry32(seed);

  // --- Introduction ---
  const introSentences = shuffle(INTRO_SENTENCES, rng).slice(0, 8);
  const introduction = introSentences
    .map((s) => s(theme, race, context))
    .join(" ");

  // --- Naming Guide ---
  const guideParts = shuffle(NAMING_GUIDE_PARTS, rng).slice(0, 8);
  const namingGuide = guideParts
    .map((p) => fillTemplate(p, theme, race, context))
    .join("\n\n");

  // --- 100 Names ---
  const names: NameEntry[] = [];
  for (let i = 0; i < 100; i++) {
    const part1 = pick(FIRST_PARTS, rng);
    const part2 = pick(SECOND_PARTS, rng);
    const name = capitalize(part1) + capitalize(part2);
    const meaningTemplate = pick(MEANING_TEMPLATES, rng);
    names.push({
      name,
      meaning: meaningTemplate(theme, race, context),
    });
  }

  // --- 20 Featured ---
  const featured: FeaturedName[] = names.slice(0, 20).map((n) => ({
    ...n,
    lore: pick(LORE_TEMPLATES, rng)(theme, race, context, n.name),
  }));

  // --- FAQ (8 questions) ---
  const faqIndices = shuffle(
    FAQ_QUESTIONS.map((_, i) => i),
    rng
  ).slice(0, 8);
  const faqs: FAQEntry[] = faqIndices.map((idx) => ({
    question: FAQ_QUESTIONS[idx](theme, race, context),
    answer: FAQ_ANSWERS[idx](theme, race, context),
  }));

  // --- Related by Theme (4) ---
  const byTheme = shuffle(
    pages.filter((p) => p.theme === theme && p.slug !== slug),
    rng
  )
    .slice(0, 4)
    .map((p) => ({ slug: p.slug, title: p.title }));

  // --- Related by Race (4) ---
  const byRace = shuffle(
    pages.filter((p) => p.race === race && p.slug !== slug),
    rng
  )
    .slice(0, 4)
    .map((p) => ({ slug: p.slug, title: p.title }));

  // --- Related by Context (4) ---
  const byContext = shuffle(
    pages.filter((p) => p.context === context && p.slug !== slug),
    rng
  )
    .slice(0, 4)
    .map((p) => ({ slug: p.slug, title: p.title }));

  // --- Popular Generators (5) ---
  const popularSeed = hashSlug(slug + "-popular");
  const popularRng = mulberry32(popularSeed);
  const popular = shuffle(
    pages.filter((p) => p.slug !== slug),
    popularRng
  )
    .slice(0, 5)
    .map((p) => ({ slug: p.slug, title: p.title }));

    // --- Name Meanings Intro ---
  const nameMeaningsIntro = NAME_MEANINGS_INTRO[Math.floor(rng() * NAME_MEANINGS_INTRO.length)](theme, race, context);

  // --- Lore Ideas ---
  const loreIdeas = shuffle(LORE_IDEAS, rng).slice(0, 4).map(fn => fn(theme, race, context));

  // --- Naming Rules ---
  const namingRules = NAMING_RULES.map(fn => fn(theme, race, context));

  // --- People Also Search ---
  const peopleAlsoSearch = generatePeopleAlsoSearch(theme, race, context);

  return { nameMeaningsIntro, loreIdeas, namingRules, peopleAlsoSearch, introduction, namingGuide, names, featured, faqs, related: { byTheme, byRace, byContext, popular } };
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
