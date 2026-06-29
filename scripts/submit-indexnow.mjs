#!/usr/bin/env node
/**
 * IndexNow Bulk URL Submission for toppicksbase.com
 *
 * Reads all sitemap XML files from public/, extracts every <loc> URL,
 * batches them (max 10,000 per request), and POSTs to the IndexNow API.
 *
 * Fail-safe: any HTTP error, timeout, or exception → logs and exit 0.
 * Never blocks the build pipeline.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ================================================================
// CONFIG
// ================================================================
const CONFIG = {
  host: "toppicksbase.com",
  key: "b3e947f6d28a415eb9c84730b2026d3b",
  endpoint: "https://api.indexnow.org/indexnow",
  batchSize: 10_000,
  timeoutMs: 30_000,
  publicDir: path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "public"
  ),
};

// ================================================================
// HELPERS
// ================================================================

/** Extract all <loc> text content from an XML string */
function extractLocUrls(xml) {
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    const url = match[1].trim();
    if (url) urls.push(url);
  }
  return urls;
}

/** Read a local XML file, return its text content or null */
function readXmlFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

// ================================================================
// MAIN
// ================================================================
async function main() {
  console.log("[IndexNow] Starting bulk URL submission...");
  console.log(`[IndexNow] Host: ${CONFIG.host}`);
  console.log(`[IndexNow] Key:  ${CONFIG.key}`);
  console.log(`[IndexNow] Dir:  ${CONFIG.publicDir}`);
  console.log();

  // ---- Step 1: Discover all sitemap files ----
  const sitemapFiles = fs
    .readdirSync(CONFIG.publicDir)
    .filter((f) => f.startsWith("sitemap") && f.endsWith(".xml"))
    .sort();

  if (sitemapFiles.length === 0) {
    console.log("[IndexNow] ⚠️  No sitemap files found in public/ — skipping.");
    process.exit(0);
  }

  console.log(`[IndexNow] Found ${sitemapFiles.length} sitemap files:`);
  sitemapFiles.forEach((f) => console.log(`  - ${f}`));
  console.log();

  // ---- Step 2: Extract all <loc> URLs from every sitemap ----
  const allUrls = new Set();

  for (const file of sitemapFiles) {
    const filePath = path.join(CONFIG.publicDir, file);
    const xml = readXmlFile(filePath);
    if (!xml) {
      console.log(`[IndexNow] ⚠️  Could not read ${file} — skipping.`);
      continue;
    }

    const urls = extractLocUrls(xml);
    // Filter: only keep URLs belonging to our host
    const hostPrefix = `https://${CONFIG.host}`;
    const hostUrls = urls.filter(
      (u) => u.startsWith(hostPrefix) || u.startsWith(`http://${CONFIG.host}`)
    );

    for (const url of hostUrls) {
      allUrls.add(url);
    }

    console.log(
      `[IndexNow] ${file.padEnd(35)} ${urls.length
        .toString()
        .padStart(5)} total | ${hostUrls.length.toString().padStart(5)} for ${CONFIG.host}`
    );
  }

  const urlList = [...allUrls];
  console.log(
    `\n[IndexNow] Total unique URLs to submit: ${urlList.length}`
  );

  if (urlList.length === 0) {
    console.log("[IndexNow] ⚠️  No URLs to submit — skipping.");
    process.exit(0);
  }

  // ---- Step 3: Batch and submit ----
  const batches = [];
  for (let i = 0; i < urlList.length; i += CONFIG.batchSize) {
    batches.push(urlList.slice(i, i + CONFIG.batchSize));
  }

  console.log(
    `[IndexNow] Batching into ${batches.length} request(s) ` +
      `(max ${CONFIG.batchSize} per batch)\n`
  );

  let successCount = 0;
  let failCount = 0;

  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b];
    const payload = {
      host: CONFIG.host,
      key: CONFIG.key,
      keyLocation: `https://${CONFIG.host}/${CONFIG.key}.txt`,
      urlList: batch,
    };

    const label = `Batch ${b + 1}/${batches.length} (${batch.length} URLs)`;

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), CONFIG.timeoutMs);

      const response = await fetch(CONFIG.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timer);

      if (response.ok) {
        console.log(`[IndexNow] ✅ ${label} — HTTP ${response.status}`);
        successCount++;
      } else {
        // 403 = key not yet verified (expected on first deploy)
        // 429 = rate limited (retry later)
        const body = await response.text().catch(() => "(no body)");
        console.log(
          `[IndexNow] ⚠️  ${label} — HTTP ${response.status} ` +
            `(${body.slice(0, 200)})`
        );
        failCount++;
      }
    } catch (err) {
      // Network error, timeout, DNS failure, etc.
      const reason =
        err.name === "AbortError"
          ? "timeout"
          : err.cause?.code || err.message || String(err);
      console.log(`[IndexNow] ⚠️  ${label} — ${reason}`);
      failCount++;
    }
  }

  // ---- Step 4: Summary ----
  console.log();
  console.log("=".repeat(60));
  console.log("[IndexNow] Submission complete.");
  console.log(`[IndexNow] ✅ Succeeded: ${successCount} batch(es)`);
  console.log(`[IndexNow] ⚠️  Failed:    ${failCount} batch(es)`);
  console.log(
    `[IndexNow] 📊 URLs sent: ${
      successCount > 0 ? urlList.length : 0
    }`
  );
  if (failCount > 0) {
    console.log(
      "[IndexNow] 💡 First deploy? Key verification takes ~24h. 403s are expected."
    );
  }
  console.log("=".repeat(60));

  // ALWAYS exit 0 — never block the build
  process.exit(0);
}

main();
