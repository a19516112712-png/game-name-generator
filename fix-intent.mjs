import fs from "node:fs";

let c = fs.readFileSync("scripts/build-intent-layer.mjs", "utf-8");

// Fix: templates reference rng that isn't in scope during definition
// Solution: replace the first 6 intents' template definitions with simplified versions
// that use string lists instead of dynamic pick() calls

// Fix meaningTemplates for first 6 intents
const oldMTPattern = /meaningTemplates: \[\s*\n\s*\(n\) => `([^`]*)`,\s*\n\s*\(n\) => `([^`]*)`,\s*\n\s*\(n\) => `([^`]*)`\s*\n\s*\]/g;

c = c.replace(oldMTPattern, (match, m1, m2, m3) => {
  // Check if the templates contain pick() calls with rng
  if (match.includes(',rng)')) {
    // Replace with simplified versions
    return `meaningTemplates: [
      (n) => n + ' — a name that resonates with power and mystery.',
      (n) => n + ' — a legendary name from the ancient archives.',
      (n) => n + ' — a name that echoes through the ages.'
    ]`;
  }
  return match;
});

// Also fix loreTemplates
const oldLTPattern = /loreTemplates: \[\s*\n\s*\(n\) => `([^`]*)`,\s*\n\s*\(n\) => `([^`]*)`\s*\n\s*\]/g;

c = c.replace(oldLTPattern, (match) => {
  if (match.includes(',rng)')) {
    return `loreTemplates: [
      (n) => n + ' has a rich history dating back centuries. Its origins are intertwined with the founding myths of the realm, and its name is spoken with reverence by those who know its true significance.',
      (n) => 'The story of ' + n + ' begins in an age of heroes and legends. Through countless generations, its name has been passed down, each era adding new layers of meaning and significance.'
    ]`;
  }
  return match;
});

fs.writeFileSync("scripts/build-intent-layer.mjs", c);
console.log("Fixed template references");
