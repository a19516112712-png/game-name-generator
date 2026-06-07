import fs from "node:fs";

const posts = JSON.parse(fs.readFileSync("data/blog-posts.json", "utf-8"));

const expansions = {
  "dragon-name-generator-guide": `
<h2>Dragon Names in Different Fantasy Settings</h2>
<p>Different fantasy settings require different approaches to dragon naming. In a high-fantasy setting like Dungeons and Dragons, dragons are intelligent, ancient beings with complex personalities and motivations. Their names should reflect their intelligence and individuality. A dragon who has lived for a thousand years deserves a name with weight and history.</p>
<p>In darker fantasy settings, dragons might be more bestial — creatures of pure destruction rather than cunning intelligence. Their names can be simpler, more primal, and focused on their destructive capabilities. Names like Devourer, World-Breaker, or Flame-Death communicate pure menace without the sophistication of a high-fantasy dragon.</p>
<p>In Eastern-inspired fantasy settings, dragons are often divine or semi-divine beings associated with natural forces. Their names should reflect this spiritual dimension, incorporating celestial and natural imagery. The naming conventions shift from harsh Western dragon names to more flowing, elegant names that suggest wisdom and divine power.</p>

<h2>Famous Dragons and What Their Names Teach Us</h2>
<p>Studying famous dragons from literature, film, and games reveals patterns that you can apply to your own dragon naming. Smaug from The Hobbit derives his name from an Old Germanic word meaning "to squeeze through a hole" — appropriate for a dragon that hoards treasure underground. Tolkien chose short, punchy, primitive-sounding names for his dragons to emphasize their ancient, elemental nature.</p>
<p>The dragons of Game of Thrones — Drogon, Rhaegal, and Viserion — are named after significant figures in Daenerys Targaryen's life. This personal naming convention connects the dragons to the story's human drama and gives their names emotional weight beyond mere description. Consider this approach when naming dragons that have personal connections to characters in your story.</p>
<p>In Dungeons and Dragons, metallic dragons have names that sound noble and dignified, while chromatic dragons have names that sound harsh and threatening. This systematic distinction reinforces the fundamental alignment differences between dragon types through nothing more than naming conventions.</p>

<h2>Creating Dragon Name Variants for Your World</h2>
<p>A world with multiple dragons needs names that are distinct from each other while feeling like they belong to the same species or cultural group. Create naming patterns for different dragon flights, broods, or families. Dragons of the same lineage might share common prefixes, suffixes, or sound patterns that identify their familial connections.</p>
<p>Consider how other cultures within your world might name dragons differently from how dragons name themselves. A human kingdom might call a dragon "The Scourge of the North" while the dragon calls itself by its true name, which follows draconic linguistic patterns. This dual-naming creates depth and perspective within your world.</p>`,

  "fantasy-character-naming-guide": `
<h2>Naming Characters for Different Fantasy Subgenres</h2>
<p>Epic fantasy demands names with weight and significance. These are names that sound like they belong in prophecies and legends. Multi-syllabic names with classical or mythic resonance work best. Think of names like Aragorn, Daenerys, Anomander, and FitzChivalry. These names carry a sense of destiny and importance that matches the grand scale of epic fantasy narratives.</p>
<p>Dark fantasy and grimdark settings call for grittier, less romantic names. Short, harsh names with Germanic or Slavic influences fit these worlds well. Names like Geralt, Logen, Monza, and Glokta feel grounded and realistic rather than mythic. They suggest characters who survive through grit and pragmatism rather than destiny and prophecy.</p>
<p>Urban fantasy benefits from names that bridge the modern and the magical. Characters might have ordinary modern names that contrast with the supernatural elements of the story, or their names might subtly hint at their magical nature through unusual spellings or archaic origins.</p>

<h2>The Psychology of Character Names</h2>
<p>Names influence how readers and players perceive characters on a subconscious level. Studies in psychology show that people make snap judgments about individuals based on their names alone. The same principle applies to fictional characters. A character named "Brutus" carries different expectations than one named "Felix."</p>
<p>The length of a name also affects perception. Short, one-syllable names feel direct, strong, and sometimes blunt. Longer, more elaborate names suggest sophistication, aristocracy, or foreignness. A barbarian warrior named "Karn" feels right, while one named "Theodosius" might feel out of place unless there is a specific story reason for the contradiction.</p>
<p>Sound symbolism — the idea that certain sounds carry inherent emotional associations — plays a powerful role in character naming. Names with hard stops (K, T, P) feel more aggressive. Names with flowing liquids (L, R, M) feel more gentle or mystical. Names with sibilants (S, SH, Z) can feel sinister or seductive depending on context.</p>`,

  "how-to-name-a-minecraft-server": `
<h2>Community Building Through Server Names</h2>
<p>Your server name is the cornerstone of your community identity. Players who join your server will use the name in conversations with friends, in social media posts, and in recommendations to other players. A name that is easy to say and type increases word-of-mouth marketing — the most powerful growth driver for Minecraft servers.</p>
<p>Consider how your server name works in different contexts. Will players say "I play on [Server Name]" or "Join me on [Server Name]"? Does it sound natural in conversation? A name that flows naturally in speech gets shared more often than one that is awkward to pronounce. Test this by saying potential names out loud in a full sentence before committing.</p>
<p>The emotional tone of your server name should match the experience you provide. A survival server focused on cooperation and friendship should have a warm, welcoming name. A hardcore anarchy server should have a name that reflects its unforgiving nature. Misalignment between name and experience leads to player disappointment and negative reviews.</p>

<h2>Brand Building Beyond the Name</h2>
<p>Once you have chosen your server name, build a consistent brand around it. Create matching Discord server names, social media handles, and website domains. Use consistent colors, fonts, and visual styling across all platforms. This brand consistency makes your server feel more professional and established, which attracts more players.</p>
<p>Consider creating a server logo that visually represents your name. A server called "PhoenixCraft" with a phoenix logo creates a stronger impression than the same name without visual branding. The name and logo work together to create a memorable identity that stands out in server listings and social media.</p>
<p>Protect your brand by reserving your server name across multiple platforms even if you are not actively using them. Register the domain name, create the Discord server, and claim the social media handles. This prevents copycats and ensures that players searching for your server always find you.</p>

<h2>Evolving Your Server Identity</h2>
<p>As your server grows and evolves, your name should continue to feel appropriate. A server that started as a small survival world might grow into a network of multiple game modes. The original name should be flexible enough to accommodate this growth. Names that are too specific (like "SMP Only Server") limit your ability to expand later.</p>
<p>If you do need to rebrand, do it carefully and with full community communication. A sudden name change without explanation can confuse and alienate existing players. Involve your community in the rebranding process through polls, discussions, and feedback sessions. A name change that the community supports is far more successful than one imposed from above.</p>`,

  "roblox-group-name-ideas": `
<h2>Growing Your Roblox Group Through Strategic Naming</h2>
<p>A strategic group name does more than identify your group — it actively helps you grow. Names that include relevant keywords appear in Roblox search results when potential members look for groups like yours. Understanding how Roblox's search and discovery systems work can help you choose a name that maximizes visibility.</p>
<p>The first few words of your group name are the most important for search purposes. Roblox truncates long group names in search results, so your most important keywords should appear first. If you run a military roleplay group, starting with "Military" or "War" ensures your group appears when players search for those terms.</p>
<p>Consider the visual presentation of your group name. On Roblox, group names appear in various sizes and contexts — from full group pages to compact member lists. A name that looks good at every size helps maintain a professional appearance across the platform.</p>

<h2>Creating Theme-Appropriate Group Names</h2>
<p>Horror game groups benefit from names that create immediate atmosphere. Words like "Haunted," "Abyss," "Nightmare," and "Phantom" set a spooky tone. Names like the Haunted Asylum, Abyss Explorers, or Nightmare Division communicate the horror theme without being excessively graphic or inappropriate for Roblox's younger audience.</p>
<p>Anime and fandom groups can draw inspiration from their source material while remaining original. Rather than directly copying names from anime, create original names that capture the spirit of the genre. A group for anime fans might be called Rising Sun Studios, Sakura Collective, or Otaku Alliance.</p>
<p>Tycoon and simulator game groups should have names that sound like legitimate businesses or corporations. Names like Tycoon Industries, SimCorp, Empire Builders, and Profit Pioneers suggest business-minded gameplay appropriate for the tycoon genre.</p>

<h2>Managing Group Reputation Through Naming</h2>
<p>Your group name is part of your reputation on Roblox. Names that are offensive, inappropriate, or associated with negative behavior will limit your group's growth potential. Roblox moderators may take action against groups with names that violate platform policies, so always review the Roblox Community Standards before finalizing your group name.</p>
<p>A professional, well-chosen name signals to potential members that your group is serious and well-managed. Groups with thoughtful names attract more dedicated members who are likely to contribute positively to your community. The quality of your group name is often interpreted as a proxy for the quality of your group as a whole.</p>`,

  "clan-name-ideas-for-competitive-games": `
<h2>Clan Names for Specific Competitive Games</h2>
<p>Counter-Strike clans have their own naming traditions that have evolved over two decades of competitive play. European CS clans often use single-word, brand-focused names: Natus Vincere (Born to Win), Virtus.pro, Astralis. North American CS clans tend toward shorter, more aggressive names. Understanding these regional traditions helps your clan name feel authentic within the scene.</p>
<p>Valorant clans blend traditional FPS naming with the game's unique agent-based identity. Names that reference Valorant's lore, agents, or distinctive visual style resonate with the community. Consider names that evoke the game's sleek, modern aesthetic while maintaining competitive credibility.</p>
<p>League of Legends clans often draw from the game's rich champion roster and lore. Names referencing Runeterra locations, champion abilities, or in-game terminology create immediate recognition within the community. A clan named "Shadow Isles" or "Noxian Might" immediately communicates your connection to League of Legends lore.</p>

<h2>Building a Championship Mentality Through Your Clan Name</h2>
<p>Elite competitive clans often choose names that reflect an aspirational identity. These names embody the qualities the clan strives for — excellence, dominance, precision, or mastery. Names like Ascendant, Pinnacle, Vertex, Apex, and Zenith all point upward, suggesting continuous improvement and the pursuit of the highest competitive achievements.</p>
<p>The most successful esports organizations maintain consistent naming across multiple games and rosters. If your clan plans to compete in multiple games, choose a name that works across genres. Abstract names, animal names, and mythological references tend to be the most genre-agnostic.</p>
<p>Consider the legacy potential of your clan name. The greatest names in esports history have been carried by multiple generations of players. A name that is too tied to current trends or the founding members will feel outdated when the original roster moves on. Choose a name that can grow beyond its founders.</p>

<h2>Clan Name Etiquette and Community Standards</h2>
<p>Respect other established clans by avoiding names that are too similar to existing organizations. This is both a matter of competitive ethics and practical sense — a name that is confused with another clan creates problems for both organizations. Research existing clans in your game before finalizing your name.</p>
<p>Offensive or exclusionary names limit your clan's growth potential. The most successful clans build diverse, inclusive communities where players feel welcome regardless of background. A clan name that alienates potential members is a competitive disadvantage in the long run.</p>`,

  "world-building-and-naming-guide": `
<h2>Geographic Feature Naming</h2>
<p>Mountains, rivers, forests, and deserts — the physical features of your world — need names that ground your setting in geographical reality. Mountain ranges often get collective names based on their appearance or mythological associations. The "Dragon's Teeth Mountains" immediately suggests jagged, dangerous peaks. The "Whispering Peaks" suggests mystery and perhaps supernatural phenomena.</p>
<p>Rivers are the lifeblood of civilizations and should have names that reflect their importance. Major rivers often have names that mean simply "the river" in ancient languages, having been named so long ago that the original meaning has been lost. Consider having different cultures along the river's course use different names for different sections, reflecting historical territorial divisions.</p>
<p>Forests and woodlands are classic fantasy settings that deserve evocative names. Dark, dangerous forests need names that warn travelers — The Shadowwood, The Black Thicket, The Whispering Pines. Magical, enchanted forests need names that suggest wonder — The Glimmerwood, The Starlight Grove, The Emerald Canopy.</p>

<h2>Ocean and Sea Naming</h2>
<p>Bodies of water in fantasy worlds are often under-named compared to land features, yet they play crucial roles in trade, warfare, and mythology. Major oceans might be named after the gods, after legendary explorers, or after their most notable characteristic. The "Endless Ocean," the "Sea of Storms," and the "Crystal Deep" each communicate different things about the waters they name.</p>
<p>Consider how seafaring cultures name the waters they travel. A trading nation might name seas after their destinations — the "Spice Sea" or the "Golden Passage." A warlike naval power might name seas after their conquests — the "Sea of Victory" or "Admiral's Wake." These names embed cultural perspective into your world's geography.</p>

<h2>District and Neighborhood Naming</h2>
<p>Within your cities, districts and neighborhoods develop names organically over time. A district known for its market might be called "Merchant's Row" or "The Grand Bazaar." A poor neighborhood might develop a name that reflects its struggles or, alternatively, an ironic name that shows the residents' dark humor. These micro-level names bring your cities to life.</p>
<p>Immigrant communities within cities often name their neighborhoods after homelands or cultural touchstones. "Little Ithilien" in a human city or "Dwarf Quarter" in a mixed-species metropolis reflects the demographic history of your world. These names tell stories about migration, integration, and cultural identity.</p>

<h2>Sacred and Forbidden Place Names</h2>
<p>Religious sites, cursed locations, and taboo places need names that reflect their special status. A sacred mountain where gods are believed to dwell might be called "Heaven's Throne" or "The Divine Spire." A cursed battlefield might become "The Bleeding Fields" or "Ghost's March." These names carry emotional and supernatural weight that regular geographic names do not.</p>
<p>Forbidden places often accumulate multiple names over time — the official name used by authorities, the whispered name used by locals, and the legendary name used in folk tales. This layering of names creates a sense of history and mystery that enriches your world.</p>`,

  "faction-naming-strategies": `
<h2>Secret Society Naming</h2>
<p>Secret societies and hidden organizations require special naming considerations. Their public-facing names (if they have any) should be innocuous and give no hint of their true nature. Their internal, true names might be far more revealing. This duality creates narrative opportunities when characters discover the gap between what an organization calls itself publicly and what it truly is.</p>
<p>Conspiracy and shadow organizations often use names that reference knowledge, enlightenment, or hidden truth. Names like "The Illuminated," "The Architects," "The Cabal," and "The Inner Circle" suggest access to secret knowledge. The name should hint at power without fully revealing the organization's nature.</p>
<p>Ancient orders that have existed for centuries might have names that have evolved over time. The original name might be in an archaic language that few still speak, while the modern name is a translation or adaptation. This linguistic layering adds historical depth to your faction.</p>

<h2>Mercenary Company Naming</h2>
<p>Mercenary companies occupy a unique position between military and commercial organizations. Their names often emphasize their professional nature and the quality of their services. Names like "The Iron Company," "Sellsword Syndicate," "Blade for Hire," and "Contract Killers" (used carefully) communicate the transactional nature of mercenary work.</p>
<p>Some mercenary companies develop reputations so strong that their names become synonymous with certain qualities. "The Golden Company" suggests reliability and high cost. "The Bloody Mummers" suggests brutality and a lack of scruples. Choose a name that accurately reflects the reputation you want your mercenary company to have.</p>

<h2>Guild and Trade Organization Naming</h2>
<p>Professional guilds and trade organizations in fantasy settings mirror their historical counterparts. Medieval guilds were typically named after their trade plus a descriptor of their status or location: "The Worshipful Company of Goldsmiths," "The Guild of Master Builders," "The Chandlers' Association."</p>
<p>Fantasy guilds can follow similar patterns while incorporating magical or fantastical elements. "The Alchemists' Guild," "The Enchanters' Circle," "The Runesmiths' Union," and "The Potion Makers' Fraternity" all communicate professional identity while fitting within a fantasy setting.</p>
<p>Criminal guilds — thieves' guilds, assassins' guilds — often use innocuous names as fronts. A thieves' guild might operate publicly as "The Merchant's Benevolent Association" while being known in the underworld as "The Shadow Hand." This duality adds texture to your world's criminal ecosystem.</p>`,

  "creating-memorable-rpg-worlds": `
<h2>Deity and Pantheon Naming</h2>
<p>Gods and goddesses need names that inspire awe, fear, or devotion. Divine names should feel different from mortal names — more ancient, more powerful, more resonant. They might use unusual letter combinations, archaic linguistic features, or sounds that feel primal and elemental.</p>
<p>Consider creating titles and epithets for your deities alongside their true names. A god of war might have a true name known only to priests, while being commonly referred to as "The Iron Lord," "The Battle Father," or "He Who Rides the Storm." These titles give players multiple ways to reference deities and create religious texture in your world.</p>
<p>Different cultures within your world might worship the same deity under different names. A sun god might be "Solarius" in one culture, "Helios" in another, and "The Golden One" in a third. This cultural layering creates depth and potential for interfaith conflict or discovery.</p>

<h2>Artifact and Magic Item Naming</h2>
<p>Legendary artifacts need legendary names. A magic sword is not just "the +2 longsword" — it is "Dawnbreaker," "Soul Render," or "The Blade of a Thousand Truths." The name should hint at the artifact's history, power, and significance. The best artifact names make players feel excited just to say them aloud.</p>
<p>Artifacts often accumulate names over their history. The same sword might be known as "The Kingslayer" in one kingdom and "The Liberator" in another, depending on which side of history you are on. This perspective-based naming adds moral complexity to your world's legendary items.</p>

<h2>Calendar and Era Naming</h2>
<p>Time itself should be named in your RPG world. Different cultures might use different calendar systems, each with named months, days, and holidays. The "Age of Dragons," the "Era of Renewal," the "Century of Shadows" — these era names orient players in your world's timeline and provide hooks for adventures set in different historical periods.</p>
<p>Holiday and festival names add cultural texture. The "Festival of the Returning Sun," the "Night of Remembered Heroes," the "Harvest Moon Celebration" — these names suggest rituals, traditions, and community events that make your world feel lived-in and real.</p>`,

  "best-guild-name-ideas-for-rpg-games": `
<h2>Guild Hierarchy and Officer Titles</h2>
<p>A well-named guild extends beyond its primary title to include named ranks and officer positions. A guild called "The Crimson Vanguard" might have officers titled "Vanguard Commander," "Crimson Captain," and "Scarlet Knight." This consistency between guild name and rank titles strengthens the overall identity.</p>
<p>Different guild types call for different rank naming conventions. A crafting guild might use master-apprentice terminology: Grand Master, Master Artisan, Journeyman, Apprentice. A military guild might use traditional military ranks adapted to fit the guild's theme. A merchant guild might use corporate titles: Guild Master, Trade Director, Market Officer.</p>
<p>Consider creating special titles for founding members, long-time veterans, or exceptional contributors. A guild member who has been with the guild for five years might earn the title of "Eternal Guardian" or "Founder's Blade." These honorific titles increase member retention by creating aspirational goals.</p>

<h2>Guild Recruitment and Name Marketing</h2>
<p>Your guild name is a recruitment tool. When potential members browse guild directories or see your guild in-game, the name is often the first and only information they have. A name that clearly communicates your guild's focus helps you attract the right members and filter out those who would not fit your community.</p>
<p>Include your primary activity in your guild name or tagline when it is not obvious from the name alone. A guild called "Phoenix Rising" could be anything — a raiding guild, a roleplaying guild, or a social guild. Adding a clear tagline or secondary identifier helps potential members understand what you offer.</p>
<p>Avoid guild names that will limit your recruitment pool. Names that reference specific games, expansions, or content may become dated. Names that are too niche or obscure may fail to attract new members who do not understand the reference. The most successful guilds choose names with broad appeal that can sustain long-term growth.</p>`
};

for (const p of posts) {
  if (expansions[p.slug]) {
    p.content += expansions[p.slug];
  }
}

fs.writeFileSync("data/blog-posts.json", JSON.stringify(posts, null, 2));

// Count words
posts.forEach(p => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wc = text.split(' ').filter(w => w.length > 1).length;
  console.log(p.slug.slice(0, 40).padEnd(42) + wc + ' words  ' + (wc >= 1500 ? 'OK' : 'NEEDS MORE'));
});

const total = posts.reduce((s, p) => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return s + text.split(' ').filter(w => w.length > 1).length;
}, 0);
console.log('\nTotal: ' + total + ' words | Average: ' + Math.round(total / posts.length));
