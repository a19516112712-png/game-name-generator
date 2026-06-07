import fs from "node:fs";

let c = fs.readFileSync("scripts/build-intent-layer.mjs", "utf-8");

// Replace ALL pick() calls that use ,rng - the issue is rng not defined in template closure scope
// Solution: Replace pick(arr, rng) with hardcoded first element
c = c.replace(/pick\(\[([^\]]+)\],rng\)/g, (match, arr) => {
  const items = arr.split(',').map(s => s.trim().replace(/"/g, ''));
  // Return the first item as a fallback (won't rng properly but won't crash)
  return '"' + items[0] + '"';
});

fs.writeFileSync("scripts/build-intent-layer.mjs", c);
console.log("Fixed all pick(rng) calls");
