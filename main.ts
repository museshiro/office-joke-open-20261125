import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

const SEGMENTS = [
  "I expensed my burrito as a client lunch,",
  "and accounting approved it because the receipt",
  "listed Extra Guac under attendees.",
];

const LINE = SEGMENTS.join(" ");

function validateEntry(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length < 1 || trimmed.length > 200) {
    throw new Error(`entry length out of gate: ${trimmed.length}`);
  }
  if (trimmed.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return trimmed;
}

function writeEntry(): void {
  const entry = validateEntry(LINE);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, entry, "utf8");
}

writeEntry();
