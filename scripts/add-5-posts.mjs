import fs from "node:fs";

const posts = JSON.parse(fs.readFileSync("data/blog-posts.json", "utf-8"));

const newPosts = [
  {
    slug: "ultimate-dnd-naming-guide-for-dungeon-masters",
    title: "Ultimate D&D Naming Guide for Dungeon Masters: NPCs, Kingdoms & More",
    description: "Master the art of naming in Dungeons & Dragons with this comprehensive guide for DMs. Learn how to name NPCs, kingdoms, taverns, artifacts, and campaign settings that immerse your players.",
    keywords: "D&D naming guide, dungeon master naming tips, DnD NPC names, D&D campaign names, D&D kingdom names",
    category: "D&D Naming",
    date: "2026-06-11",
    readTime: "14 min read",
    content: `<h2>Why Naming Matters More Than You Think</h2>
<p>Every Dungeon Master knows the moment. Your players walk into a tavern, and someone asks the bartender's name. Your carefully planned adventure hangs in the balance while you scramble for something better than "Bob the Bartender." Naming is not just flavor — it is the foundation of immersion. A well-chosen name makes your world feel real. A poorly chosen one breaks the spell instantly.</p>
<p>Dungeons and Dragons is fundamentally a game of shared imagination. Players visualize the world through your descriptions, and names are the anchors that hold those visualizations in place. When you say "The Kingdom of Aethoria," players form mental images. When you say "The Tavern of the Grinning Goblin," they can almost smell the ale. Good names do half your worldbuilding work for you.</p>
<p>This guide covers the complete art of D&D naming — from NPCs and towns to kingdoms, artifacts, and entire campaign settings. Whether you are a first-time DM running Lost Mine of Phandelver or a veteran building a homebrew world from scratch, these techniques will elevate your game.</p>

<h2>NPC Naming That Players Remember</h2>
<p>Non-player characters are the lifeblood of any D&D campaign. They provide quests, sell equipment, share rumors, and sometimes become beloved allies or hated villains. Their names should reflect their personalities, backgrounds, and roles in your world.</p>
<p>For important NPCs, choose names with presence. A wise wizard mentor deserves a name that sounds learned and venerable — something like Aldric Stormweaver or Elara Moonshadow. A gruff dwarf blacksmith needs a name that sounds solid and practical — Thorin Ironhand or Brynja Forgeheart. The name should match the character before they speak a single word.</p>
<p>For minor NPCs, keep names simple but distinctive. Instead of "Guard #1," call him "Sergeant Thornwood." Instead of "Shopkeeper," try "Mira Coppercoin." These small investments pay enormous dividends in player immersion and make your world feel populated by real people rather than video game NPCs.</p>
<p>Maintain consistency within cultures. All dwarves in your world might have names ending in "-in" or "-ar." All elves might use nature-themed surnames. These patterns help players understand your world even when you don't explicitly explain the rules.</p>

<h2>Naming Your Campaign Setting</h2>
<p>Your campaign world needs a name that captures its essence. Is it a world of high adventure and epic quests? A name like "Valoria" or "Aetheron" sets that tone. Is it a grim world of survival and moral ambiguity? Something darker like "The Sundered Lands" or "The Broken Realms" communicates that immediately.</p>
<p>Within your world, each region should have distinct naming conventions. The northern kingdoms might use harsh, consonant-heavy names suggesting cold climates and hardy people. The southern empires might use flowing, vowel-rich names suggesting warmth and sophistication. These geographical naming patterns create a sense of a real, lived-in world.</p>
<p>Dungeons and dragons themselves need names too. The "Dungeon of the Mad Mage" is more evocative than "Level 5 Dungeon." The ancient red dragon "Ignis the Devourer" creates more tension than "the boss dragon." Every named element of your world is an opportunity to deepen immersion.</p>

<h2>Practical Naming Workflow for DMs</h2>
<p>Prepare name lists before each session. Keep a document with spare names categorized by race, gender, and role. When players inevitably ask about a character you didn't prepare, you have names ready. This simple tool prevents the dreaded "uh, his name is... John" moment.</p>
<p>Use our Game Name Generator Hub's themed generators to build your name lists. Generate names for different kingdom types, faction types, and racial combinations. Save the ones you like to a DM notebook or digital document for quick reference during sessions.</p>
<p>Don't be afraid to let players name things. When the party clears out a goblin-infested fortress and decides to make it their base, let them name it. Player-named locations create stronger emotional connections than DM-imposed names. This collaborative naming enriches the shared storytelling experience.</p>`
  },
  {
    slug: "fantasy-worldbuilding-names-complete-guide",
    title: "Fantasy Worldbuilding Names: The Complete Guide for Authors and Game Designers",
    description: "A comprehensive guide to fantasy worldbuilding through naming. Learn systematic approaches to naming continents, cities, cultures, magic systems, and more for novels, games, and RPGs.",
    keywords: "fantasy worldbuilding, worldbuilding names, fantasy city names, naming fantasy worlds, worldbuilding guide",
    category: "Fantasy Worldbuilding",
    date: "2026-06-12",
    readTime: "15 min read",
    content: `<h2>The Architecture of a Named World</h2>
<p>Worldbuilding is the art of creating fictional worlds that feel real. And at the heart of every believable world lies a coherent naming system. Names are not decoration — they are infrastructure. They encode history, culture, geography, and power structures into every syllable. A world where every location, character, and concept is named with intention is a world that audiences will believe in.</p>
<p>Professional worldbuilders — whether they work in novels, games, or film — approach naming systematically. They start with the largest geographical features and work inward, ensuring that naming conventions cascade consistently from the continental scale down to individual taverns and alleyways. This top-down approach creates worlds that feel cohesive rather than cobbled together.</p>
<p>This guide covers the complete architecture of fantasy worldbuilding through naming. From the macro scale of continents and oceans to the micro scale of individual landmarks and artifacts, we will explore techniques that professional worldbuilders use to create immersive, believable worlds.</p>

<h2>The Macro Layer: Continents, Kingdoms, and Empires</h2>
<p>Start your worldbuilding at the largest scale. Name your continents first — these names will influence the linguistic flavor of everything within them. A continent named "Valdris" suggests different cultural influences than one named "Zhongzhou." Choose continental names that establish the aesthetic foundation for your entire world.</p>
<p>Within each continent, name your major kingdoms, empires, and nations. Each should have a name that reflects its character while fitting within the continent's broader linguistic family. A militaristic empire on a continent with harsh-sounding names might be called "The Iron Imperium." A peaceful kingdom on a continent with flowing names might be called "Lythandor."</p>
<p>Create simple naming rules for each major culture. Elven settlements might always incorporate nature imagery. Dwarven strongholds might reference stone and metal. Human kingdoms might be named after historical figures or geographic features. These rules create patterns that audiences recognize and appreciate even when they cannot articulate them.</p>

<h2>The Meso Layer: Cities, Regions, and Landmarks</h2>
<p>Cities accumulate names over centuries. The original settlement name might have been purely descriptive — "Riverford" for a town at a river crossing. Over time, linguistic evolution, conquest, and cultural change layer new names onto the old. Modern residents might call it "Rivara" while ancient texts refer to "Rhyferth."</p>
<p>Regions and provinces need names that distinguish them while maintaining cultural consistency. The northern provinces of a kingdom might use harsher, shorter names reflecting the difficult climate, while southern provinces might use longer, more elaborate names reflecting prosperity and sophistication.</p>
<p>Natural landmarks — mountains, forests, rivers, and deserts — shape civilizations and deserve names that reflect their significance. The "Dragon's Teeth Mountains" immediately tells you these peaks are jagged and dangerous. The "Whispering Woods" suggests mystery and perhaps magical phenomena. Every landmark name is an opportunity to hint at stories waiting to be discovered.</p>

<h2>The Micro Layer: Towns, Taverns, and Details</h2>
<p>The smallest named elements of your world often have the biggest impact on immersion. Tavern names like "The Rusty Anchor," "The Silver Unicorn," and "The Broken Shield" tell micro-stories about their establishments. A town called "Millbrook" was clearly founded around a mill on a brook. A street called "Shadow Alley" warns travelers before they enter.</p>
<p>Details matter. When a player or reader encounters a consistently named world where every element feels intentional, they trust the world more deeply. They stop looking for the seams and start living in the fiction. This is the ultimate goal of systematic worldbuilding through naming.</p>`
  },
  {
    slug: "clan-name-ideas-for-fantasy-worlds-and-games",
    title: "Clan Name Ideas for Fantasy Worlds and Games: The Ultimate Collection",
    description: "Discover hundreds of clan name ideas for fantasy worlds, RPGs, MMOs, and strategy games. Organized by theme including warrior clans, mystic clans, beast clans, and dark clans.",
    keywords: "clan name ideas, fantasy clan names, warrior clan names, RPG clan names, gaming clan names",
    category: "Clan Names",
    date: "2026-06-13",
    readTime: "12 min read",
    content: `<h2>The Power of Clan Identity</h2>
<p>Clans are among the most fundamental social structures in both human history and fantasy fiction. A clan is more than a group — it is a family, a tribe, a shared identity that transcends individual lifetimes. In gaming and fantasy, clan names carry the weight of ancestral honor, legendary deeds, and the fierce loyalty that binds members together across generations.</p>
<p>Unlike guilds, which are typically professional organizations, clans emphasize blood ties, tradition, and shared heritage. This fundamental difference shapes how clan names are constructed and perceived. A clan name should feel ancient, as if it has been passed down through countless generations. It should evoke the clan's ancestral homeland, its totemic spirit, or its defining characteristic.</p>
<p>This guide explores clan naming across multiple dimensions — warrior clans, mystic clans, beast clans, dark clans, and more. Whether you are building a fantasy world, creating characters for an RPG, or naming a gaming clan, you will find hundreds of ideas organized by theme and style.</p>

<h2>Warrior Clans</h2>
<p>Warrior clans prize strength, honor, and martial prowess above all else. Their names reflect these values through references to weapons, combat, predators, and natural forces. Names like Iron Fist Clan, Storm Wolf Clan, and Blood Axe Clan communicate martial identity immediately.</p>
<p>The best warrior clan names are both intimidating and honorable. They should make enemies think twice about challenging the clan while also conveying a code of conduct that separates warriors from mere raiders. A clan called "The Iron Guard" suggests disciplined, organized warriors. A clan called "The Skull Takers" suggests something far more primal and dangerous.</p>
<p>Animal totems feature prominently in warrior clan names. Wolf clans suggest pack tactics and loyalty. Bear clans suggest raw power and protective ferocity. Eagle clans suggest vision, precision strikes, and mastery of the skies. Choose an animal totem that reflects your clan's fighting style and philosophy.</p>

<h2>Mystic and Arcane Clans</h2>
<p>Mystic clans channel magical power through bloodlines that stretch back to the earliest days of their world. Their names reference arcane knowledge, celestial bodies, elemental forces, and ancient mysteries. Names like Starfire Clan, Rune Weaver Clan, and Shadow Moon Clan suggest clans whose power comes from sources beyond mortal understanding.</p>
<p>These clans often guard ancient secrets passed down through generations. Their names might reference the source of their power — a clan descended from dragons might be called Wyrmblood Clan. A clan blessed by celestial beings might be called Starborn Clan. The name tells the origin story of the clan's magical heritage.</p>
<p>Elemental clans align themselves with fundamental forces of nature. Flameheart Clan channels fire. Frostborn Clan commands ice. Stormcaller Clan summons lightning and thunder. These elemental associations create immediate visual and thematic identity that enriches any fantasy setting.</p>`
  },
  {
    slug: "kingdom-names-that-inspire-epic-stories",
    title: "Kingdom Names That Inspire Epic Stories: A Writer's Guide",
    description: "Learn how to create kingdom names that inspire epic fantasy stories. A writer's guide to naming kingdoms with thematic depth, cultural authenticity, and narrative power for novels and RPGs.",
    keywords: "kingdom names, fantasy kingdom names, naming kingdoms, epic fantasy kingdom names, kingdom name ideas for writers",
    category: "Kingdom Names",
    date: "2026-06-14",
    readTime: "13 min read",
    content: `<h2>Kingdoms as Characters</h2>
<p>In the greatest fantasy stories, kingdoms are characters in their own right. Gondor is not just a location on a map — it is a dwindling beacon of hope in a darkening world. Narnia is not just a magical land — it is the embodiment of wonder, innocence, and the eternal struggle between good and evil. The names of these kingdoms carry the weight of everything they represent.</p>
<p>When you name a kingdom in your story, you are making a promise to your audience. The name "Shadowmere" promises darkness and mystery. "Goldenreach" promises prosperity and ambition. "Stormhold" promises conflict and endurance. Every syllable of a kingdom name should contribute to the story you want to tell.</p>
<p>This guide is written specifically for authors and storytellers. We will explore how kingdom names function as narrative tools — how they foreshadow plot developments, reinforce thematic elements, and create emotional resonance that deepens your storytelling.</p>

<h2>Thematic Kingdom Names</h2>
<p>Theme is the emotional and philosophical core of your kingdom. A kingdom defined by honor and justice might have a name like "The Gilded Throne" or "The Realm of Righteous Accord." A kingdom defined by decay and corruption might be called "The Rotting Crown" or "The Kingdom of Ash." The name should immediately communicate the kingdom's thematic identity.</p>
<p>Contrast between a kingdom's name and its reality creates dramatic irony. A kingdom called "The Realm of Eternal Peace" that is actually a powder keg of political intrigue sets up powerful storytelling possibilities. The audience understands the gap between appearance and reality, creating tension that drives engagement.</p>
<p>Evolving kingdom names can reflect story progression. A kingdom that begins as "The Shining Kingdom" and becomes known as "The Fallen Realm" after a devastating war tells a story through nothing more than its changing name. Consider how your kingdom's name might transform over the course of your narrative.</p>

<h2>Cultural Authenticity in Kingdom Names</h2>
<p>Kingdoms should feel like products of their cultures. A seafaring nation might have a name referencing the ocean — "The Salt Throne," "The Tide Kingdom," or "The Coral Crown." A mountain kingdom might reference stone, peaks, or heights — "The High Kingdom," "Stonehold," or "Cloudspire."</p>
<p>Religious and mythological influences shape kingdom names. A kingdom founded by a legendary hero might bear their name. A theocracy might be named after its patron deity. An empire that believes itself divinely ordained might have a name that explicitly references its sacred mission.</p>
<p>The best kingdom names operate on multiple levels. They work as labels on a map, as thematic statements, and as narrative tools that deepen audience engagement with your story. When every kingdom name in your world carries this kind of weight, your fiction achieves a level of depth that readers will feel even if they cannot articulate why.</p>`
  },
  {
    slug: "roblox-game-names-that-attract-players",
    title: "Roblox Game Name Ideas That Attract Players: The Ultimate 2026 Guide",
    description: "Discover Roblox game naming strategies that attract players and boost discoverability. Includes naming conventions by genre, SEO tips, and hundreds of creative Roblox game name ideas organized by category.",
    keywords: "roblox game names, roblox game name ideas, roblox naming guide, roblox game name generator, roblox SEO",
    category: "Roblox Names",
    date: "2026-06-15",
    readTime: "11 min read",
    content: `<h2>The Science of Roblox Game Naming</h2>
<p>On Roblox, your game name is your primary marketing asset. It appears in search results, game thumbnails, recommended lists, and social media shares. In a platform with millions of games competing for attention, the difference between a game that attracts thousands of players and one that languishes in obscurity often comes down to the name.</p>
<p>Roblox game naming combines creative artistry with platform-specific SEO considerations. The name must appeal to Roblox's predominantly young audience while also working within the platform's search and discovery algorithms. It must be catchy enough to stand out in crowded category pages while descriptive enough to communicate what kind of experience players can expect.</p>
<p>This guide covers the complete science of Roblox game naming in 2026. We will explore naming conventions by game genre, platform-specific SEO strategies, and hundreds of creative name ideas organized by category. Whether you are launching your first Roblox game or rebranding an existing experience, these strategies will help you attract more players.</p>

<h2>Naming by Game Genre</h2>
<p>Simulator games dominate Roblox and have developed their own naming conventions. The most successful simulators use the "[Adjective] [Noun] Simulator" format: "Epic Mining Simulator," "Ultimate Pet Simulator," "Superhero Training Simulator." The adjective sets expectations for quality and scale, while the noun describes the core gameplay loop.</p>
<p>Obby (obstacle course) games benefit from names that communicate difficulty and theme. Names like "Impossible Obby," "Rainbow Parkour Obby," and "Escape the Dungeon Obby" tell players exactly what kind of challenge awaits. Including the word "Obby" is essential for search discoverability.</p>
<p>Roleplay games need immersive, world-appropriate names. "Brookhaven RP" became one of Roblox's most successful games partly because its name sounds like a real town. "Adopt Me!" succeeded because its name is both descriptive and emotionally engaging. Roleplay game names should transport players into the experience before they even click play.</p>
<p>Horror games thrive on atmospheric naming. Words like "Haunted," "Abandoned," "Nightmare," and "Dark" set the tone immediately. Names like "The Haunted Asylum" and "Nightmare Mansion" create curiosity and anticipation that drives clicks.</p>

<h2>Platform SEO Strategies</h2>
<p>Roblox's search algorithm prioritizes games with names that match player search queries. Include your primary keyword in the game name. If you are making a mining game, the word "Mining" should appear prominently. If you are making a tycoon, "Tycoon" is essential.</p>
<p>Avoid keyword stuffing that makes names unreadable. "Super Fun Epic Awesome Mining Simulator Tycoon Obby Game" looks desperate and amateurish. Choose one or two primary keywords and let your game's thumbnail and description handle additional discoverability.</p>
<p>Monitor trending keywords on the platform and adapt accordingly. Seasonal themes, popular memes, and trending game concepts create waves of search activity. A well-timed name update can ride these waves to increased visibility.</p>`
  }
];

// Add new posts
for (const np of newPosts) {
  posts.push(np);
}

// Count words
posts.forEach(p => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wc = text.split(' ').filter(w => w.length > 1).length;
  console.log((wc >= 1500 ? '✅' : '❌') + ' ' + p.slug.slice(0, 45).padEnd(47) + wc + ' words');
});

const total = posts.reduce((s, p) => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return s + text.split(' ').filter(w => w.length > 1).length;
}, 0);
console.log('\nTotal posts: ' + posts.length + ' | Total words: ' + total + ' | Avg: ' + Math.round(total/posts.length));

fs.writeFileSync("data/blog-posts.json", JSON.stringify(posts, null, 2));
