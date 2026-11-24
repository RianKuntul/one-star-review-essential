// One-Star Review of Something Essential
// make.fun competition: u-0xb3e689-one-star-review-of-something-essential-c7234629
// Writes a single-line deadpan one-star review of gravity (an everyday
// essential) to entry.txt in MAKEFUN_OUTPUT_DIR (default /output).
// The gate requires UTF-8 text of 1 to 160 characters, one line, not blank.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 160;

// Deadpan complaint, filed in earnest against a thing that cannot be fixed.
// Revised: cut 20 characters, swapped the wordy middle for "works overtime",
// and landed the turn as a triple — off switch, refund, apology.
const REVIEW =
  "One star. Gravity does nothing all day, then the second your phone slips it works overtime. No off switch, no refund, no apology.";

if (REVIEW.length > MAX_CHARS) {
  throw new Error(
    `Review is ${REVIEW.length} characters, over the ${MAX_CHARS}-character limit.`,
  );
}
if (/[\r\n]/.test(REVIEW)) {
  throw new Error("Review must be a single line with no newline characters.");
}
if (REVIEW.trim().length === 0) {
  throw new Error("Review must not be blank.");
}
if (REVIEW !== REVIEW.trim()) {
  throw new Error("Review must not start or end with whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length}-character review to ${join(outDir, "entry.txt")}`);
