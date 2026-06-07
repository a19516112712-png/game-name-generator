import fs from "node:fs";

const posts = JSON.parse(fs.readFileSync("data/blog-posts.json", "utf-8"));

const expansions = {
  "ultimate-dnd-naming-guide-for-dungeon-masters": `
<h2>Common D&D Naming Mistakes to Avoid</h2>
<p>The most common mistake new DMs make is using modern-sounding names in fantasy settings. A blacksmith named "Kevin" breaks immersion. A kingdom called "The Awesome Realm" feels amateurish. Take the extra few seconds to find names that fit your world's tone and period.</p>
<p>Another common error is making names too similar. If your campaign features both the Kingdom of Althoria and the Empire of Althoria, players will be constantly confused. Ensure that important names in your world are phonetically distinct from each other.</p>
<p>Avoid names that are difficult to pronounce. If you stumble over a name every time you say it, your players will too. Complex names can work for ancient, mysterious entities that are rarely invoked, but everyday NPCs and locations should have names that roll off the tongue.</p>
<p>Don't give every character and location an elaborate, multi-part name. A world where every tavern is called something like "The Gilded Dragon's Majestic Rest and Hospitality Emporium" becomes exhausting. Save the elaborate names for truly important elements and keep everyday things simple.</p>`,

  "fantasy-worldbuilding-names-complete-guide": `
<h2>Magic System Naming</h2>
<p>Every magic system needs its own vocabulary. The names of magical disciplines, spell categories, and power sources shape how audiences understand your magic. A magic system with schools called "Pyromancy," "Cryomancy," and "Necromancy" feels different from one with "The Way of Flame," "The Path of Frost," and "The Art of Death."</p>
<p>Magical artifacts and legendary items deserve special naming attention. A magic sword is not just a weapon — it is a piece of your world's history. Names like "Starfall," "Soulrender," and "The Crown of Last Light" embed stories into objects. The name should hint at the artifact's origin, power, and significance.</p>
<p>Magical creatures and beings should have names that reflect their supernatural nature. A phoenix reborn from ashes might be called "Ashwing" or "Emberheart." A water elemental might be called "Tidalspeaker" or "Deepthought." These names bridge the gap between the creature's physical form and its magical essence.</p>

<h2>Cultural Naming Systems</h2>
<p>Different cultures within your world should have distinct naming conventions. A desert-dwelling culture might use names that reference heat, sand, and survival. A mountain culture might use names that evoke stone, height, and endurance. These cultural naming patterns create believable diversity in your world.</p>
<p>Social class affects naming within cultures. Nobility might have longer, more elaborate names with multiple components. Commoners might have simple, practical names. This class-based naming distinction reflects real historical patterns and adds social realism to your world.</p>
<p>Religious naming traditions add another layer of cultural depth. Children might be named after saints, gods, or prophets. Coming-of-age ceremonies might involve receiving a new name. Religious figures might abandon their birth names upon taking holy orders. These traditions make your cultures feel lived-in and authentic.</p>`,

  "clan-name-ideas-for-fantasy-worlds-and-games": `
<h2>Beast and Totem Clans</h2>
<p>Many fantasy clans are organized around animal totems — spiritual guardians that embody the clan's values and strengths. Wolf Clan, Bear Clan, Eagle Clan, and Serpent Clan are classic examples. Each totem animal carries specific symbolic associations that shape clan identity.</p>
<p>Wolf clans emphasize loyalty, pack tactics, and ferocity in battle. Bear clans represent strength, protection, and maternal ferocity. Eagle clans symbolize vision, freedom, and the ability to strike from above. Raven clans suggest intelligence, trickery, and secret knowledge. Choose a totem that reflects your clan's core identity.</p>
<p>Some clans go beyond single animals to mythical creatures. Dragon Clan suggests ancient power and hoarded wisdom. Phoenix Clan suggests rebirth and resilience. Griffin Clan suggests nobility and guardianship. These mythical totems elevate a clan's status within your world's hierarchy.</p>

<h2>Dark and Outcast Clans</h2>
<p>Not all clans are noble and honorable. Dark clans — those associated with forbidden magic, exile, or villainous deeds — need names that reflect their marginalized status. Names like Shadow Fang Clan, Blood Moon Clan, and Void Walker Clan communicate darkness without being cartoonishly evil.</p>
<p>Outcast clans might reclaim pejorative names as badges of honor. A clan called "The Broken" or "The Forgotten" might have been exiled by more powerful clans and now wears its outcast status proudly. These names tell stories of struggle, survival, and defiance.</p>
<p>The most interesting dark clans have understandable motivations. They are not evil for evil's sake. Their name should reflect their perspective and values, even if those values conflict with the dominant culture. This moral complexity makes dark clans compelling rather than merely villainous.</p>`,

  "kingdom-names-that-inspire-epic-stories": `
<h2>Kingdom Names as Foreshadowing</h2>
<p>Kingdom names can foreshadow major plot developments. A kingdom called "The Eternal Throne" might be destined to fall, the name becoming bitterly ironic. A kingdom called "The Sundered Kingdom" tells audiences from the start that division and conflict define this realm.</p>
<p>Names can hint at hidden truths. "The Kingdom of Two Crowns" might refer to a literal dual monarchy — or to a secret second ruler pulling strings from the shadows. "The Veiled Kingdom" might refer to a literal magical veil concealing the kingdom from outsiders — or to the deceptions and lies upon which the kingdom is built.</p>
<p>Prophecy and legend intertwine with kingdom names in the richest fantasy worlds. A kingdom might be named after an ancient prophecy that has yet to be fulfilled. The name itself becomes a plot device, with characters debating its true meaning and the destiny it foretells.</p>

<h2>Kingdom Name Evolution Through History</h2>
<p>Kingdoms change over centuries, and their names change with them. A kingdom that began as "The River Kingdom" might become "The River Empire" after conquering its neighbors. Later, after a golden age, it might be known as "The First Empire" — a name that carries the weight of historical precedent.</p>
<p>Conquest renames kingdoms. When a foreign power conquers a kingdom, they often impose a new name that erases the old identity. The conquered people might continue using the old name in secret, preserving their cultural identity through language. This dual-naming creates rich storytelling opportunities.</p>
<p>Fallen kingdoms carry particular narrative weight. "The Kingdom That Was" or "The Lost Realm of Aethoria" evoke nostalgia and tragedy. These names tell stories of glory that has faded, of golden ages that ended, of lessons that must be learned from history.</p>`,

  "roblox-game-names-that-attract-players": `
<h2>Advanced Roblox Naming Strategies for 2026</h2>
<p>The Roblox platform evolves constantly, and naming strategies must evolve with it. In 2026, several trends are shaping successful game naming. Emotional hooks are increasingly important — names that make players feel something get more clicks than purely descriptive names. "Pet Cute Simulator" outperforms "Pet Collecting Game" because cute triggers an emotional response.</p>
<p>Community-driven naming is emerging as a powerful strategy. Some successful developers involve their community in naming new games through polls and contests. This creates buy-in before the game even launches and generates early word-of-mouth marketing.</p>
<p>Cross-platform branding is becoming essential. The most successful Roblox developers maintain consistent naming across Roblox, YouTube, Discord, and social media platforms. A name that works well as a YouTube channel name, a Discord server name, and a Roblox game name multiplies your reach across platforms.</p>

<h2>Case Studies in Roblox Naming Success</h2>
<p>Study the naming patterns of Roblox's most successful games. "Adopt Me!" succeeded with a name that is emotionally engaging, grammatically simple, and memorable. "Brookhaven RP" works because it sounds like a real place while clearly signaling its roleplay genre. "Tower Defense Simulator" communicates its entire gameplay concept in three words.</p>
<p>Smaller success stories offer lessons too. A game called "Super Golf!" attracted players by combining a familiar sport with an energetic adjective. "Escape Room" dominated its niche by using the exact search term players were looking for. "Natural Disaster Survival" promised specific, exciting gameplay in its name.</p>
<p>The common thread across all successful Roblox game names: they communicate value immediately. Within the first second of seeing the name, a potential player understands what kind of experience awaits and whether it matches their interests. Master this principle, and your game name will work as hard as your game itself.</p>`
};

for (const [slug, content] of Object.entries(expansions)) {
  const p = posts.find(p => p.slug === slug);
  if (p) {
    p.content += content;
    const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wc = text.split(' ').filter(w => w.length > 1).length;
    console.log((wc >= 1500 ? '✅' : '❌') + ' ' + slug.slice(0, 45).padEnd(47) + wc + ' words');
  }
}

fs.writeFileSync("data/blog-posts.json", JSON.stringify(posts, null, 2));
