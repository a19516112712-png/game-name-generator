import type { Metadata } from "next";
import Link from "next/link";
import pages from "@/data/pages.json";
import posts from "@/data/blog-posts.json";
import { JsonLd } from "@/components/json-ld";
import AdPlaceholder from "@/components/ad-placeholder";

const BASE_URL = "https://toppicksbase.com";

// Category definitions
const CATEGORIES: Record<string, {
  name: string;
  emoji: string;
  context: string;
  race: string;
  description: string;
  whoIsThisFor: string;
  writingTips: string[];
  rpgUsage: string;
}> = {
  "kingdom-names": { name: "Kingdom", emoji: "🏰", context: "Kingdom", race: "", description: "kingdom names for fantasy worldbuilding, RPG campaigns, and creative writing",
    whoIsThisFor: "Fantasy authors building fictional worlds, Dungeon Masters designing campaign settings, game developers creating RPG maps, and worldbuilders who need authentic-sounding kingdom names for their fictional realms.",
    writingTips: ["Establish a consistent naming language — kingdoms from the same region should share phonetic patterns (e.g., harsh consonants for mountainous kingdoms, flowing vowels for coastal realms).", "Layer historical meaning into names — the Kingdom of Broken Crowns implies a rebellion, while the Sunken Kingdom of Aqualis tells of a cataclysm before anyone reads a word of lore.", "Consider how names evolve over time — short forms used by commoners, formal names used in diplomacy, and epithets (the Wise, the Conqueror) added by history.", "Test pronounceability with your audience — a kingdom name that readers stumble over every time breaks immersion and weakens worldbuilding."],
    rpgUsage: "Dungeon Masters use kingdom names to anchor campaign settings, giving players a sense of place and political stakes. A well-named kingdom like 'The Ashen Reach' immediately communicates tone (dark fantasy), geography (coastal), and narrative hooks (what caused the ash?). Kingdom names appear on campaign maps, in NPC dialogue, in quest hooks, and in faction reputation systems — making them one of the most frequently referenced worldbuilding elements at the table." },
  "clan-names": { name: "Clan", emoji: "⚔️", context: "Clan", race: "", description: "clan names for gaming, fantasy, esports teams, and RPG factions",
    whoIsThisFor: "MMO guild leaders, esports team founders, tabletop RPG players creating character backstories, fantasy writers developing tribal societies, and gaming community organizers.",
    writingTips: ["Clan names should evoke unity and shared identity — use collective imagery like 'Iron Brotherhood' or 'Storm Kindred' that instantly signals this is a group bound by more than convenience.", "Match the name to the clan's values — honor-bound warrior clans need names with gravitas (Steel Vanguard), while scrappy survivor clans benefit from grittier names (Ash Walker Collective).", "Consider clan hierarchy in naming — parent clans, branch clans, and allied clans should have names that suggest relationship (shared prefixes, complementary imagery).", "Avoid names that are already saturated in your game's community — scanning existing clan directories helps ensure your name stands out rather than blending in."],
    rpgUsage: "In RPGs, clan names define faction identity and player allegiance. They appear in guild chat, on leaderboards, in PvP announcements, and in roleplay interactions. A strong clan name attracts like-minded players and sets expectations for group culture — 'The Verdant Wardens' signals nature-focused RP, while 'The Crimson Fury' suggests PvP aggression." },
  "guild-names": { name: "Guild", emoji: "🛡️", context: "Guild", race: "", description: "guild names for MMORPGs, online communities, and fantasy organizations",
    whoIsThisFor: "MMORPG guild masters, fantasy writers creating merchant or craft organizations, D&D players running faction-based campaigns, and online community founders seeking distinctive group identities.",
    writingTips: ["Guild names often reflect profession — the Guild of Gilded Scales suggests merchant bankers, while the Forge-Wardens' Guild implies master smiths. Let the craft shape the name.", "Use archaic or specialized vocabulary — 'Artificers,' 'Syndicate,' 'Consortium,' and 'Cartel' each communicate different guild structures and ethics.", "Consider the guild's public vs. private reputation — a guild might be officially called 'The Benevolent Order of Dawn' but whispered about as 'The Sun Snatchers.' This duality adds depth.", "Guild names work well with heraldic imagery — think about what symbol would appear on a guild seal alongside the name."],
    rpgUsage: "Guild names in RPGs serve as quest hubs, faction reputation systems, and worldbuilding anchors. Players interact with guilds for crafting, trading, training, and story progression — so guild names that are memorable and meaningful enhance player engagement with the game world." },
  "dragon-names": { name: "Dragon", emoji: "🐉", race: "Dragon", context: "", description: "dragon names for empires, kingdoms, clans, and legendary creatures",
    whoIsThisFor: "Fantasy authors creating draconic lore, DMs designing dragon NPCs and dragon-ruled domains, game developers building dragon-centric expansions, and worldbuilders who want majestic, fearsome dragon names.",
    writingTips: ["Dragon names should command attention — use guttural sounds (g, k, r, th) and elongated vowels to create names that feel physically powerful when spoken aloud.", "Consider the dragon's elemental affinity — fire dragons might have names with sharp syllables (Ignarax, Pyrathor), while ice dragons suit smoother, hissing names (Glaciastra, Sylithra).", "Ancient dragons deserve names with gravitas and legend — add epithets like 'the World-Breaker,' 'the Star-Mother,' or 'Keeper of the First Flame' to communicate millennia of history.", "Dragon-ruled domains often blend draconic language with regional tongues — a dragon kingdom ruled by Ignarax might be called Ignaraxia or the Ignari Reach, showing the dragon's influence on the land itself."],
    rpgUsage: "Dragon names in D&D and RPGs signal boss-level threats and legendary lore. A dragon's name is often known across the realm and spoken with fear or reverence. Dragon names also serve as the root for dragon-ruled kingdoms, dragon-worshipping cults, and ancient prophecies — making them high-impact worldbuilding elements." },
  "demon-names": { name: "Demon", emoji: "👹", race: "Demon", context: "", description: "demon names for legions, empires, clans, and infernal realms",
    whoIsThisFor: "Horror fantasy writers, dark fantasy worldbuilders, DMs creating fiendish antagonists, game designers developing demonic factions, and writers who need names that evoke dread and power.",
    writingTips: ["Demon names work best with harsh, abrasive phonetics — use consonants like z, x, k, th and avoid soft, melodic sounds that might undercut the menacing tone.", "Layer in infernal hierarchy titles — descriptors like 'the Unchained,' 'Soul-Render,' 'of the Ninth Circle,' or 'Blade of the Abyss' instantly communicate a demon's rank and nature.", "Demon names often reference corruption or fallen states — former angelic names twisted into demonic forms (Raphael → Razphael, Uriel → Ur-Zhael) create powerful narrative hooks.", "Consider the demon's domain — a demon of pestilence, a demon of war, and a demon of forbidden knowledge should each have names that evoke their sphere of influence."],
    rpgUsage: "Demon names in RPGs are critical for villain design. A demon with a forgettable name undermines dramatic tension, while a name like 'Malachar the Soul-Render' immediately establishes threat level. Demon names appear in summoning rituals, infernal contracts, cultist dialogue, and planar lore — and the best demon names become iconic in gaming groups for years." },
  "angel-names": { name: "Angel", emoji: "😇", race: "Angel", context: "", description: "angel names for realms, alliances, orders, and celestial domains",
    whoIsThisFor: "Fantasy writers exploring celestial themes, DMs creating divine NPCs and aasimar characters, worldbuilders designing heavenly hierarchies, and writers who want names that evoke light, justice, and celestial majesty.",
    writingTips: ["Angel names often end with '-el' or '-ael' suffixes (meaning 'of God' in Hebrew-derived fantasy traditions) — names like Auriel, Seraphael, and Cassiel immediately signal celestial origin.", "Contrast purity with severity — the kindest angel and the most fearsome angel should share the same naming language. 'Luminel the Gentle' and 'Luminel the Burning' can be the same entity in different aspects.", "Consider the angel's choir or sphere — Seraphim, Cherubim, Ophanim, and Dominions each have distinct roles that can influence naming conventions (burning ones, many-eyed ones, wheel-like ones).", "Angelic names pair powerfully with light and celestial imagery — add titles like 'Dawn-Bringer,' 'Star-Keeper,' or 'Light of the Seventh Sphere' to anchor the name in the celestial theme."],
    rpgUsage: "Angel names in RPGs serve as divine patrons, celestial antagonists, and aasimar character backstory elements. Paladins and clerics reference angel names in prayers and oaths, while planar adventures bring players into direct contact with angelic beings — making distinctive, evocative angel names essential for immersion." },
  "vampire-names": { name: "Vampire", emoji: "🧛", race: "Vampire", context: "", description: "vampire names for clans, dynasties, courts, and gothic fantasy",
    whoIsThisFor: "Gothic fantasy and horror writers, Vampire: The Masquerade players and storytellers, dark fantasy worldbuilders, game developers creating vampire factions, and anyone crafting aristocratic immortal characters.",
    writingTips: ["Vampire names thrive on aristocratic elegance with an undercurrent of menace — names like 'House Nocturne' or 'The Sanguine Court' feel refined yet dangerous.", "Blend immortality with obsolescence — ancient vampires might carry names that were fashionable centuries ago, creating a slight dissonance that underscores their ageless nature.", "Consider the vampire's origin culture — a vampire turned in Renaissance Italy, Victorian England, and ancient Mesopotamia should each carry naming conventions from their era and birthplace.", "Bloodline names are especially important — vampire dynasties are defined by lineage, so names should convey inheritance (the Eldermost, the First-Turned, Scion of the Crimson Line)."],
    rpgUsage: "Vampire names in RPGs define entire chronicles. In games like Vampire: The Masquerade, the name of a vampire clan ('Ventrue,' 'Tremere,' 'Nosferatu') defines political allegiance, supernatural powers, and character background. Vampire names also extend to havens, coteries, and blood cults — making them central to gothic RPG worldbuilding." },
  "orc-names": { name: "Orc", emoji: "👺", race: "Orc", context: "", description: "orc names for tribes, hordes, clans, and savage fantasy settings",
    whoIsThisFor: "Fantasy authors writing orc-centric narratives, DMs creating orc antagonists and half-orc player characters, worldbuilders designing tribal societies, and game developers building orc factions.",
    writingTips: ["Orc names thrive on guttural, percussive sounds — use consonants like g, k, r, and short vowel patterns (a, o, u) to create names that feel physically powerful when spoken.", "Avoid the 'savage monoculture' trope — orc societies can be diverse, and their names should reflect that diversity. War-chief names might be blunt and intimidating, while orc shaman names might reference spirits and ancestors.", "Orc tribe names often reference strength, conquest, or natural features — 'Skull-Crusher Clan,' 'Iron Tusk Tribe,' and 'Bloodmoon Horde' each communicate different aspects of orc identity.", "Consider the emerging tradition of complex orc societies in modern fantasy — names like 'The United Clans of Durotar' or 'The Gash'Ur Order' suggest sophisticated social structures beyond the 'mindless horde' stereotype."],
    rpgUsage: "Orc names in D&D and RPGs define enemy factions and playable character backstories. A half-orc PC's tribal name carries their heritage, while orc warband names signal threat level to players. Modern RPGs increasingly feature nuanced orc cultures where naming conventions reflect clan history, spiritual beliefs, and political alliances." },
  "empire-names": { name: "Empire", emoji: "👑", context: "Empire", race: "", description: "empire names for fantasy worldbuilding, RPG campaigns, and creative writing",
    whoIsThisFor: "Epic fantasy authors, worldbuilders designing continental-scale political systems, DMs creating campaign-spanning imperial antagonists, game developers building 4X and grand strategy settings, and writers crafting stories about power and dominion.",
    writingTips: ["Empire names must convey scale — use words like 'Imperium,' 'Dominion,' 'Sovereignty,' and 'Supremacy' to communicate that this is a power that spans continents and commands millions.", "An empire's name often reflects its founding ideology — 'The Solar Imperium' suggests divine right, 'The Iron Dominion' implies military conquest, 'The Mercantile Supremacy' indicates economic power.", "Consider how conquered peoples view the empire — the empire might call itself 'The Benevolent Sovereignty' while subjugated nations call it 'The Blood Tithe.' This duality enriches worldbuilding.", "Imperial names work well with dynastic indicators — 'The Third Solar Imperium' or 'The Renascent Dominion' suggest history, collapse, and rebirth that makes the empire feel lived-in."],
    rpgUsage: "Empire names in RPGs serve as the backdrop for entire campaigns. An empire is not just a faction — it is the political gravity that shapes every border, every conflict, and every character allegiance. Empire names appear on maps, in political intrigue, in war declarations, and in the backstories of characters from occupied territories." },
  "elf-names": { name: "Elf", emoji: "🏹", race: "Elf", context: "", description: "elf names for kingdoms, realms, orders, and high fantasy worlds",
    whoIsThisFor: "High fantasy authors, DMs creating elven NPCs and nations, worldbuilders designing ancient and elegant civilizations, game developers crafting elf-centric expansions, and writers who need names that evoke grace, wisdom, and timelessness.",
    writingTips: ["Elf names favor flowing, melodic phonetics — use liquid consonants (l, r, m, n) and open vowels to create names that feel elegant and musical when spoken.", "Elven naming often reflects nature and starlight — names like 'Silverwood Realm' and 'Moonwhisper Court' connect elven civilization to the natural and celestial worlds.", "Ancient elves deserve names that suggest vast timescales — an elf kingdom might be called 'The Everlasting Glade' or 'The First-Born Dominion' to emphasize that elves predate human civilization by millennia.", "Consider elf subrace distinctions — high elves, wood elves, dark elves, and sea elves each carry different cultural weight that should influence naming conventions."],
    rpgUsage: "Elf names in D&D and fantasy RPGs are among the most frequently referenced worldbuilding elements. Elven nations appear in nearly every fantasy setting, and their names set expectations for architecture, culture, and political alignment. Elf names also serve as linguistic roots for elven characters, artifacts, and spells throughout the game world." },
  "npc-names": { name: "NPC", emoji: "🎭", context: "NPC", race: "", description: "NPC names for D&D, RPG campaigns, video games, and tabletop adventures",
    whoIsThisFor: "Dungeon Masters who need names for dozens of NPCs per session, game developers populating RPG towns, tabletop GMs running sandbox campaigns, and writers who need supporting character names that feel real.",
    writingTips: ["NPC names should match the character's role — a gruff blacksmith, a mysterious sage, and a cheerful innkeeper each need names that support rather than contradict their characterization.", "Avoid 'fantasy name syndrome' — not every NPC needs an elaborate fantasy name. Sometimes 'Thom the Miller' is more immersive than 'Thalorian of the Eternal Grindstone.'", "Use naming to signal culture and region — NPCs from the same village should share naming patterns, creating subtle worldbuilding that players absorb without conscious effort.", "Keep a running name list during sessions — when players ask 'What's the guard's name?' having pre-generated NPC names prevents immersion-breaking pauses."],
    rpgUsage: "NPC names are the most frequently consumed worldbuilding element in RPGs. Players ask for NPC names constantly — innkeepers, guards, merchants, quest-givers, and random townsfolk. A DM who can produce fitting NPC names instantly creates the impression of a fully populated, living world. NPC name generators are essential prep tools for sandbox campaigns." },
  "monster-names": { name: "Monster", emoji: "👾", context: "Monster", race: "", description: "monster names for D&D, RPG bestiaries, fantasy worldbuilding, and creature design",
    whoIsThisFor: "Dungeon Masters designing memorable encounters, game developers populating RPG bestiaries, fantasy writers creating terrifying creatures, and worldbuilders who need monsters that feel like natural parts of their ecosystem.",
    writingTips: ["Monster names should evoke their threat immediately — 'Bone-Crusher Wyrm' tells players what to fear, while something vague like 'Forest Walker' fails to communicate danger.", "Use sensory language in monster names — 'Screeching Night-Terror,' 'Rot-Breath Devourer,' and 'Shimmering Mind-Thief' each create vivid sensory expectations before the encounter begins.", "Consider the monster's ecology — a predator, a parasite, a guardian, and a corrupted former-creature should each have names that reflect their place in the world's ecosystem.", "Legendary monsters deserve epithets — 'The Last Titan of the Elder Age' or 'The Thing That Drinks the Sea' transforms a stat block into a legend."],
    rpgUsage: "Monster names are critical for encounter design. When a DM says 'You see a troll,' players reference meta-knowledge. When a DM says 'You see a Moss-Backed Bridge-Troll of the Old Crossing,' players engage with the specific creature in the specific world. Monster names make encounters memorable and world-specific rather than generic." },
  "creature-names": { name: "Creature", emoji: "🐉", context: "Creature", race: "", description: "fantasy creature names for RPG bestiaries, D&D campaigns, worldbuilding, and mythological settings",
    whoIsThisFor: "Fantasy worldbuilders designing magical ecosystems, DMs creating unique fauna for their settings, game developers building creature collections, and writers who want their fantasy worlds to feel biologically diverse and wondrous.",
    writingTips: ["Fantasy creature names should hint at behavior or ability — 'Glimmer-Finch' suggests a luminous bird, 'Shade-Stalker' implies an ambush predator, 'Echo-Wyrm' communicates sonic abilities.", "Consider the creature's role in the world — livestock, companion animals, wild threats, and sacred beasts should each follow distinct naming conventions that reflect how people interact with them.", "Use compound names for fantasy creatures — combining a descriptive prefix with a creature type (Thunder-Stag, Cinder-Hound, Veil-Moth) creates names that are informative and memorable.", "Creature names can enrich worldbuilding passively — when players encounter 'Iron-Beak Harvesters' in farmlands, they learn about agriculture, ecology, and culture simultaneously without exposition dumps."],
    rpgUsage: "Creature names in RPGs do double duty — they serve as encounter hooks and as environmental storytelling. A forest filled with 'Gloom-Wisps' and 'Rot-Veil Spiders' communicates a blighted ecosystem without a single line of narration. Creature names make fantasy worlds feel biologically rich and internally consistent." },
  "ship-names": { name: "Ship", emoji: "🚢", context: "Ship", race: "", description: "ship names for pirate fleets, fantasy navies, sci-fi vessels, and naval worldbuilding",
    whoIsThisFor: "Naval fantasy authors, pirate RPG GMs, game developers building nautical adventures, worldbuilders designing maritime cultures, and anyone who needs ships with personality and story.",
    writingTips: ["Ship names often carry personality — 'The Reluctant Mermaid' and 'The Iron Duchess' each communicate character before any crew appears. Treat ship names like character names.", "Consider the ship's history — a ship might keep its original name (The Silver Wake), gain a nickname from its crew (Old Salty), and be known differently by its enemies (The Ghost Raider).", "Ship classes influence naming — warships suit aggressive names (Harbinger, Vindicator), merchant vessels favor trustworthy names (Prosperous, Fair Wind), and pirate ships need intimidating names (Reaper's Glee, Crimson Horizon).", "Naming conventions vary by culture — a Norse-inspired longship, a Chinese-inspired junk, and a British-inspired galleon should each draw from distinct naming traditions."],
    rpgUsage: "Ship names in naval RPGs and pirate campaigns are central to gameplay. Players live on their ship, defend it, upgrade it, and develop emotional attachment to it. A ship with a great name becomes a party member — 'The Sea Serpent's Kiss' or 'The Broken Promise' carries narrative weight throughout an entire campaign." },
  "tavern-names": { name: "Tavern", emoji: "🍺", context: "Tavern", race: "", description: "tavern and inn names for D&D, RPG campaigns, fantasy worldbuilding, and tabletop adventures",
    whoIsThisFor: "Dungeon Masters building immersive towns and cities, fantasy writers creating meeting places for characters, worldbuilders designing cultural hubs, and RPG players who want their home-base tavern to have the perfect name.",
    writingTips: ["The classic tavern naming pattern is 'The [Adjective] [Noun]' — The Prancing Pony, The Leaky Cauldron, The Salty Spittoon. This pattern works because it's instantly evocative and memorable.", "Tavern names reflect their clientele — 'The Merchant's Rest' serves traders, 'The Adventurer's Respite' caters to quest-takers, 'The Rat and Parrot' suggests the roughest crowd in town.", "Consider the tavern's sign — the best tavern names paint a clear picture of what would hang above the door, helping players visualize the establishment immediately.", "Tavern names can tell micro-stories — 'The Hanged Man's Last Drink,' 'The Broken Crown,' and 'The Liar's Prize' each hint at a backstory that players might investigate."],
    rpgUsage: "Taverns are the most frequently visited locations in tabletop RPGs. They serve as quest-starting points, information-gathering hubs, and safe zones between adventures. A memorable tavern name ('The Winking Skeever,' 'The Yawning Portal') becomes an iconic part of a gaming group's shared history, referenced for years after the campaign ends." },
  "faction-names": { name: "Faction", emoji: "⚜️", context: "Faction", race: "", description: "faction names for RPG campaigns, fantasy worldbuilding, political intrigue, and gaming groups",
    whoIsThisFor: "Worldbuilders designing political systems, DMs creating competing factions for campaign conflict, game developers building reputation systems, and writers who need organizations that players love, hate, or love to hate.",
    writingTips: ["Faction names should communicate ideology instantly — 'The Iron Circle' suggests militaristic unity, 'The Veiled Hand' implies secrecy and manipulation, 'The Verdant Covenant' signals nature-focused values.", "Faction names often contrast with their rivals — if one faction is 'The Solar Order' (light, openness, hierarchy), their rival might be 'The Umbral Collective' (shadow, decentralization, freedom).", "Consider faction symbology — the best faction names conjure a visual emblem (a circle of iron, a veiled hand, a verdant leaf) that reinforces brand identity within your world.", "Factions have internal and external names — 'The Children of the Seventh Dawn' might be shortened to 'The Seventh' by members and 'Dawn-Crazies' by enemies, adding texture to your world."],
    rpgUsage: "Faction names define player allegiance and campaign conflict in RPGs. In games like Fallout: New Vegas, faction names ('NCR,' 'Caesar's Legion,' 'Mr. House') define the entire narrative structure. In D&D, faction names like 'The Harpers' or 'The Zhentarim' persist across decades of published content because great faction names become foundational to shared gaming culture." },
  "wizard-names": { name: "Wizard", emoji: "🧙", context: "Wizard", race: "", description: "wizard and mage names for RPG characters, fantasy worldbuilding, D&D campaigns, and magical storytelling",
    whoIsThisFor: "Fantasy authors creating magical characters, D&D players building wizard PCs, DMs designing archmage NPCs, worldbuilders creating magical academies and traditions, and writers who need names that crackle with arcane energy.",
    writingTips: ["Wizard names benefit from academic gravitas — titles like 'Magister,' 'Archmage,' and 'Thaumaturge' communicate different levels of magical achievement and specialization.", "Consider the wizard's school of magic — a necromancer, an illusionist, and an evoker should each have names that suit their magical identity. Bone-themed names for necromancers, light-themed for illusionists, explosive for evokers.", "Wizard towers and academies need names too — 'The Spire of Storms,' 'The Obsidian Athenaeum,' and 'The Last Academy of the Sunken Age' each suggest rich histories and distinct magical traditions.", "Mage names can evolve with power — an apprentice called 'Finn' might become 'Finn the Lesser Arcanist' then 'Magister Finnorian of the Seventh Circle' as they gain mastery."],
    rpgUsage: "Wizard names in D&D and fantasy RPGs are often the most distinctive character names at the table. Wizards accumulate titles and reputations, and their names grow alongside their power level. An archmage NPC's full name and title can itself be a quest reward — learning the true name of an ancient wizard might unlock their hidden sanctum." },
  "knight-names": { name: "Knight", emoji: "⚔️", context: "Knight", race: "", description: "knight and paladin names for RPG characters, fantasy worldbuilding, chivalric orders, and medieval adventures",
    whoIsThisFor: "Fantasy authors writing chivalric tales, D&D players creating paladin and fighter characters, DMs designing knightly orders, worldbuilders crafting feudal systems, and writers who need names that embody honor, courage, and martial excellence.",
    writingTips: ["Knight names pair a given name with a title or epithet — 'Sir Aldric the Unbroken,' 'Dame Seraphine, Knight of the Gilded Rose,' or 'The Warden of the Eastern March.' The epithet communicates achievement and reputation.", "Knightly orders need names that communicate their vows — 'The Order of the Eternal Watch,' 'The Brotherhood of the Argent Shield,' and 'The Sisters of the Merciful Blade' each define what the order stands for.", "Consider the knight's heraldry — a knight's name often ties to their coat of arms (silver griffin → Ser Griffinus Argent), creating visual and verbal identity alignment.", "Fallen knights and blackguards need names that contrast with their former honor — 'Sir Aldric the Unbroken' might become 'The Broken Knight of Ashen Moor,' with the name change marking their narrative fall."],
    rpgUsage: "Knight names in RPGs carry mechanical and narrative weight. Paladin oaths, fighter subclasses, and faction reputations are all expressed through knightly naming. A knight's full name and title tells players about their rank, their order, their achievements, and their likely combat style — all before any stat block is revealed." },
  "pirate-names": { name: "Pirate", emoji: "🏴‍☠️", context: "Pirate", race: "", description: "pirate and buccaneer names for RPG characters, fantasy worldbuilding, naval adventures, and swashbuckling tales",
    whoIsThisFor: "Naval fantasy authors, pirate RPG GMs, game developers building swashbuckling adventures, worldbuilders designing pirate factions, and anyone who needs roguish, charismatic names for seafaring scoundrels.",
    writingTips: ["Pirate names thrive on notoriety — 'Black-Eyed Anne,' 'Calico Jack,' and 'Red-Hand Rourke' each paint vivid character portraits. The name should make the pirate memorable before they've done anything.", "Pirate epithets often describe appearance, behavior, or reputation — 'One-Eyed Willem,' 'Mad Morwenna,' and 'Gentleman Jim the Ship-Breaker' each communicate different pirate archetypes.", "Pirate ship names and captain names should feel like a matched set — Captain 'Brine-Beard Boros' commands 'The Salt Throne,' creating a cohesive identity that sticks in memory.", "Consider the pirate's origin — former naval officers, escaped slaves, merchant sailors-turned-criminal, and born-into-piracy characters should each carry names that reflect their path to piracy."],
    rpgUsage: "Pirate names in naval RPGs define rival captains, ally crews, and player character identities. A pirate campaign revolves around reputation, and pirate names are the vehicle for that reputation. When players hear 'The Crimson Corsair has been sighted,' the pirate's name alone should generate excitement, fear, or anticipation at the table." },
  "forest-names": { name: "Forest", emoji: "🌲", context: "Forest", race: "", description: "enchanted forest names for fantasy worldbuilding, RPG campaigns, D&D adventures, creative writing, and educational storytelling projects",
    whoIsThisFor: "Fantasy worldbuilders designing magical wilderness, DMs creating forest-based adventures, environmental storytellers, game developers building nature-rich game worlds, and educators using fantasy to teach ecology and conservation themes.",
    writingTips: ["Forest names should evoke atmosphere — 'The Whispering Wood' implies sentience or spirits, 'The Sun-Dappled Glade' feels peaceful and safe, 'The Thornmire' warns of danger.", "Consider what lives in (or rules) the forest — a forest named 'The Elken Reach' suggests elves, while 'The Wyrmwood' implies dragon presence. The name primes expectations for encounters.", "Forest names can reflect magical properties — 'The Ever-Green' (eternal spring), 'The Amber Wilds' (trees fossilized in time), 'The Dreaming Thicket' (sleep/illusion magic) each communicate magical rules through naming.", "Seasonal forest names create dynamic settings — 'The Autumn Court's Domain,' 'The Winter-Woven Copse,' and 'The Spring-Renewed Grove' suggest forests that change dramatically with seasons, enriching worldbuilding."],
    rpgUsage: "Forests are among the most commonly traversed environments in fantasy RPGs. Forest names appear on hex maps, in ranger tracking rolls ('You find tracks leading toward the Thornmire'), in druid backstories, and in fey-related adventures. A well-named forest is an adventure location in itself, not just a terrain type between destinations." },
  "fantasy-city-names": { name: "Fantasy City", emoji: "🏙️", context: "City", race: "", description: "fantasy city names for worldbuilding, RPG campaigns, D&D settings, and creative writing",
    whoIsThisFor: "Urban fantasy worldbuilders, DMs creating hub cities for campaigns, game developers designing RPG towns, fantasy authors building metropolitan settings, and anyone who needs cities that feel like characters in their own right.",
    writingTips: ["City names should communicate scale and character — 'Port Valiance' and 'The Grand Metropolis of Aethos' set entirely different expectations about size, culture, and significance.", "Consider the city's founding story — cities named after their founder (Valerius → Valeria), their geography (Bridgetown, Highspire), or their purpose (Shieldwall, Trader's Gate) each carry different narrative weight.", "City districts and quarters extend the naming palette — the 'Silk Quarter,' 'Temple Ward,' and 'Docklands' of a single city collectively paint a detailed urban portrait.", "City epithets add depth — 'Valeria the Golden,' 'Bridgetown-of-the-Mists,' and 'Shieldwall, Last Bulwark of the North' transform functional names into storied locations."],
    rpgUsage: "Cities in RPGs are quest hubs, safe zones, marketplace destinations, and political centers. City names are among the most frequently spoken proper nouns in any campaign. A city like 'Neverwinter' or 'Baldur's Gate' becomes iconic because the name is evocative, distinctive, and rich with implied history." },
  "dungeon-names": { name: "Dungeon", emoji: "🏚️", context: "Dungeon", race: "", description: "dungeon names for D&D campaigns, RPG adventures, fantasy worldbuilding, and tabletop gaming",
    whoIsThisFor: "Dungeon Masters designing adventure locations, game developers creating instanced dungeons, fantasy authors writing subterranean sequences, and worldbuilders who need atmospheric names for dangerous, mysterious places.",
    writingTips: ["Dungeon names should communicate danger type — 'The Tomb of the Lich-King' (undead, royal), 'The Sunken Prison of Aqualis' (underwater, criminals), 'The Mad Alchemist's Laboratory' (constructs, potions) each set clear encounter expectations.", "Layer history into dungeon names — 'The Third Delve of the Dwarven Exodus' and 'The Temple the Gods Forgot' suggest stories that happened before the players arrived, making exploration feel like archaeology.", "Consider who named the dungeon — the name given by terrified locals ('The Screaming Hole') differs from the name given by treasure-hunters ('The Gilded Maw') and from the name used by the dungeon's inhabitants ('The Sanctum of Eternal Vigil').", "Epic dungeons deserve epic names — a campaign-ending dungeon should have a name that players feel intimidated by: 'The Heart of the Rotting World,' 'The Last Bastion of the Sunken Age,' 'The Threshold Where Gods Died.'"],
    rpgUsage: "Dungeon names set the tone for entire D&D sessions. 'The Caves of Chaos' versus 'The Crystalline Sanctum of the Psionic Elder-Brain' — the dungeon name alone determines whether players expect hack-and-slash or psychological horror. The most famous D&D dungeons ('Tomb of Horrors,' 'Temple of Elemental Evil') are remembered primarily because their names are unforgettable." },
  "character-name-generator": { name: "Character", emoji: "🧑", context: "Character", race: "", description: "character names for RPGs, fantasy worlds, anime, gaming, and creative writing",
    whoIsThisFor: "RPG players creating characters, fantasy writers naming protagonists and supporting cast, game developers designing NPC rosters, anime fans creating OCs, and anyone who needs distinctive character names for any creative purpose.",
    writingTips: ["Character names should fit the setting — a cyberpunk hacker named 'Kai Nova' works, while 'Sir Reginald of the Meadows' would feel jarring. Match the name's cultural references to your world.", "Protagonist names carry extra weight — the name readers or players will spend the most time with needs to be distinctive, pronounceable, and resonant. Test it by saying it in different emotional contexts (shouted in battle, whispered in grief, announced with pride).", "Consider name meanings as character seeds — a character named 'Mara' (bitter in Hebrew) or 'Beatrice' (bringer of joy) carries etymological weight that can inform their arc.", "Supporting character names should be distinctive but not distracting — every guard, merchant, and quest-giver needs a name that fits the world without competing with main characters for memorability."],
    rpgUsage: "Character names are the most personal creative decision in RPGs. Players spend hours choosing the perfect name for their character because the name carries their identity through months or years of gameplay. A great character name enhances roleplay, while a name that doesn't fit can subtly undermine immersion session after session." },
};

export function getCategoryMetadata(slug: string): Metadata {
  const cat = CATEGORIES[slug];
  if (!cat) return { title: "Not Found" };

  const title = `${cat.name} Names Generator — Free ${cat.name} Name Generator Hub`;
  const description = `Generate unique ${cat.name.toLowerCase()} names for fantasy, gaming, and RPG. Free ${cat.name.toLowerCase()} name generator with meanings, lore, naming guides, FAQ, and 4,500+ related generators.`;
  const keywords = `${cat.name.toLowerCase()} names, ${cat.name.toLowerCase()} name generator, free ${cat.name.toLowerCase()} name generator, fantasy ${cat.name.toLowerCase()} names, RPG ${cat.name.toLowerCase()} names`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${BASE_URL}/${slug}` },
    openGraph: { title, description, type: "website" },
    twitter: { title, description },
  };
}

function getTopGenerators(slug: string) {
  const cat = CATEGORIES[slug];
  let filtered = pages;
  if (cat.context) {
    filtered = pages.filter(p => p.context === cat.context);
  }
  if (cat.race) {
    filtered = pages.filter(p => p.race === cat.race);
  }
  if (filtered.length === 0) return pages.slice(0, 12);
  return filtered.slice(0, 12);
}

function getRelatedPosts(slug: string) {
  const cat = CATEGORIES[slug];
  const name = cat.name.toLowerCase();
  return posts
    .filter(p => 
      p.title.toLowerCase().includes(name) ||
      p.category?.toLowerCase().includes(name) ||
      p.keywords?.toLowerCase().includes(name)
    )
    .slice(0, 4);
}

function getPeopleAlsoSearch(slug: string): string[] {
  const cat = CATEGORIES[slug];
  const n = cat.name.toLowerCase();
  const themes = ["Dark", "Ancient", "Holy", "Fire", "Ice", "Shadow", "Crystal", "Arcane", "Infernal", "Celestial", "Golden", "Storm", "Blood", "Mystic", "Royal"];
  const contexts = ["Kingdom", "Empire", "Clan", "Guild", "Realm", "Dynasty", "Order", "Tribe", "Legion", "Alliance"];
  const races = ["Elf", "Dwarf", "Orc", "Vampire", "Undead", "Phoenix", "Titan", "Giant", "Werewolf", "Dragon"];
  
  const terms = [
    `${n} name generator`,
    `fantasy ${n} names`,
    `cool ${n} names`,
    `unique ${n} names`,
    `best ${n} names for RPG`,
    `D&D ${n} names`,
    `medieval ${n} names`,
    `epic ${n} names`,
    `legendary ${n} names`,
    `dark ${n} names`,
    `ancient ${n} names`,
    `${n} naming guide`,
    `${n} names for worldbuilding`,
    `MMORPG ${n} names`,
    `creative ${n} names`,
    `powerful ${n} names`,
    `mystical ${n} names`,
    `${n} names with meanings`,
    `${n} names generator free`,
    `fantasy world ${n} names`,
  ];
  return terms;
}

const FAQS = [
  { q: "NAME Names Generator?", a: "Our NAME name generator creates unique, fantasy-themed NAME names perfect for worldbuilding, RPG campaigns (D&D, Pathfinder), creative writing, and gaming communities. Each generated name comes with a meaning and can be combined with lore for deeper storytelling." },
  { q: "How many NAME names can I generate?", a: "With 20 themes, 15 races, and 15 contexts, our platform offers over 4,500 unique NAME name generators. Each generator produces 100 unique names with meanings, plus 20 featured names with full paragraph-length lore." },
  { q: "Are these NAME names free to use?", a: "Yes! All NAME names generated on our platform are 100% free for both personal and commercial use. No sign-up, no subscription, no attribution required." },
  { q: "What makes a good NAME name?", a: "A great NAME name should feel authentic to its fantasy setting, reflect the culture and values of the organization, be memorable and pronounceable, and ideally carry a deeper meaning or historical significance." },
  { q: "Can I use these for my D&D campaign?", a: "Absolutely! Our NAME names are designed for tabletop RPGs like Dungeons & Dragons and Pathfinder. Dungeon Masters use our generators to name kingdoms, guilds, factions, and organizations throughout their campaigns." },
  { q: "How are NAME names generated?", a: "Our NAME names are generated through a deterministic, rule-based template system using carefully crafted word pools and theme-specific modifiers. The seeded generation ensures the same URL always produces the same names." },
  { q: "Do you provide meanings for NAME names?", a: "Yes! Every NAME name in our generators includes a unique meaning. Additionally, 20 featured names per generator include full paragraphs of lore covering origin stories, cultural context, and legendary history." },
  { q: "What themes are available for NAME names?", a: "We offer 20 magical themes including Dark, Arcane, Celestial, Infernal, Mystic, Royal, Ancient, Blood, Crystal, Eternal, Fire, Frozen, Golden, Holy, Ice, Savage, Shadow, Storm, and Void — each creating distinct naming styles." },
];

export function CategoryHubContent({ slug }: { slug: string }) {
  const cat = CATEGORIES[slug];
  if (!cat) return null;

  const name = cat.name;
  const nameLower = name.toLowerCase();
  const topGens = getTopGenerators(slug);
  const relatedPosts = getRelatedPosts(slug);
  const peopleAlsoSearch = getPeopleAlsoSearch(slug);

  const faqs = FAQS.map(f => ({
    question: f.q.replace(/NAME/g, name),
    answer: f.a.replace(/NAME/g, name),
  }));

  const collectionSchema = cat.context ? {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${name} Names — Free ${name} Name Generator Hub`,
    "description": `Browse our collection of ${nameLower} name generators. Generate unique ${nameLower} names for fantasy, gaming, and RPG.`,
    "url": `${BASE_URL}/${slug}`,
    "hasPart": topGens.map((p, i) => ({
      "@type": "WebPage",
      "name": p.title,
      "url": `${BASE_URL}/${p.slug}`,
    })),
  } : {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${name} Names — Free ${name} Name Generator Hub`,
    "description": `Browse our collection of ${nameLower} name generators. Generate unique ${nameLower} names for fantasy, gaming, and RPG.`,
    "url": `${BASE_URL}/${slug}`,
    "hasPart": topGens.map((p, i) => ({
      "@type": "WebPage",
      "name": p.title,
      "url": `${BASE_URL}/${p.slug}`,
    })),
  };

  return (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-300">{name} Names</li>
        </ol>
      </nav>

      {/* Hero */}
      <h1 className="mb-4 text-4xl font-extrabold">
        {name} Names Generator — Free {name} Name Generator Hub
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        Welcome to the ultimate {nameLower} names generator hub. Browse our collection
        of {topGens.length}+ {nameLower} name generators, each producing 100 unique names
        with meanings, 20 featured names with lore, naming guides, and FAQs. Whether
        you&apos;re worldbuilding for a fantasy novel, preparing a D&D campaign, or naming
        your gaming clan, our {nameLower} name generators have you covered.
      </p>

      <AdPlaceholder label="Advertisement" />

      {/* What Is */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">What Is a {name} Name Generator?</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            A {nameLower} name generator is a specialized tool that creates unique, fantasy-themed
            names specifically designed for {nameLower}s. Unlike generic random name generators,
            our {nameLower} name generators understand the linguistic patterns, cultural conventions,
            and thematic elements that make {nameLower} names feel authentic and immersive.
          </p>
          <p>
            Our platform hosts the internet&apos;s largest collection of {nameLower} name generators,
            built on a systematic matrix of 20 magical themes, 15 fantasy races, and 15 organization
            types. This means you can generate {nameLower} names with specific thematic flavors —
            from Dark {name} names to Celestial {name} names to Infernal {name} names — ensuring
            you always find the exact aesthetic you need.
          </p>
          <p>
            Each {nameLower} name generator produces <strong className="text-white">100 unique names</strong>{" "}
            with individual meanings, plus <strong className="text-white">20 featured names</strong>{" "}
            with detailed paragraph-length lore. You also get a comprehensive naming guide, an
            introduction article, and a dedicated FAQ section — making each generator a complete
            worldbuilding resource, not just a name list.
          </p>
        </div>
      </section>

      {/* Why Use */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Why Use Our {name} Name Generators?</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            Naming is one of the hardest parts of creative work. A great {nameLower} name sets the
            tone for an entire faction, communicates the essence of a culture, and makes your world
            feel lived-in and authentic. But coming up with dozens of unique, meaningful names that
            all fit a consistent theme can be exhausting.
          </p>
          <p>
            Our generators solve this by combining carefully curated word pools with theme-specific
            modifiers and context-appropriate structures. The results follow the same linguistic
            patterns that real-world cultures use, creating names that sound like they belong
            together — names that could appear in a published fantasy novel or a professional game.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">100 names per generator</strong> — each with a unique meaning</li>
            <li><strong className="text-white">20 featured names with lore</strong> — full paragraphs of backstory</li>
            <li><strong className="text-white">Naming guides and FAQs</strong> — learn the conventions behind the names</li>
            <li><strong className="text-white">100% free</strong> — no sign-up, no subscription, commercial use allowed</li>
            <li><strong className="text-white">Deterministic generation</strong> — bookmark a URL, always get the same names</li>
          </ul>
        </div>
      </section>

            {/* Who Is This For? */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Who Is This {name} Name Generator For?</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>{cat.whoIsThisFor}</p>
        </div>
      </section>

      {/* Creative Writing Tips */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Creative Writing Tips for {name} Names</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <ul className="space-y-3 list-inside list-disc">
            {cat.writingTips.map((tip, i) => (
              <li key={i} className="pl-1">{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* RPG & D&D Usage */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Using {name} Names in RPGs & D&D</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>{cat.rpgUsage}</p>
        </div>
      </section>

      {/* Top Generators */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Top {name} Name Generators</h2>
        <p className="mb-6 text-gray-500">
          Our most popular {nameLower} name generators. Each includes 100 names with meanings,
          20 featured names with lore, and complete naming resources.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topGens.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-3.5 text-sm text-gray-300 transition hover:border-purple-500/40 hover:bg-gray-800 hover:text-white"
            >
              <span className="font-medium">{p.title}</span>
              <p className="mt-1 text-xs text-gray-500">{p.theme} · {p.race} · {p.context}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Naming Guide */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">{name} Naming Guide</h2>
        <div className="space-y-4 leading-relaxed text-gray-400">
          <p>
            Creating effective {nameLower} names requires understanding the conventions that make
            names feel authentic within their fantasy context. Here are the key principles:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Phonetic consistency.</strong> {name} names should follow consistent sound patterns. Hard consonants convey strength, while flowing vowels suggest elegance or mysticism.</li>
            <li><strong className="text-white">Thematic alignment.</strong> The name should reflect the {nameLower}&apos;s core identity. A Dark {name} should have an ominous tone; a Celestial {name} should feel elevated and pure.</li>
            <li><strong className="text-white">Cultural grounding.</strong> Great {nameLower} names hint at the culture behind them — their history, values, and relationship to the world around them.</li>
            <li><strong className="text-white">Memorability.</strong> The best {nameLower} names are easy to remember and pronounce, making them effective in both written and spoken contexts.</li>
            <li><strong className="text-white">Scalability.</strong> Consider how the name works in different forms: the full formal name, shortened versions used by allies, and derogatory forms used by enemies.</li>
          </ul>
        </div>
      </section>

      <AdPlaceholder label="Advertisement" />

      {/* Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Examples of {name} Names</h2>
        <p className="mb-6 text-gray-500">
          Here are examples of {nameLower} names generated by our platform across different themes:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {topGens.slice(0, 6).map((p) => (
            <div key={p.slug} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
              <h3 className="mb-2 font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-gray-400">
                A {p.theme.toLowerCase()} {p.race.toLowerCase()} {p.context.toLowerCase()} name generator
                producing 100 unique names with meanings, 20 featured names with detailed lore,
                and complete naming resources.
              </p>
              <Link href={`/${p.slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                Generate {p.theme} {p.context} Names →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-gray-800 bg-gray-900/50 transition hover:border-gray-700">
              <summary className="cursor-pointer p-5 pr-12 font-medium text-white marker:text-transparent relative">
                <span className="absolute right-5 top-5 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                {faq.question}
              </summary>
              <p className="border-t border-gray-800 px-5 pb-5 pt-4 leading-relaxed text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <AdPlaceholder label="Advertisement" />

      {/* People Also Search */}
      <section className="mb-12 rounded-2xl border border-gray-800 bg-gray-900/30 p-8">
        <h2 className="mb-4 text-2xl font-bold">People Also Search</h2>
        <div className="flex flex-wrap gap-2">
          {peopleAlsoSearch.map((term) => (
            <Link
              key={term}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="rounded-lg border border-gray-700 bg-gray-800/40 px-3 py-1.5 text-xs text-gray-400 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
            >
              {term}
            </Link>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-800 pt-12 mb-12">
          <h2 className="mb-5 text-2xl font-bold">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:border-gray-600 hover:bg-gray-800"
              >
                <span className="mb-2 inline-block rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">
                  {post.category}
                </span>
                <h3 className="text-sm font-semibold text-white">{post.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Schemas */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${name} Names — Free ${name} Name Generator Hub`,
        "description": `Browse our collection of ${nameLower} name generators. Generate unique ${nameLower} names for fantasy, gaming, and RPG.`,
        "url": `${BASE_URL}/${slug}`,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": `${name} Names`, "item": `${BASE_URL}/${slug}` },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question", "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer },
        })),
      }} />
      <JsonLd data={collectionSchema} />
    </article>
  );
}
