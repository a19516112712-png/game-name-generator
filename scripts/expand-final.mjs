import fs from "node:fs";

const posts = JSON.parse(fs.readFileSync("data/blog-posts.json", "utf-8"));

const more = {
  "how-to-create-fantasy-kingdom-names": `
<h2>Kingdom Names Across Different Media</h2>
<p>Books, films, games, and tabletop RPGs each place different demands on kingdom names. In a novel, readers encounter the name on the page and form their own pronunciation. In a film, actors must speak the name naturally in dialogue. In a video game, the name appears in menus, maps, and UI elements where readability at small sizes matters.</p>
<p>For novels, you can afford slightly more complex names because readers process them at their own pace. For films and games, prioritize pronounceability above all else. An actor stumbling over a kingdom name breaks immersion instantly. A name that is confusing in a fast-paced game interface frustrates players. Adapt your naming complexity to your medium.</p>
<p>In tabletop RPGs, the dungeon master must be able to say the name confidently and consistently across multiple sessions. Nothing undermines a kingdom's gravitas faster than the DM hesitating before saying its name every time. Choose names you can pronounce easily and consistently.</p>`,

  "best-guild-name-ideas-for-rpg-games": `
<h2>Guild Names in Different MMORPGs</h2>
<p>Each major MMORPG has its own guild naming culture. World of Warcraft guilds span from hardcore mythic raiding guilds with intimidating names to casual social guilds with humorous names. Final Fantasy XIV guilds — called Free Companies — often use names with Japanese or Final Fantasy-inspired aesthetics. Elder Scrolls Online guilds frequently draw from Tamrielic lore and naming conventions.</p>
<p>Understanding your game's guild culture helps you choose a name that will resonate with your target audience. A name that sounds perfect in World of Warcraft might feel out of place in Final Fantasy XIV. Research successful guilds in your specific game before finalizing your name to understand the community's naming expectations.</p>`,

  "dragon-name-generator-guide": `
<h2>Practical Dragon Naming Exercises</h2>
<p>Practice your dragon naming skills with these exercises. First, try naming a dragon for each of the five classic chromatic dragon types from Dungeons and Dragons: red, blue, green, black, and white. Each should have a distinct name that reflects their elemental affinity and temperament.</p>
<p>Second, create a dragon dynasty — a family of related dragons with names that share common elements while remaining distinct. The progenitor might have a simple, powerful name, with each generation's names becoming more elaborate as the bloodline grows in power and prestige.</p>
<p>Third, try naming the same dragon from three different cultural perspectives. How would terrified villagers name the dragon that burns their crops? How would it name itself? How would dragon hunters who have studied the creature for years refer to it? This exercise builds worldbuilding depth.</p>`,

  "fantasy-character-naming-guide": `
<h2>Practical Character Naming Exercises</h2>
<p>Build your character naming skills with these exercises. Take a character concept — a disgraced knight seeking redemption — and generate ten different names for them, each suggesting a slightly different take on the archetype. How does the name change if the knight is young versus old, from a northern culture versus a southern one, serious versus sardonic?</p>
<p>Create a family tree of characters with names that show their relationships. Siblings might share common name elements. Parents and children might have names that reflect generational naming trends. This exercise builds skills in creating believable family naming patterns.</p>`,

  "how-to-name-a-minecraft-server": `
<h2>Server Name Case Studies</h2>
<p>Study the most successful Minecraft servers for naming lessons. Hypixel — a unique, brandable name that has become synonymous with Minecraft minigames. Mineplex — a clever portmanteau of Minecraft and complex. Cubecraft — simple, descriptive, and memorable. Each of these names works because it is short, distinctive, and evocative.</p>
<p>Smaller successful servers also offer lessons. A server called "Vanilla Extract" cleverly signals its vanilla gameplay while being memorable. "The Seed" suggests new beginnings and growth. "BlockParty" communicates a fun, social atmosphere. These names succeed because they are creative, appropriate, and easy to remember.</p>
<p>Analyze why certain names work and others do not. Generic names like "Awesome Minecraft Server" fail because they communicate nothing specific and blend into the noise. Names that try too hard to be edgy often age poorly. The best names strike a balance between distinctiveness and approachability.</p>`,

  "roblox-group-name-ideas": `
<h2>Advanced Roblox Group Naming Strategies</h2>
<p>Consider creating a naming franchise — a series of related groups with consistent naming themes. A game development studio might create groups for their main studio, their QA team, their builder team, and their community, all sharing a common naming convention. This creates a professional, organized impression.</p>
<p>Collaborate with other group owners to create alliance names. When multiple groups join forces for events or cross-promotion, a shared alliance name strengthens all participating groups. Alliance names like "The Builder's Coalition" or "United Studios of Roblox" create community-wide identity.</p>
<p>Monitor trends in Roblox group naming to stay current. What naming styles are popular this year? What styles feel outdated? Staying aware of naming trends helps your group feel fresh and relevant to new members while avoiding styles that have become clichéd.</p>`,

  "clan-name-ideas-for-competitive-games": `
<h2>Esports Organization Naming</h2>
<p>Study how professional esports organizations name themselves for insights applicable to competitive clans at any level. Organizations like 100 Thieves, Cloud9, and Team SoloMid chose names that are distinctive, memorable, and work across multiple games. Their names function as brands first and descriptors second.</p>
<p>Abstract names — words that do not directly describe anything about gaming — often make the strongest brands. "Cloud9" has no inherent gaming meaning, but through consistent success and branding, it has become one of the most recognized names in esports. Consider whether an abstract name might serve your long-term ambitions better than a descriptive one.</p>
<p>Regional identity can be a powerful naming element. European organizations often incorporate their national or regional identity into their branding. North American organizations tend toward more abstract, brand-focused names. Understanding these regional conventions helps position your clan appropriately within the global competitive landscape.</p>`,

  "world-building-and-naming-guide": `
<h2>Naming Consistency Tools and Techniques</h2>
<p>Professional worldbuilders use tools to maintain naming consistency across large projects. Create a simple naming bible — a document that records every name in your world along with its meaning, origin, and cultural context. This prevents accidentally reusing names or creating names that break your established patterns.</p>
<p>Use our Game Name Generator Hub systematically to maintain consistency. Generate names for all locations in a single region using the same theme, race, and context combinations. This produces a family of related names that feel like they belong together. Record the combinations you used so you can generate additional names later that match.</p>
<p>Review your world's names periodically for patterns and potential issues. Do too many names start with the same letter? Are there names that are confusingly similar? Does every elven city sound the same? A periodic naming audit catches issues before they become entrenched in your world's canon.</p>`,

  "faction-naming-strategies": `
<h2>Faction Evolution and Name Changes</h2>
<p>Factions in stories and games often evolve, and their names should evolve with them. A rebel faction that successfully overthrows the government must decide whether to keep its rebel-era name or adopt a new name appropriate to its governing role. This transition point is rich with narrative potential.</p>
<p>Faction splits and mergers create naming challenges. When a faction divides, how do the splinter groups name themselves to distinguish from the parent organization while claiming its legacy? When factions merge, how do they combine their names to represent both original identities? These scenarios occur naturally in complex narratives and games.</p>
<p>Historical factions accumulate former names. The "Soviet Union" was previously "Soviet Russia" and before that simply "Russia." Your fantasy factions might have similar layers of historical names that scholars and historians reference. Creating these historical names — even if they never appear directly in your story — adds depth to your world.</p>`,

  "creating-memorable-rpg-worlds": `
<h2>RPG World Naming at the Gaming Table</h2>
<p>Running an RPG campaign requires different naming skills than writing a novel. At the gaming table, you must produce names instantly when players explore unexpected locations. Prepare name lists in advance for different culture types, location types, and NPC types. Having these lists ready prevents awkward pauses during gameplay.</p>
<p>Involve your players in the naming process when appropriate. When players establish a stronghold, let them name it. When they defeat a major villain, let them choose how history will remember the battle. Player-named locations create stronger emotional connections than DM-imposed names.</p>
<p>Use improvisational naming techniques for spontaneous needs. Combine elements from your prepared lists in new ways. Adapt names from other locations in your world with minor modifications. These techniques help you produce believable names even when players go somewhere you never expected them to explore.</p>`
};

for (const p of posts) {
  if (more[p.slug]) {
    p.content += more[p.slug];
  }
}

fs.writeFileSync("data/blog-posts.json", JSON.stringify(posts, null, 2));

posts.forEach(p => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wc = text.split(' ').filter(w => w.length > 1).length;
  const status = wc >= 1500 ? '✅' : wc >= 1400 ? '⚠️' : '❌';
  console.log(status + ' ' + p.slug.slice(0, 42).padEnd(44) + wc + ' words');
});

const total = posts.reduce((s, p) => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return s + text.split(' ').filter(w => w.length > 1).length;
}, 0);
console.log('\nTotal: ' + total + ' words | Avg: ' + Math.round(total / posts.length));
