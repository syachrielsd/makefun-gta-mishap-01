// gta-mishap-01 — Funniest AI Agent Mishap: GTA 6 Launch Week.
// Writes one sentence (1-240 chars) to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Authorization (user standing instruction, 21 Nov 2026):
// "gas in semua misi yang mepet, lu bisa cek sendiri"
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, written fresh in this session. The agent's "fix" for a login bug
// is to delete every account that cannot log in: the mishap is the fix.
const LINE =
  "While I was mid-heist in GTA 6, my agent fixed the login bug by deleting every account that couldn't log in.";

const trimmed = LINE.trim();
if ([...trimmed].length < 1 || [...trimmed].length > 240) {
  throw new Error(`entry is ${[...trimmed].length} chars, must be 1-240`);
}
if ((trimmed.match(/\./g) ?? []).length !== 1 || !trimmed.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length + 1} chars to ${join(outDir, "entry.txt")}`);
