import fs from "node:fs";

const posts = JSON.parse(fs.readFileSync("data/blog-posts.json", "utf-8"));

const lastBoost = {
  "how-to-name-a-minecraft-server": `<h2>Future-Proofing Your Server Name</h2>
<p>Minecraft updates frequently introduce new features, biomes, and mechanics. A server name tied to a specific update or feature may become outdated within months. Choose a name that remains relevant regardless of how Minecraft evolves. Timeless themes like adventure, community, and creativity never go out of style in the Minecraft ecosystem.</p>
<p>Consider reserving alternate names for future expansion. If your survival server might someday add creative and minigame modes, having compatible names prepared makes expansion smoother. Plan for growth from day one.</p>`,

  "roblox-group-name-ideas": `<h2>Building a Multi-Group Roblox Empire</h2>
<p>Ambitious Roblox developers often manage multiple groups — a main studio group, individual game groups, a fan group, and a staff group. Consistent naming across this ecosystem creates a professional brand presence. Players who enjoy one of your games can easily find your other groups because the naming connection is immediately obvious.</p>
<p>Create a naming system that scales with your ambitions. A prefix-based system (like "BlockForge Studios," "BlockForge RPG," "BlockForge Community") creates natural expansion paths. New groups fit seamlessly into the established naming convention, strengthening your overall brand with each addition.</p>
<p>Monitor how your group names perform in Roblox search. Some naming patterns receive more organic discovery than others. Be willing to adjust your approach based on real data about what helps players find your groups.</p>`,

  "clan-name-ideas-for-competitive-games": `<h2>Social Media and Clan Name Branding</h2>
<p>Your clan name is the cornerstone of your social media presence. Twitter handles, YouTube channels, Twitch streams, and Discord servers should all use consistent branding based on your clan name. Before finalizing, check availability of your desired name across all major platforms.</p>
<p>Create a simple style guide for how your clan name should appear in different contexts. Should it always be capitalized? Does it have a specific abbreviation? Should certain color schemes always accompany it? Consistent visual presentation builds brand recognition over time.</p>
<p>Encourage clan members to incorporate the clan name into their personal gaming profiles and social media. When every member proudly displays the clan name, your presence multiplies across platforms. This organic brand visibility is one of the most powerful growth tools available to competitive clans.</p>`,

  "world-building-and-naming-guide": `<h2>Iterative Worldbuilding: Names That Evolve</h2>
<p>Your world's names do not need to be perfect on the first attempt. Professional worldbuilders iterate on their names, refining them as the world develops and deepens. A placeholder name like "The Big Forest" might eventually become "The Emerald Expanse" or "The Whispering Wood" as you develop the location's character.</p>
<p>Embrace the iterative nature of worldbuilding. Generate name candidates, use them in your writing or gameplay, and refine based on how they feel in practice. Names that survive this iterative process are stronger than names chosen on first impulse.</p>
<p>Our Game Name Generator Hub supports iterative worldbuilding by letting you explore thousands of variations on any theme, race, and context combination. Bookmark promising candidates, compare alternatives, and return to refine your choices as your world evolves.</p>`,

  "faction-naming-strategies": `<h2>Faction Names as Narrative Tools</h2>
<p>In storytelling, faction names can foreshadow plot developments. A faction named "The Trustworthy Merchants" that the audience later discovers is a front for criminal activity creates dramatic irony. The name becomes part of the narrative deception. Use faction names as storytelling tools, not just organizational labels.</p>
<p>Faction names can also reflect character arcs. A character who joins "The Order of Purity" at the beginning of their journey might end the story by founding "The Reconciliation Council." The evolution of faction names mirrors the evolution of the characters and world they inhabit.</p>
<p>Consider how different point-of-view characters perceive the same faction. The "Freedom Fighters" to one character might be the "Rebel Scum" to another. Presenting faction names through different perspectives enriches your narrative and challenges readers to question their assumptions.</p>`
};

for (const p of posts) {
  if (lastBoost[p.slug]) {
    p.content += lastBoost[p.slug];
  }
}

fs.writeFileSync("data/blog-posts.json", JSON.stringify(posts, null, 2));

posts.forEach(p => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wc = text.split(' ').filter(w => w.length > 1).length;
  const status = wc >= 1500 ? '✅' : '❌';
  console.log(status + ' ' + p.slug.slice(0, 42).padEnd(44) + wc + ' words');
});

const allOk = posts.every(p => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').filter(w => w.length > 1).length >= 1500;
});
console.log('\n' + (allOk ? '🎉 ALL POSTS MEET THE 1500 WORD MINIMUM!' : '❌ FAILED'));
const total = posts.reduce((s, p) => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return s + text.split(' ').filter(w => w.length > 1).length;
}, 0);
console.log('Total: ' + total + ' words | Avg: ' + Math.round(total / posts.length));
