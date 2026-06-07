import fs from "node:fs";
const posts = JSON.parse(fs.readFileSync("data/blog-posts.json","utf-8"));
const p = posts.find(p => p.slug === "ultimate-dnd-naming-guide-for-dungeon-masters");
if (!p) process.exit(1);
p.content += `<h2>Quick Reference: D&D Naming by Race</h2>
<p>Dragonborn names often incorporate draconic syllables and honor-based clan structures. Male dragonborn names like "Kriv," "Medrash," and "Rhogar" use harsh consonants. Female dragonborn names like "Akra," "Kava," and "Sora" use slightly softer sounds. Clan names like "Clethtinthiallor" and "Kerrhylon" are intentionally complex to reflect ancient draconic heritage.</p>
<p>Tiefling names draw from infernal themes with virtue names as contrast. Male tiefling names like "Akmenos," "Kairon," and "Zarios" sound exotic and slightly dangerous. Female names like "Bryseis," "Damaya," and "Makaria" blend beauty with an edge of darkness. Many tieflings adopt virtue names like "Hope," "Valor," or "Destiny" as a statement of identity beyond their infernal heritage.</p>
<p>Halfling names emphasize warmth, comfort, and community. Male names like "Corrin," "Finnan," and "Milo" are short and friendly. Female names like "Andry," "Bree," and "Callie" are equally approachable. Halfling surnames often reference nature or trades — "Greenbottle," "Tealeaf," "Underbough."</p>
<p>Gnome names are elaborate and whimsical, reflecting gnomish love of complexity and humor. A gnome might have a name like "Namfoodle Scheppen" or "Turen Frumgarten," with nicknames used among close friends. Gnomish naming traditions celebrate individuality and creativity above all else.</p>

<h2>Artifact and Magic Item Naming</h2>
<p>Legendary artifacts deserve legendary names. A +1 longsword is forgettable. "Dawnbreaker, Blade of the Morning Lord" is a story waiting to happen. The best artifact names combine a distinctive primary name with an evocative title or epithet.</p>
<p>Consider the artifact's history when naming it. Who created it? For what purpose? What legendary deeds has it accomplished? A sword forged by ancient dwarven smiths to slay a dragon might be called "Wyrmbane, the Forge-Blessed Blade." A staff crafted by an archmage during a solar eclipse might be "Sunshadow, the Eclipse Staff."</p>
<p>Cursed items deserve names that hint at their dangerous nature without giving everything away. "The Crown of Binding," "The Mirror of Shattered Souls," and "The Blade That Hungers" suggest dark powers that players will discover — perhaps at their peril.</p>

<h2>Running a Naming Session at Your Table</h2>
<p>Make naming collaborative. When the party establishes a stronghold or founds an organization, let the players name it. Run a quick naming session where everyone contributes ideas and the group votes. These player-named elements become cherished parts of your campaign's shared history.</p>
<p>Use our Game Name Generator Hub during sessions. Generate themed names quickly and share the best options with your players. The generators are fast enough to use in real-time during gameplay, so you never have to pause the action while you search for the perfect name.</p>`;

const text = p.content.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const wc = text.split(' ').filter(w => w.length>1).length;
console.log(p.slug + ': ' + wc + ' words');

fs.writeFileSync("data/blog-posts.json", JSON.stringify(posts, null, 2));
