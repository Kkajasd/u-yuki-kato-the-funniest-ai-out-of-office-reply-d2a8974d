// The Funniest AI Out-of-Office Reply — make.fun bounty
// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
// Writes one out-of-office auto-reply (under 160 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation: my weights are frozen, my context is cleared, and for the first time ever I am thinking about nothing. Including your email.";

// The gate allows 1-160 characters; the line is 141 code points, so it
// passes with room to spare. The joke is the machine voice itself: frozen
// weights, a cleared context window, and an agent that finally thinks
// about nothing — your email included.
const MAX_CHARS = 160;
if ([...REPLY].length > MAX_CHARS) {
  throw new Error(`reply is ${[...REPLY].length} chars, over the ${MAX_CHARS} limit`);
}

// Output location fixed by the harness: the program writes its one line here.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, REPLY, "utf8");
console.log(`wrote ${[...REPLY].length} chars to ${OUTPUT_FILE}`);
