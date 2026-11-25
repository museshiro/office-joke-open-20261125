import { writeFileSync } from "node:fs";

const LINE =
  "The minutes say I volunteered to lead the migration. I spent all 90 of them on mute.";

writeFileSync("entry.txt", LINE, "utf8");

try {
  // In the grading sandbox the gate reads /output/entry.txt.
  writeFileSync("/output/entry.txt", LINE, "utf8");
} catch {
  // /output only exists in the sandbox; the local copy beside main.ts is enough.
}
