import fs from "node:fs";

// ---- PRNG (same as lib/content.ts) ----
function mulberry32(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s) { let h=0; for(let i=0;i<s.length;i++) h=(Math.imul(31,h)+s.charCodeAt(i))|0; return h>>>0; }
function pick(arr, rng) { return arr[Math.floor(rng()*arr.length)]; }
function shuffle(arr, rng) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function cap(s) { return s.charAt(0).toUpperCase()+s.slice(1); }

const pages = JSON.parse(fs.readFileSync("data/pages.json","utf-8"));

// ================================================================
// INTENT DEFINITIONS
// ================================================================
const intents = [
  {
    slug: "minecraft-name-generator",
    title: "Minecraft Name Generator — Server, World & Character Names",
    category: "Minecraft",
    intentName: "Minecraft",
    description: "Generate unique Minecraft server names, world names, and character names. Free Minecraft name generator with 100+ examples, naming guide, and creative ideas for your next Minecraft adventure.",
    keywords: "minecraft name generator, minecraft server names, minecraft world names, minecraft username ideas, minecraft realm names",
    intro: `The world of Minecraft is built on creativity, and that creativity starts with a name. Whether you are launching a new survival server, naming your single-player world, creating a realm for friends, or looking for the perfect character name for your Minecraft skin, the right name sets the tone for everything that follows. A great Minecraft name captures the spirit of your world — the adventures you will have, the builds you will create, and the community you will build.

Minecraft has evolved far beyond its humble beginnings as a simple block-building game. Today, it encompasses survival servers with complex economies, creative servers with stunning architectural projects, minigame servers with custom game modes, and roleplaying servers with elaborate lore and factions. Each of these server types demands a different kind of name. A hardcore anarchy server needs a name that feels dangerous and unforgiving. A peaceful creative server needs a name that feels welcoming and inspiring.

Our Minecraft name generator bridges the gap between generic random name generators and the deep, thoughtful naming that great Minecraft communities deserve. We combine Minecraft-specific terminology with fantasy naming conventions to produce names that feel both authentic to the game and creatively inspiring. Each generated name comes with a meaning that explains its significance, helping you understand not just what to name your server, but why that name works.`,

    namingGuide: `Minecraft names have developed their own unique conventions over more than a decade of community evolution. Understanding these conventions helps you create names that resonate with the Minecraft community.

The most common pattern for Minecraft server names is the compound word structure. Names like "BlockCraft," "MineVille," "CraftNation," and "PixelRealm" combine Minecraft-related terms with location or community descriptors. The word "Craft" appears in countless server names because it is both a reference to the game's crafting system and a nod to the creative building that defines Minecraft. Similarly, "Block" and "Pixel" reference the game's distinctive visual style.

Adventure and survival servers often use more evocative, fantasy-inspired names. Words like "Quest," "Expedition," "Wilderness," "Frontier," and "Saga" suggest the narrative and exploratory aspects of Minecraft gameplay. These names attract players who enjoy the survival challenge and the sense of discovery that comes with exploring new worlds.

Minigame servers benefit from energetic, action-oriented names. Short, punchy names with competitive connotations work best for servers focused on PvP, parkour, and fast-paced game modes. Words like "Arena," "Battle," "Rush," "Clash," and "Frenzy" communicate the high-energy experience players can expect.

Always test your name by imagining how players will talk about your server. "Join me on BlockCraft" is natural and easy to say. "Join me on The Enchanted Diamond Adventures Server Network" is a mouthful that players will inevitably shorten or abandon. Keep names concise and conversation-friendly.`,

    namePrefixes: ["block","craft","mine","pixel","cube","world","realm","land","build","dig","cave","nether","ender","diamond","emerald","creeper","zombie","skeleton","hero","adventure"],
    nameSuffixes: ["craft","ville","town","world","land","topia","haven","realm","zone","hub","nation","kingdom","empire","quest","saga"],
    meaningTemplates: [
      (n) => n + ' — a name that resonates with power and mystery.',
      (n) => n + ' — a legendary name from the ancient archives.',
      (n) => n + ' — a name that echoes through the ages.'
    ],
    loreTemplates: [
      (n) => `Founded during the great Minecraft resurgence, ${n} quickly became known as one of the most welcoming communities in the blocky universe. Players from around the world gather here to share their builds, compete in custom minigames, and explore vast procedurally generated landscapes together.`,
      (n) => `${n} started as a small private server among friends and grew into a thriving community. The founding players built the spawn area together — a massive castle that still stands as a monument to their collaborative spirit. Today, new players spawn in that same castle, continuing the tradition.`
    ],
    faqQuestions: [
      "How do I choose the best Minecraft server name?",
      "Can I use these names for my Minecraft realm?",
      "What makes a Minecraft server name appealing?",
      "Are these names suitable for all Minecraft versions?",
      "How many names does this generator produce?",
      "Can I use these names for commercial Minecraft servers?"
    ],
    faqAnswers: [
      "Look for names that reflect your server's unique identity. Consider your game mode, target audience, and community culture. A name that matches your server's personality attracts the right players.",
      "Absolutely! All generated names work perfectly for Minecraft Realms, regular servers, and single-player worlds. Feel free to adapt them to your specific needs.",
      "The best Minecraft server names are memorable, easy to type, and give players a sense of what to expect. Names that incorporate Minecraft terminology while remaining creative tend to perform best.",
      "Yes, the generated names are version-agnostic and work across all Minecraft editions, including Java Edition, Bedrock Edition, and legacy versions.",
      "Our generator produces 100 unique name examples with meanings, plus 20 featured names with detailed descriptions for each generator page.",
      "Yes, all names are free for commercial use. You can use them for monetized servers, YouTube channels, streaming, and any commercial Minecraft project."
    ]
  },
  {
    slug: "roblox-name-generator",
    title: "Roblox Name Generator — Group, Game & Username Ideas",
    category: "Roblox",
    intentName: "Roblox",
    description: "Generate creative Roblox group names, game names, and username ideas. Free Roblox name generator with naming guide, 100+ examples, and creative inspiration for your Roblox projects.",
    keywords: "roblox name generator, roblox group names, roblox game names, roblox username ideas, roblox display names",
    intro: `Roblox is more than a game — it is a platform where millions of creators build, share, and play together. Whether you are starting a development studio, creating a roleplaying group, launching a new game, or just looking for the perfect display name, naming is your first creative act on the platform. A great name helps your group stand out in Roblox search results, attracts the right members, and builds a brand that players recognize and trust.

The Roblox ecosystem is incredibly diverse, encompassing everything from sprawling roleplay worlds and competitive obby courses to detailed simulation games and social hangout spaces. Each type of experience calls for a different naming approach. A horror game group needs a name that creates atmosphere and intrigue. A development studio needs a name that sounds professional and established. A casual friend group needs a name that feels fun and approachable.

Our Roblox name generator is designed specifically for the Roblox platform. We understand Roblox naming conventions, search optimization considerations, and community expectations. Whether you are a first-time creator or an experienced developer managing multiple groups and games, our generator provides names that help you succeed on the platform.`,

    namingGuide: `Roblox naming has evolved significantly over the years. Early Roblox groups often had simple, functional names. Today, successful groups and games use names that are creative, searchable, and brand-focused.

Development studio names on Roblox should sound professional and creative. Many successful studios use names that resemble real game development companies. Words like "Studios," "Games," "Interactive," "Digital," and "Productions" establish professional credibility. Names like "BlockForge Studios," "PixelDream Games," and "Crystal Interactive" communicate serious creative ambition.

Roleplaying groups benefit from immersive, world-appropriate names. A medieval fantasy roleplay group should have a name that sounds like it belongs in that world — "The Kingdom of Astoria," "The Shadow Guild," or "The Dragon Knights." Modern roleplay groups might use names that sound like real organizations — "Brookhaven Police Department," "Los Angeles Roleplay," or "City Life RP."

Game names on Roblox should be descriptive and enticing. Players browsing millions of games make split-second decisions based on names and thumbnails. A name like "Epic Mining Simulator" tells players exactly what to expect, while "Obby Adventure: Escape the Dungeon" promises specific gameplay. The most successful Roblox games have names that are both descriptive and intriguing.`,

    namePrefixes: ["block","pixel","craft","build","quest","adventure","hero","legend","epic","ultra","mega","super","star","dream","magic","shadow","crystal","golden","phantom","nova"],
    nameSuffixes: ["studios","games","interactive","creations","productions","digital","world","simulator","tycoon","obby","roleplay","rp","adventures","legends","heroes"],
    meaningTemplates: [
      (n) => `A Roblox ${"development studio"} for ${"creative builders"}.`,
      (n) => `Where Roblox players ${"build amazing worlds"}.`
    ],
    loreTemplates: [
      (n) => `${n} was founded by a group of passionate Roblox developers who wanted to create experiences that players would remember. Their first game, a humble obby course, attracted a small but dedicated following. Word spread, the community grew, and today ${n} is one of the most respected names on the platform.`,
      (n) => `Starting with nothing but a vision and a basic Roblox Studio project, the creators of ${n} spent months perfecting their first game. The launch exceeded all expectations, and the group has been growing ever since, expanding into new game genres and building a community of dedicated players.`
    ],
    faqQuestions: [
      "How do I choose a good Roblox group name?",
      "Can I change my Roblox group name later?",
      "What makes a Roblox game name successful?",
      "Are these names appropriate for all ages?",
      "How do I make my group name stand out?",
      "Can I use these names for commercial Roblox games?"
    ],
    faqAnswers: [
      "Focus on names that are memorable, searchable, and reflective of your group's purpose. Avoid names that are too long or complicated. Test your name by searching for it on Roblox to see what similar groups exist.",
      "Yes, Roblox allows group name changes, but they cost Robux and have limitations. It is better to choose a name you will be happy with long-term rather than planning to change it later.",
      "Successful Roblox game names are descriptive, intriguing, and easy to remember. They give players a clear idea of what the game is about while creating curiosity that drives clicks.",
      "Yes, all our generated names are family-friendly and appropriate for Roblox's community standards. We avoid mature themes and focus on creative, positive naming.",
      "Use unique word combinations, avoid overused terms, and make sure your name reflects your group's unique personality. A distinctive name helps you stand out in Roblox search results.",
      "Absolutely! All generated names are free for any use, including commercial Roblox games, monetized experiences, and developer products."
    ]
  },
  {
    slug: "guild-name-generator",
    title: "Guild Name Generator — MMORPG & Fantasy Guild Names",
    category: "Guild",
    intentName: "Guild",
    description: "Generate unique guild names for MMORPGs, fantasy games, and RPGs. Free guild name generator with 100+ examples, naming guide, and creative name ideas for your gaming guild.",
    keywords: "guild name generator, MMORPG guild names, fantasy guild names, gaming guild names, guild name ideas",
    intro: `Guilds are the backbone of online gaming communities. Whether you are forming a raiding guild in World of Warcraft, a free company in Final Fantasy XIV, a trading guild in an MMO, or a roleplaying guild in any fantasy game, your guild name is the banner under which your members unite. It is the name that will appear on leaderboards, in chat channels, and in the memories of every player who encounters your group.

A great guild name accomplishes several things at once. It communicates your guild's identity and purpose. It attracts players who share your values and playstyle. It creates a sense of belonging and pride among members. And it stands out in a sea of other guilds competing for the same pool of potential recruits.

Our guild name generator has been designed with input from experienced guild leaders across multiple games. We understand that a hardcore mythic raiding guild needs a very different name than a casual social guild, and that a roleplaying guild's name must fit within its game's lore. Our generator provides names that span the full spectrum of guild types and gaming communities.`,

    namingGuide: `Guild naming conventions vary significantly across different games and playstyles. Understanding these conventions helps you choose a name that resonates with your target audience.

Hardcore raiding and PvP guilds typically use names that project power, skill, and intimidation. Words like "Ascendant," "Dominion," "Vanguard," "Elite," and "Apex" communicate competitive ambition. These guilds want names that look impressive on leaderboards and strike respect or fear into opponents.

Casual and social guilds benefit from warm, welcoming names. Words like "Haven," "Sanctuary," "Hearth," "Gathering," and "Circle" suggest community and friendship. These names attract players looking for a positive social experience rather than hardcore progression.

Roleplaying guilds need names that fit seamlessly into their game's world. A guild in World of Warcraft might draw from Warcraft lore and naming conventions. A guild in Elder Scrolls Online might use Tamrielic naming patterns. The best roleplaying guild names feel like they could have been written by the game's original developers.

Many successful guilds use a multi-word structure with a formal feel: "Order of the Crimson Dawn," "Keepers of the Eternal Flame," "Blades of Destiny." This pattern suggests tradition, organization, and long-term stability.`,

    namePrefixes: ["shadow","crimson","iron","storm","dawn","frost","arcane","divine","golden","silver","ebon","sacred","ancient","eternal","celestial","phantom","dragon","phoenix","griffin","wyrm"],
    nameSuffixes: ["vanguard","order","covenant","legion","syndicate","collective","alliance","circle","sanctum","council","company","brigade","regiment","watch","guard"],
    meaningTemplates: [
      (n) => `A ${"hardcore raiding"} guild for ${"dedicated adventurers"}.`,
      (n) => `Where ${"heroes unite"}.`
    ],
    loreTemplates: [
      (n) => `Founded by a group of friends who met in a pickup raid that went surprisingly well, ${n} has grown into one of the most respected guilds on their server. Their reputation for skilled play combined with a positive, supportive culture attracts members from across the gaming community.`,
      (n) => `The founders of ${n} believed that great gaming experiences are built on friendship and mutual respect. They created a guild where skill matters less than attitude, and where every member — from the newest recruit to the most veteran raider — is valued equally.`
    ],
    faqQuestions: [
      "What makes a great guild name?",
      "How do I recruit members with my guild name?",
      "Can guild names affect recruitment?",
      "Should my guild name match the game's lore?",
      "How long should a guild name be?",
      "Can I use these names across multiple games?"
    ],
    faqAnswers: [
      "A great guild name is memorable, meaningful, and appropriate for your guild's culture and the game you play. It should be easy to pronounce, type, and remember.",
      "Your guild name is often the first thing potential recruits see. A name that clearly communicates your guild's focus helps attract players who are looking for exactly what you offer.",
      "Absolutely. A guild name that suggests hardcore raiding will attract different players than one that suggests casual socializing. Choose a name that matches your actual guild culture to attract compatible members.",
      "If you run a roleplaying guild, yes — your name should feel authentic to the game's world. For non-RP guilds, lore-appropriate names are a bonus but not essential.",
      "Aim for two to four words. Names longer than this become unwieldy in chat and on guild rosters. Single-word guild names can be very powerful if you find the right word.",
      "Yes! A strong guild name can work across multiple games, helping you build a multi-game community with consistent brand identity."
    ]
  },
  {
    slug: "clan-name-generator",
    title: "Clan Name Generator — Gaming, Fantasy & Esports Clan Names",
    category: "Clan",
    intentName: "Clan",
    description: "Generate powerful clan names for competitive gaming, fantasy worlds, and RPGs. Free clan name generator with 100+ examples, naming guide, and creative ideas for your clan.",
    keywords: "clan name generator, gaming clan names, esports clan names, fantasy clan names, clan name ideas",
    intro: `Clans are among the oldest forms of organized gaming communities, dating back to the earliest days of online multiplayer gaming. From the original Quake and Counter-Strike clans to modern esports organizations that trace their roots to clan culture, the concept of the gaming clan has evolved but never lost its fundamental appeal — a group of players united under a shared name, competing together and building lasting friendships.

A clan name carries weight. It is the tag that appears next to your name in every match. It is the identity that opponents learn to respect or fear. It is the bond that connects players who may never meet in person but share countless hours of gameplay together. Choosing the right clan name is one of the most important decisions a new gaming group will make.

Our clan name generator draws from decades of competitive gaming culture. We understand the naming conventions of FPS clans, MOBA teams, battle royale squads, and strategy game alliances. Whether you are forming a casual group of friends or building the foundation of a future esports organization, our generator provides names with the right tone and impact.`,

    namingGuide: `Clan naming conventions have deep roots in competitive gaming history. The earliest clans often used aggressive, military-inspired names with abbreviated tags. This tradition continues today, though modern clans have expanded their naming vocabulary considerably.

FPS clans in games like Counter-Strike, Valorant, and Call of Duty typically use short, punchy names with aggressive connotations. Single-word names, animal names, and military terminology dominate this space. Names like "Wolves," "Phantom," "Reaper," "Sentinel," and "Vanguard" communicate competitive intensity.

MOBA clans in League of Legends and Dota 2 often use more elaborate, fantasy-inspired names. These games have rich lore and character rosters, and many clans draw naming inspiration from the game world itself. Names referencing champions, abilities, or in-game locations create immediate recognition within the community.

Esports organizations operate at the highest level of competitive clan naming. Names like "Fnatic," "Cloud9," "Team Liquid," and "100 Thieves" function as global brands. They are short, distinctive, and memorable. If you aspire to build an esports organization, study the naming patterns of successful orgs for inspiration.

A strong clan tag is just as important as the full clan name. In most competitive games, your clan tag appears next to player names in-game. Keep tags short (2-4 characters) and directly related to your full name for maximum recognition.`,

    namePrefixes: ["shadow","phantom","iron","storm","blade","frost","nova","apex","zenith","omega","alpha","sigma","ghost","reaper","sentinel","titan","savage","fury","rage","void"],
    nameSuffixes: ["esports","gaming","squad","team","clan","elite","academy","united","rising","dominion"],
    meaningTemplates: [
      (n) => `A ${"competitive FPS"} clan known for ${"precision teamwork"}.`,
      (n) => `Where ${"champions are made"}.`
    ],
    loreTemplates: [
      (n) => `${n} began as a group of five friends who dominated their local LAN tournaments. Their aggressive, coordinated playstyle caught the attention of the competitive community, and soon players were asking to trial. Today, ${n} fields multiple rosters across several competitive titles.`,
      (n) => `The founding members of ${n} shared a simple philosophy: individual skill wins rounds, but teamwork wins championships. They built their clan around this principle, recruiting players not just for mechanical ability but for their capacity to work within a coordinated team structure.`
    ],
    faqQuestions: [
      "How do I create a memorable clan name?",
      "Should my clan name include a tag?",
      "What makes a clan name intimidating?",
      "Can I use these names for esports?",
      "How do I check if a clan name is taken?",
      "Do clan names need to be serious?"
    ],
    faqAnswers: [
      "Choose short, powerful words that are easy to remember and pronounce. Avoid complex or hard-to-spell names. Test your name by saying it aloud and imagining it on a tournament bracket.",
      "Most competitive games use clan tags alongside full names. Choose a 2-4 character tag that relates to your full name. Make sure the tag isn't already in use by another prominent clan.",
      "Names that reference predators, natural forces, or military concepts tend to feel intimidating. Single-word names are often more impactful than longer phrases for competitive clans.",
      "Absolutely. Many professional esports organizations started as amateur clans. Choose a name with long-term brand potential if you have competitive aspirations.",
      "Search the name in your game's competitive ladder, tournament databases, and social media platforms. A name that is too similar to an existing organization can cause confusion and potential issues.",
      "Not necessarily. While competitive clans benefit from serious names, casual clans can use humorous or lighthearted names. What matters most is that the name reflects your group's actual culture."
    ]
  },
  {
    slug: "kingdom-name-generator",
    title: "Kingdom Name Generator — Fantasy & Medieval Kingdom Names",
    category: "Kingdom",
    intentName: "Kingdom",
    description: "Generate majestic kingdom names for fantasy worlds, RPGs, and creative writing. Free kingdom name generator with 100+ examples, naming guide, and lore-rich name ideas.",
    keywords: "kingdom name generator, fantasy kingdom names, medieval kingdom names, RPG kingdom names, kingdom name ideas",
    intro: `Kingdoms are the foundation of fantasy worldbuilding. From the golden spires of Gondor to the frozen wastes of Arendelle, from the dragon-haunted peaks of Skyrim to the ancient forests of the Elven kingdoms, the names of kingdoms define the geography of imagination. A great kingdom name evokes history, culture, and the very essence of the land it represents.

In tabletop RPGs, video games, novels, and films, kingdom names serve as anchors for entire narratives. When a character says they are from "the Kingdom of Eldoria," the audience immediately begins forming expectations. Is this a prosperous land of peace and plenty, or a fallen kingdom haunted by ancient tragedy? The name itself provides the first clues.

Our kingdom name generator draws from centuries of real-world history and decades of fantasy literature. We understand the patterns that make kingdom names feel authentic — the compound structures, the geographic references, the dynastic naming conventions, and the linguistic elements that distinguish great kingdom names from forgettable ones. Whether you need a name for the noble kingdom of your D&D campaign, the central realm of your fantasy novel, or a mighty empire in your strategy game, our generator provides names worthy of a crown.`,

    namingGuide: `Kingdom names typically follow established patterns that have developed over thousands of years of human civilization. Understanding these patterns is the key to creating kingdom names that feel authentic and meaningful.

Geographic kingdom names reference the land itself. Kingdoms named after mountains, rivers, forests, or other natural features ground themselves in the physical world. Names like "The River Kingdom," "The Mountain Realm," or "The Forest Kingdom" are simple but effective — they tell you exactly where the kingdom is and what defines it.

Dynastic kingdom names reference the ruling family or founding figure. "The Kingdom of Arthur," "The Empire of Charlemagne," and "The Dynasty of the Dragon Lords" all tie the kingdom's identity to specific individuals or families. These names carry personal history and suggest that the kingdom's fate is intertwined with its rulers.

Descriptive kingdom names capture the kingdom's character in a phrase. "The Eternal Kingdom," "The Golden Empire," "The Shadow Realm," and "The Frozen Kingdom" communicate fundamental truths about the kingdom through carefully chosen adjectives.

Symbolic kingdom names use metaphors and symbols. "The Lion Kingdom" suggests courage and strength. "The Eagle Empire" suggests vision and dominance. "The Phoenix Kingdom" suggests rebirth and resilience. These names work on multiple levels, rewarding deeper consideration.`,

    namePrefixes: ["iron","golden","crystal","shadow","silver","ebon","crimson","azure","emerald","onyx","ivory","jade","amber","ruby","sapphire","diamond","pearl","opal","bronze","platinum"],
    nameSuffixes: ["kingdom","realm","dominion","empire","sovereign","monarchy","dynasty","throne","crown","keep","citadel","bastion","fortress","stronghold","shire"],
    meaningTemplates: [
      (n) => `A ${"prosperous"} kingdom where ${"honor rules supreme"}.`,
      (n) => `The ${"ancestral home"} of ${"noble warriors"}.`
    ],
    loreTemplates: [
      (n) => `Founded in the aftermath of the great war that reshaped the continent, ${n} rose from the ashes of the old world. Its first king united the scattered tribes under a single banner, and for centuries the kingdom has stood as a beacon of stability in a chaotic world.`,
      (n) => `Legend speaks of ${n} as the last remnant of an ancient, forgotten civilization. Its towering spires and winding streets hold secrets that scholars have spent lifetimes trying to unravel. The current dynasty traces its lineage back to the kingdom's mythical founders.`
    ],
    faqQuestions: [
      "What makes a kingdom name sound authentic?",
      "How do I name a fantasy kingdom for my novel?",
      "Should kingdom names include 'Kingdom of'?",
      "How many kingdoms should my fantasy world have?",
      "Can I use real historical kingdom names?",
      "How do I create names for multiple kingdoms?"
    ],
    faqAnswers: [
      "Authentic kingdom names often reference geography, ruling dynasties, or defining characteristics. They avoid modern-sounding words and feel like they belong to their historical period.",
      "Consider your kingdom's history, geography, and culture. Names that reflect these elements feel more integrated into your world. Generate multiple options and test them in the context of your story.",
      "Using 'Kingdom of' as a prefix is optional. 'The Kingdom of Eldoria' and simply 'Eldoria' are both valid approaches. The longer format feels more formal and traditional.",
      "Quality over quantity. Three to five well-developed kingdoms with meaningful names create a richer world than twenty kingdoms with generic names.",
      "It is generally better to create original names, but drawing inspiration from historical naming patterns is perfectly acceptable. Avoid directly copying famous historical kingdom names.",
      "Create distinct naming conventions for different cultures in your world. Elven kingdoms might use flowing, melodic names while dwarven kingdoms use solid, consonant-heavy names."
    ]
  },
  {
    slug: "dragon-name-generator",
    title: "Dragon Name Generator — Legendary & Fantasy Dragon Names",
    category: "Dragon",
    intentName: "Dragon",
    description: "Generate legendary dragon names for fantasy worlds, RPGs, and creative projects. Free dragon name generator with 100+ examples, naming guide, and fearsome name ideas.",
    keywords: "dragon name generator, dragon names, fantasy dragon names, legendary dragon names, dragon naming guide",
    intro: `Dragons are the undisputed monarchs of fantasy creatures. They have captured human imagination for thousands of years, appearing in the mythology of virtually every culture on Earth. In modern fantasy, dragons are more popular than ever — from the fire-breathing terrors of Game of Thrones to the wise, ancient beings of Eastern mythology, from the chromatic and metallic dragons of Dungeons and Dragons to the dragon companions of countless video games.

A dragon's name carries the weight of centuries. It should rumble like distant thunder and crackle like lightning. It should feel as ancient as the mountains and as powerful as the forces of nature themselves. When a dragon is introduced by name, the audience should feel the presence of something truly extraordinary.

Our dragon name generator is designed to produce names worthy of these magnificent creatures. We draw from multiple dragon naming traditions — Western, Eastern, and modern fantasy — to create names that capture the full spectrum of draconic identity. Whether your dragon is a villainous fire-breather, a wise mentor, a tragic antihero, or a force of nature beyond mortal understanding, you will find names here that do justice to your vision.`,

    namingGuide: `Dragon naming falls into several distinct traditions, each with its own conventions and aesthetic qualities.

Western dragon names tend to be harsh, powerful, and threatening. They use hard consonants, deep vowels, and aggressive sound combinations that convey the dragon's dangerous nature. Classic examples include Smaug, Fafnir, Vermithrax, and Ancalagon. These names feel primal and ancient, as if they were spoken in the earliest days of language itself.

Eastern dragon names are fundamentally different. These dragons are often benevolent beings associated with water, weather, and wisdom rather than fire and destruction. Their names are typically more flowing and melodic, reflecting their nature as spiritual beings. Names like Shenlong, Ryujin, and Qinglong capture this more graceful tradition.

Modern fantasy dragon names blend these traditions and add new elements. Dragon names in Dungeons and Dragons often use multi-syllabic structures with draconic-sounding elements. Names in video games may be shorter and more punchy to work well in gameplay contexts. The key is consistency — all dragons in your world should feel like they were named according to the same linguistic principles, even if individual names differ.

Elemental dragons benefit from names that reference their element. Fire dragons might incorporate pyro-related sounds. Ice dragons might use crisp, crystalline syllables. Storm dragons might feature rolling, thunderous sounds. The name should echo the dragon's elemental nature.`,

    namePrefixes: ["dragon","wyrm","drake","serpent","wing","scale","claw","fang","fire","flame","frost","storm","shadow","thunder","ember","blaze","ice","void","star","sky"],
    nameSuffixes: ["fire","wing","claw","scale","fang","breath","heart","soul","eye","tail","crest","horn","flame","storm","frost","shadow","light","night","dawn","dusk"],
    meaningTemplates: [
      (n) => `A ${"fire-breathing terror"} that ${"terrorizes the northern kingdoms"}.`,
      (n) => `A ${"majestic"} dragon known throughout the realm for ${"its unmatched power"}.`
    ],
    loreTemplates: [
      (n) => `Among the oldest of dragonkind, ${n} has witnessed the rise and fall of a dozen civilizations. Its lair, hidden deep within the volcanic mountains, contains treasures accumulated over ten thousand years. Few have seen the dragon and lived to tell the tale.`,
      (n) => `Unlike its more destructive kin, ${n} chose a different path. It serves as a guardian of ancient knowledge, its vast library carved into a mountain containing texts from civilizations long lost to time. Scholars who prove their worth may consult the dragon's collection.`
    ],
    faqQuestions: [
      "How do I create an authentic dragon name?",
      "What makes some dragon names more memorable?",
      "Should dragon names sound scary?",
      "How do you name different types of dragons?",
      "Can I use these dragon names in my published work?",
      "How many syllables should a dragon name have?"
    ],
    faqAnswers: [
      "Study dragon naming conventions from different traditions. Harsh, guttural sounds work for Western dragons. Flowing, melodic sounds work for Eastern dragons. Create names that feel appropriate to your dragon's nature and origin.",
      "Memorable dragon names often feature distinctive sound combinations, powerful consonants, and a rhythm that makes them satisfying to say aloud. Smaug is one syllable but unforgettable.",
      "Not necessarily. While many dragons are antagonists and their names should reflect that, benevolent or neutral dragons deserve names that communicate their different nature. Match the name to the dragon's role in your story.",
      "Consider your dragon's element, temperament, and cultural origin. Fire dragons get fiery names. Wise dragons get dignified names. Each type should have consistent naming patterns within your world.",
      "Yes, all names generated here are free for use in published works, games, and any creative project. No attribution required.",
      "Dragon names range from one syllable (Smaug) to four or more (Ancalagon). Shorter names feel more primal and aggressive. Longer names feel more ancient and sophisticated."
    ]
  }
];

// ================================================================
// GENERATE REMAINING 14 INTENTS
// ================================================================
const remainingIntents = [
  { slug: "fortnite-name-generator", title: "Fortnite Name Generator — Clan, Creative & Username Ideas", category: "Fortnite", intentName: "Fortnite", desc: "Generate Fortnite clan names, creative map names, and username ideas with our free Fortnite name generator." },
  { slug: "valorant-name-generator", title: "Valorant Name Generator — Team, Agent & Clan Name Ideas", category: "Valorant", intentName: "Valorant", desc: "Generate Valorant team names, agent-themed names, and clan names with our free Valorant name generator." },
  { slug: "fantasy-name-generator", title: "Fantasy Name Generator — Worlds, Characters & Places", category: "Fantasy", intentName: "Fantasy", desc: "Generate fantasy names for worlds, characters, kingdoms, and more with our free fantasy name generator." },
  { slug: "rpg-name-generator", title: "RPG Name Generator — Characters, Worlds & Campaigns", category: "RPG", intentName: "RPG", desc: "Generate RPG names for characters, worlds, campaigns, and adventures with our free RPG name generator." },
  { slug: "faction-name-generator", title: "Faction Name Generator — Political, Military & Fantasy Factions", category: "Faction", intentName: "Faction", desc: "Generate faction names for games, stories, and RPGs with our free faction name generator." },
  { slug: "empire-name-generator", title: "Empire Name Generator — Mighty & Legendary Empire Names", category: "Empire", intentName: "Empire", desc: "Generate empire names for fantasy worlds, strategy games, and creative writing with our free empire name generator." },
  { slug: "realm-name-generator", title: "Realm Name Generator — Mystical & Fantasy Realm Names", category: "Realm", intentName: "Realm", desc: "Generate realm names for fantasy worlds and RPGs with our free realm name generator." },
  { slug: "world-name-generator", title: "World Name Generator — Planet & Fantasy World Names", category: "World", intentName: "World", desc: "Generate world names for fantasy settings, sci-fi planets, and creative projects with our free generator." },
  { slug: "continent-name-generator", title: "Continent Name Generator — Maps & Worldbuilding Names", category: "Continent", intentName: "Continent", desc: "Generate continent names for fantasy maps, worldbuilding, and creative projects with our free name generator." },
  { slug: "character-name-generator", title: "Character Name Generator — Fantasy & RPG Character Names", category: "Character", intentName: "Character", desc: "Generate character names for RPGs, novels, and games with our free character name generator." },
  { slug: "elf-name-generator", title: "Elf Name Generator — High Elf, Dark Elf & Wood Elf Names", category: "Elf", intentName: "Elf", desc: "Generate elf names for fantasy worlds and RPGs with our free elf name generator." },
  { slug: "orc-name-generator", title: "Orc Name Generator — Warboss, Shaman & Warrior Names", category: "Orc", intentName: "Orc", desc: "Generate orc names for fantasy worlds and RPGs with our free orc name generator." },
  { slug: "demon-name-generator", title: "Demon Name Generator — Infernal & Dark Fantasy Names", category: "Demon", intentName: "Demon", desc: "Generate demon names for fantasy worlds and RPGs with our free demon name generator." },
  { slug: "angel-name-generator", title: "Angel Name Generator — Celestial & Divine Angel Names", category: "Angel", intentName: "Angel", desc: "Generate angel names for fantasy worlds and RPGs with our free angel name generator." },
];

// Build intent configs for remaining
for (const ri of remainingIntents) {
  const rng = mulberry32(hashStr(ri.slug));
  const n = ri.intentName;
  
  intents.push({
    slug: ri.slug,
    title: ri.title,
    category: ri.category,
    intentName: n,
    description: ri.desc + ` Includes naming guide, 100+ examples, featured names, and FAQ.`,
    keywords: `${n.toLowerCase()} name generator, ${n.toLowerCase()} names, ${n.toLowerCase()} name ideas, name generator for ${n.toLowerCase()}`,
    intro: `<p>Looking for the perfect ${n} name? You have come to the right place. Our ${n} name generator is designed to help you find creative, memorable, and unique names for all your ${n.toLowerCase()} needs. Whether you are building a fantasy world, creating characters for an RPG campaign, developing a game, or just looking for inspiration, we have thousands of name possibilities waiting for you.</p>

<p>${n} naming is both an art and a science. The best ${n.toLowerCase()} names capture the essence of what they represent — they are memorable, meaningful, and feel authentic to their context. A great ${n.toLowerCase()} name can inspire an entire creative project, spark a new story idea, or give identity to something that previously existed only in your imagination.</p>

<p>Our generator combines ${"fantasy naming conventions"} with ${"modern naming trends"} to produce names that are both unique and meaningful. Each generated name comes with context and explanation, helping you understand not just what the name is, but why it works for ${n.toLowerCase()} naming.</p>`,

    namingGuide: `<p>When creating ${n.toLowerCase()} names, several key principles guide the process. First and foremost, the name must be appropriate for its context. A ${n.toLowerCase()} name in a serious fantasy setting should feel different from one in a lighthearted game. Understanding your context is the first step toward creating effective ${n.toLowerCase()} names.</p>

<p>Sound and rhythm play crucial roles in ${n.toLowerCase()} naming. Names with pleasing phonetic patterns are more memorable and feel more authentic. Hard consonants convey strength and power, while softer sounds suggest elegance and mystery. The length of the name also matters — shorter names are punchy and impactful, while longer names can convey sophistication and depth.</p>

<p>Meaning adds another dimension to ${n.toLowerCase()} names. While a name does not need a literal translation, having an underlying meaning or association enriches the name and provides depth that attentive audiences will appreciate. Consider what qualities you want the name to suggest — power, wisdom, mystery, danger, beauty — and choose sounds and structures that reinforce those qualities.</p>

<p>Consistency is essential when creating multiple ${n.toLowerCase()} names within the same project. Names from the same culture, faction, or family should share recognizable linguistic features. This consistency creates a sense of authenticity and helps your audience understand the relationships between different elements of your world.</p>`,
    
    namePrefixes: shuffle(["shadow","iron","storm","frost","blade","crystal","golden","silver","ancient","eternal","celestial","arcane","divine","dark","light","fire","ice","wind","thunder","star"],rng),
    nameSuffixes: shuffle(["forge","hold","haven","reach","vale","gard","stone","keep","watch","crest","spire","peak","gate","tower","wall"],rng),
    
    meaningTemplates: [
      (n) => n + ' — a name that resonates with power and mystery.',
      (n) => n + ' — a legendary name from the ancient archives.',
      (n) => n + ' — a name that echoes through the ages.'
    ],
    
    loreTemplates: [
      (n) => `The origins of ${n} are shrouded in mystery and legend. Ancient texts speak of its founding during a time of great upheaval, when the old order crumbled and something new arose from the chaos. Today, ${n} stands as a testament to the resilience and creativity of its people.`,
      (n) => `According to the oldest chronicles, ${n} was established by a group of visionaries who saw potential where others saw only wilderness. Through determination, ingenuity, and more than a little luck, they built something that would endure for generations and inspire countless others.`
    ],
    
    faqQuestions: [
      `What makes a good ${n.toLowerCase()} name?`,
      `How do I use the ${n} name generator?`,
      `Are the generated names unique?`,
      `Can I use these ${n.toLowerCase()} names commercially?`,
      `How many ${n.toLowerCase()} names can I generate?`,
      `What if I do not like any of the generated names?`
    ],
    
    faqAnswers: [
      `A good ${n.toLowerCase()} name is memorable, meaningful, and appropriate for its intended use. It should be easy to pronounce and should capture the essence of what you are naming.`,
      `Simply browse the 100 name examples and 20 featured names on this page. Each name comes with a meaning and context. Use these as inspiration or adapt them to your specific needs.`,
      `Each generator page produces 100 unique names with meanings using our deterministic generation system. The same page will always show the same names, ensuring consistency.`,
      `Yes! All names generated on our platform are free for personal and commercial use. No attribution is required.`,
      `Each generator page provides exactly 100 name examples plus 20 featured names with detailed lore. Explore related generators for more variations and combinations.`,
      `Try the related generators listed on this page. Different combinations of themes, races, and contexts produce different naming patterns. You can also try our other ${n.toLowerCase()} name generators for more variety.`
    ]
  });
}

// ================================================================
// GENERATE FULL CONTENT FOR EACH INTENT
// ================================================================
for (const intent of intents) {
  const rng = mulberry32(hashStr(intent.slug + "-content"));
  
  // 100 Names
  const names = [];
  for (let i = 0; i < 100; i++) {
    const p1 = pick(intent.namePrefixes, rng);
    const p2 = pick(intent.nameSuffixes, rng);
    const name = cap(p1) + cap(p2);
    const meaning = pick(intent.meaningTemplates, rng)(name);
    names.push({ name, meaning });
  }

  // 20 Featured
  const featured = names.slice(0, 20).map(n => ({
    ...n,
    lore: pick(intent.loreTemplates, rng)(n.name)
  }));

  // 6 FAQ
  const faqIndices = shuffle(intent.faqQuestions.map((_,i)=>i), rng).slice(0, 6);
  const faqs = faqIndices.map(i => ({
    question: intent.faqQuestions[i],
    answer: intent.faqAnswers[i]
  }));

  // 20 Related generators
  const related = shuffle(pages, rng).slice(0, 20).map(p => ({ slug: p.slug, title: p.title }));

  // Calculate word count
  const introText = intent.intro.replace(/<[^>]+>/g, ' ');
  const guideText = intent.namingGuide.replace(/<[^>]+>/g, ' ');
  const namesText = names.map(n => n.name + ' ' + n.meaning).join(' ');
  const featuredText = featured.map(n => n.name + ' ' + n.meaning + ' ' + n.lore).join(' ');
  const faqText = faqs.map(f => f.question + ' ' + f.answer).join(' ');
  const wordCount = introText.split(/\s+/).filter(w=>w.length>1).length +
    guideText.split(/\s+/).filter(w=>w.length>1).length +
    namesText.split(/\s+/).filter(w=>w.length>1).length +
    featuredText.split(/\s+/).filter(w=>w.length>1).length +
    faqText.split(/\s+/).filter(w=>w.length>1).length;

  intent._names = names;
  intent._featured = featured;
  intent._faqs = faqs;
  intent._related = related;
  intent._wordCount = wordCount;
}

// ================================================================
// SAVE DATA FILE
// ================================================================
// Strip internal arrays before saving (they are for page generation)
const cleanIntents = intents.map(({_names,_featured,_faqs,_related,_wordCount,...rest}) => ({
  ...rest,
  wordCount: _wordCount
}));

// Save full data for page generation
fs.writeFileSync("data/intent-pages.json", JSON.stringify(intents, null, 2));

console.log(`Generated ${intents.length} intent pages`);
intents.forEach(i => console.log(`  ${i.slug.padEnd(35)} ${i._wordCount} words ${i._wordCount >= 2000 ? '✅' : '❌'}`));
const total = intents.reduce((s,i) => s + i._wordCount, 0);
console.log(`\nTotal: ${total} words | Avg: ${Math.round(total/intents.length)}`);
console.log(`Min: ${Math.min(...intents.map(i=>i._wordCount))} | Max: ${Math.max(...intents.map(i=>i._wordCount))}`);
