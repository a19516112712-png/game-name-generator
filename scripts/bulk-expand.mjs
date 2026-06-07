import fs from "node:fs";

const posts = JSON.parse(fs.readFileSync("data/blog-posts.json", "utf-8"));

const bulk = {
  "dragon-name-generator-guide": `
<h2>Dragon Names for Different Age Ratings</h2>
<p>Consider your audience when naming dragons. A dragon in a children's fantasy novel should have a name that is exciting but not terrifying. Names like "Ember," "Sparkle," or "Glowwing" work for younger audiences. A dragon in dark adult fantasy can have genuinely frightening names that would be inappropriate for children's media.</p>
<p>Young adult fiction occupies a middle ground where dragon names should feel dangerous but not traumatizing. Names that suggest power and mystery without explicit violence or horror work best for this demographic. Test your dragon name with beta readers in your target age range.</p>`,

  "fantasy-character-naming-guide": `
<h2>Avoiding Unfortunate Implications in Character Names</h2>
<p>Before finalizing any character name, research its meaning and associations across different languages and cultures. A name that sounds exotic and appealing in English might have unfortunate or inappropriate meanings in other languages. A few minutes of research can prevent embarrassing discoveries after publication.</p>
<p>Be mindful of cultural appropriation when drawing from real-world naming traditions. Research and respect the cultures whose naming conventions inspire your work. Consider consulting sensitivity readers if you are drawing heavily from cultures outside your own experience.</p>`,

  "how-to-name-a-minecraft-server": `
<h2>International Server Naming Considerations</h2>
<p>If your server aims to attract an international player base, consider how your name works across languages and cultures. Avoid names that rely on English-specific wordplay or cultural references that international players will not understand. Simple, universal concepts translate better across language barriers.</p>
<p>Consider offering translated versions of your server name for different language communities. A server called "DragonCraft" might be promoted as "CraftDragón" in Spanish-speaking communities while maintaining brand consistency. This multilingual approach expands your potential player base significantly.</p>
<p>Test your server name with international friends or community members before launching. What sounds cool in English might have unintended meanings or awkward pronunciations in other languages. Multicultural feedback helps you avoid these pitfalls.</p>`,
 
  "roblox-group-name-ideas": `
<h2>Seasonal and Event-Based Group Naming</h2>
<p>Many successful Roblox groups create seasonal variants of their names for holidays and special events. A group might temporarily become "The Haunted Legion" for Halloween or "The Festive Builders" for the winter holiday season. This keeps the group feeling fresh and engaged with current events.</p>
<p>When creating event-specific name variants, always maintain enough of your original identity that members can still recognize the group. The temporary name should feel like a fun variation, not a confusing rebrand. Communicate clearly with members about name changes and when the original name will return.</p>
<p>Consider creating sister groups for different game modes or themes rather than constantly changing one group's identity. A main group called "BuildMasters" might have a sister group called "BuildMasters PvP" for competitive members and "BuildMasters Creative" for builders. This preserves brand consistency while serving different community needs.</p>`,

  "clan-name-ideas-for-competitive-games": `
<h2>Clan Sponsorship and Name Changes</h2>
<p>When a clan attracts sponsors, naming considerations become more complex. Some sponsors require the clan to incorporate the sponsor's name. Others prefer the clan to maintain its independent identity. Negotiate naming rights carefully in any sponsorship agreement to protect your clan's long-term brand.</p>
<p>If your clan is acquired by or merged with an esports organization, the name transition requires careful management. Communicate the change clearly to fans and community members. Explain the reasons for the change and emphasize continuity of the competitive roster and team culture.</p>
<p>Some of the most successful esports organizations maintain multiple teams under a single brand umbrella. Names like "Cloud9 White" and "Cloud9 Blue" allow the organization to field multiple rosters while maintaining clear brand association. Consider whether a franchise naming model might suit your clan's growth plans.</p>`,

  "world-building-and-naming-guide": `
<h2>Technology and Naming in Worldbuilding</h2>
<p>The technological level of your fantasy world influences naming conventions. A pre-industrial world might name locations after natural features and legendary figures. A steampunk world might incorporate mechanical and industrial terminology. A magitech world might blend magical and technological naming elements.</p>
<p>Consider how technological advancement changes naming over time within your world's history. As societies develop from agricultural to industrial to magical-industrial, their naming conventions evolve to reflect changing priorities and worldviews. This historical layering adds depth to long-running campaign settings.</p>`,

  "faction-naming-strategies": `
<h2>Faction Names in Competitive and Cooperative Games</h2>
<p>In games with faction-based PvP, faction names influence player psychology. Players who choose a faction called "The Glorious Empire" may play differently than those who choose "The Scrappy Underdogs." Faction names create expectations that shape player behavior and community culture.</p>
<p>Cooperative games benefit from faction names that emphasize unity and shared purpose. Names that suggest collaboration, mutual support, and common goals attract players interested in cooperative experiences. Contrast these with competitive faction names that emphasize rivalry and opposition.</p>
<p>Game designers should carefully balance faction names to avoid inadvertently making one faction more popular than others. If "The Dragon Knights" sounds inherently cooler than "The Peaceful Farmers," population imbalances will result. Test faction names with playtesters to identify unintended appeal disparities.</p>`,

  "creating-memorable-rpg-worlds": `
<h2>Post-Campaign World Legacy</h2>
<p>After an RPG campaign concludes, the world you built together lives on in players' memories. The names you chose become part of your group's shared vocabulary. Years later, someone will say "Remember the Siege of Ironhold?" and everyone at the table will immediately be transported back to that moment.</p>
<p>Consider documenting your world's names and their histories after the campaign ends. A campaign wiki, a shared document, or even a printed map preserves the naming work for future campaigns in the same world. Some of the most beloved RPG settings began as a single campaign that was lovingly documented and expanded over years.</p>
<p>The names you create for your RPG world might outlive the campaign itself. They might inspire future campaigns, become the basis for stories you write, or simply remain as cherished memories of time spent with friends around a gaming table. This is the quiet magic of RPG worldbuilding — creating something that matters far beyond the game itself.</p>`
};

for (const p of posts) {
  if (bulk[p.slug]) {
    p.content += bulk[p.slug];
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

console.log('\n' + (allOk ? '🎉 ALL 10 POSTS ≥ 1500 WORDS!' : '❌ Some still under'));
const total = posts.reduce((s, p) => {
  const text = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return s + text.split(' ').filter(w => w.length > 1).length;
}, 0);
console.log('Total: ' + total + ' words | Avg: ' + Math.round(total / posts.length));
