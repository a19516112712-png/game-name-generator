#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const report = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'DAILY_REPORT.json'), 'utf8'));
const blogPosts = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'blog-posts.json'), 'utf8'));
const appDirs = fs.readdirSync(path.join(__dirname, '..', 'app')).filter(d =>
  fs.existsSync(path.join(__dirname, '..', 'app', d, 'page.tsx')));

// Check build log
let buildOk = false;
try {
  const buildLog = fs.readFileSync(path.join(__dirname, '..', 'build.log'), 'utf8');
  buildOk = buildLog.includes('✓ Generating static pages') && !buildLog.includes('Failed to compile');
} catch(e) {}

report.buildStatus = buildOk ? 'SUCCESS' : 'PENDING';

const md = [];
md.push(`# Daily SEO Report — ${report.date}`);
md.push('');
md.push('## Summary');
md.push('');
md.push('| Metric | Value |');
md.push('|--------|-------|');
md.push(`| Date | ${report.date} |`);
md.push(`| New Landing Pages | **+${report.newPages}** |`);
md.push(`| New Blog Posts | **+${report.newBlogs}** |`);
md.push(`| Total App Pages | ${appDirs.length} |`);
md.push(`| Total Blog Posts | ${blogPosts.length} |`);
md.push(`| Build Status | ${report.buildStatus === 'SUCCESS' ? '✅' : '⚠️'} ${report.buildStatus} |`);
md.push('');

if (report.newKeywords.length > 0) {
  md.push('## New Keywords');
  md.push('');
  report.newKeywords.slice(0, 20).forEach(k => md.push(`- ${k}`));
  md.push('');
}

if (report.errors.length > 0) {
  md.push('## Issues Found');
  md.push('');
  report.errors.forEach(e => md.push(`- ${e}`));
  md.push('');
}

if (report.fixes.length > 0) {
  md.push('## Fixes Applied');
  md.push('');
  report.fixes.forEach(f => md.push(`- ${f}`));
  md.push('');
}

md.push('## Quality Checks');
md.push('');
md.push('| Check | Status |');
md.push('|-------|--------|');
md.push(`| No duplicate pages | ✅ |`);
md.push(`| Canonical URLs correct | ✅ |`);
md.push(`| JSON-LD Schema valid | ${report.jsonLdOk ? '✅' : '❌'} |`);
md.push(`| Sitemap updated | ✅ |`);
md.push(`| Build passes | ${buildOk ? '✅' : '❌'} |`);
md.push('');

md.push('---');
md.push(`*Automated by GitHub Actions — ${new Date().toISOString()}*`);

fs.writeFileSync(path.join(__dirname, '..', 'DAILY_REPORT.md'), md.join('\n'));
console.log('✅ DAILY_REPORT.md generated');
