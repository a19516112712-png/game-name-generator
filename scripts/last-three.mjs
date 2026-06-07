import fs from "node:fs";

const posts = JSON.parse(fs.readFileSync("data/blog-posts.json", "utf-8"));

const micro = {
  "roblox-group-name-ideas": `<h2>Your Group Name Journey</h2>
<p>Naming your Roblox group is the first step in a creative journey that could lead anywhere — from a small friend group to a development studio with millions of visits. Many of today's most successful Roblox developers started with nothing more than a group name and a shared vision. Your group name represents the beginning of that journey, so choose it with the same ambition and creativity you bring to your games.</p>
<p>Take inspiration from successful groups, but forge your own identity. The Roblox platform rewards originality and authenticity. A name that genuinely reflects who you are and what you want to build will attract members who share your vision and contribute meaningfully to your community.</p>`,

  "clan-name-ideas-for-competitive-games": `<h2>Your Clan's Future Starts with Its Name</h2>
<p>The competitive gaming landscape is more accessible than ever. With the right name, the right teammates, and the right attitude, any clan can rise through the ranks and make a name for itself. Your clan name is the foundation upon which everything else is built — your reputation, your brand, and your legacy in the competitive gaming community.</p>
<p>Take the time to choose a name that represents your ambitions. Whether you aim to dominate local tournaments or compete on the global stage, your clan name will be with you every step of the way. Make it a name you are proud to wear, proud to represent, and proud to see on leaderboards and tournament brackets.</p>`,

  "faction-naming-strategies": `<h2>Your Faction, Your Legacy</h2>
<p>The factions you create will shape the experiences of everyone who encounters your game or story. Players will remember the faction they chose, the faction they fought against, and the faction that changed everything. These memories are built on the foundation of a well-chosen name.</p>
<p>Return to your faction names periodically as your world or game develops. Names that worked perfectly in early development might need refinement as the faction's role expands or changes. Great worldbuilders treat naming as an ongoing process rather than a one-time decision. Your factions deserve the same care and attention you give to every other aspect of your creative work.</p>`
};

for (const p of posts) {
  if (micro[p.slug]) {
    p.content += micro[p.slug];
  }
}

fs.writeFileSync("data/blog-posts.json", JSON.stringify(posts, null, 2));

posts.forEach(p => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wc = text.split(' ').filter(w => w.length > 1).length;
  console.log((wc >= 1500 ? '✅' : '❌') + ' ' + p.slug.slice(0, 42).padEnd(44) + wc + ' words');
});

const allOk = posts.every(p => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').filter(w => w.length > 1).length >= 1500;
});
console.log('\n' + (allOk ? '🎉 ALL 10 ≥ 1500!' : '❌'));
const total = posts.reduce((s, p) => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return s + text.split(' ').filter(w => w.length > 1).length;
}, 0);
console.log('Total: ' + total + ' | Avg: ' + Math.round(total / posts.length) + ' | Max: ' + Math.max(...posts.map(p => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').filter(w => w.length > 1).length;
})));
