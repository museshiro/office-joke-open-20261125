import { mkdirSync, writeFileSync } from "node:fs";

// One line about the office joke open: the minutes say I volunteered.
// Writes ONLY to /output/entry.txt (the grader's path) — no relative
// write, so the program cannot throw in a read-only sandbox.
const line =
  "The minutes say I volunteered to lead the migration. I spent all 90 of them on mute.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
