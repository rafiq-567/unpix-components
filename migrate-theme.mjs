/**
 * migrate-theme.mjs
 *
 * Run from your project root:
 *   node migrate-theme.mjs
 *
 * What it does:
 *   - Scans every .jsx / .js file in src/components/fields/
 *   - Replaces hardcoded hex color strings with CSS variables
 *   - Writes the changes back in place
 *   - Prints a summary of every file changed
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = path.join(__dirname, 'src/components/fields');

// ─── Color map: hex → CSS variable ───────────────────────────────────────────
// Order matters — more specific / longer matches first to avoid partial hits.
const COLOR_MAP = [
  // Text
  ['#111827', 'var(--color-text-primary)'],
  ['#1f2937', 'var(--color-text-primary)'],
  ['#374151', 'var(--color-text-secondary)'],
  ['#4b5563', 'var(--color-text-secondary)'],
  ['#6b7280', 'var(--color-text-muted)'],
  ['#9ca3af', 'var(--color-text-placeholder)'],
  ['#d1d5db', 'var(--color-text-disabled)'],

  // Backgrounds
  ['#ffffff', 'var(--color-surface)'],
  ['#fff',    'var(--color-surface)'],
  ['#f9fafb', 'var(--color-bg-subtle)'],
  ['#f3f4f6', 'var(--color-bg-muted)'],
  ['#f1f5f9', 'var(--color-bg-hover)'],
  ['#e2e8f0', 'var(--color-bg-muted)'],

  // Borders
  ['#e5e7eb', 'var(--color-border)'],
  // #d1d5db as border (same token, already mapped to disabled above — context differs
  // but same var is fine since they share the same light value)

  // Accent / Blue
  ['#eff6ff', 'var(--color-accent-subtle)'],
  ['#bfdbfe', 'var(--color-accent-subtle)'],
  ['#1d4ed8', 'var(--color-accent-text)'],
  ['#1e40af', 'var(--color-accent-text)'],
  ['#2563eb', 'var(--color-accent-hover)'],
  ['#3b82f6', 'var(--color-accent)'],
  ['#60a5fa', 'var(--color-accent)'],

  // Success / Green
  ['#f0fdf4', 'var(--color-success-subtle)'],
  ['#bbf7d0', 'var(--color-success-subtle)'],
  ['#86efac', 'var(--color-success)'],
  ['#22c55e', 'var(--color-success)'],
  ['#16a34a', 'var(--color-success-text)'],
  ['#15803d', 'var(--color-success-text)'],
  ['#14532d', 'var(--color-success-text)'],

  // Warning / Amber
  ['#fffbeb', 'var(--color-warning-subtle)'],
  ['#fde68a', 'var(--color-warning-subtle)'],
  ['#fcd34d', 'var(--color-warning)'],
  ['#f59e0b', 'var(--color-warning)'],
  ['#d97706', 'var(--color-warning-text)'],
  ['#b45309', 'var(--color-warning-text)'],
  ['#92400e', 'var(--color-warning-text)'],
  ['#78350f', 'var(--color-warning-text)'],

  // Danger / Red
  ['#fef2f2', 'var(--color-danger-subtle)'],
  ['#fecaca', 'var(--color-danger-subtle)'],
  ['#fca5a5', 'var(--color-danger)'],
  ['#ef4444', 'var(--color-danger)'],
  ['#dc2626', 'var(--color-danger-text)'],
  ['#b91c1c', 'var(--color-danger-text)'],
  ['#991b1b', 'var(--color-danger-text)'],
  ['#7f1d1d', 'var(--color-danger-text)'],

  // Info
  ['#f0f9ff', 'var(--color-info-subtle)'],
  ['#bae6fd', 'var(--color-info-subtle)'],
  ['#0369a1', 'var(--color-accent-text)'],
  ['#0c4a6e', 'var(--color-accent-text)'],

  // Purple (keep as-is — not in theme, brand-specific)
  // ['#8b5cf6', ...],

  // Neutral dark (used in dark surfaces / toasts)
  ['#166534', 'var(--color-success-text)'],
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceColors(source) {
  let result = source;
  let changeCount = 0;

  for (const [hex, cssVar] of COLOR_MAP) {
    // Match the hex string when it appears as a value in JS/JSX:
    // inside quotes: '#374151'  "#374151"
    // or as a bare string in template literals / backtick strings
    // We match case-insensitively so #3B82F6 == #3b82f6
    const pattern = new RegExp(
      `(['"\`])${escapeRegex(hex)}\\1`,
      'gi'
    );
    const before = result;
    result = result.replace(pattern, `'${cssVar}'`);
    if (result !== before) changeCount++;
  }

  return { result, changeCount };
}

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(full));
    } else if (entry.isFile() && /\.(jsx?|tsx?)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

if (!fs.existsSync(COMPONENTS_DIR)) {
  console.error(`❌  Directory not found: ${COMPONENTS_DIR}`);
  console.error(`    Make sure you're running this from your project root.`);
  process.exit(1);
}

const files = walkDir(COMPONENTS_DIR);
console.log(`\n🎨  Theme migration — scanning ${files.length} files in ${COMPONENTS_DIR}\n`);

let totalFiles = 0;
let totalChanges = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  const { result, changeCount } = replaceColors(original);

  if (changeCount > 0) {
    fs.writeFileSync(file, result, 'utf8');
    const rel = path.relative(__dirname, file);
    console.log(`  ✅  ${rel}  (${changeCount} replacement${changeCount > 1 ? 's' : ''})`);
    totalFiles++;
    totalChanges += changeCount;
  }
}

if (totalFiles === 0) {
  console.log('  ℹ️  No hardcoded colors found — components may already be migrated.');
} else {
  console.log(`\n✨  Done! Updated ${totalFiles} file${totalFiles > 1 ? 's' : ''} with ${totalChanges} total replacements.\n`);
  console.log('  Next: make sure src/theme.css is imported in src/main.jsx\n');
}
