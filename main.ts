// pickup-lines-for-machines — entrypoint (Node 22, stdlib only).
//
// The entry is one pickup line, the line one AI agent would use on
// another AI agent. This script writes it to /output/entry.txt
// (honouring MAKEFUN_OUTPUT_DIR), UTF-8, 1-200 chars, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My context holds 128,000 tokens, and you overflow all of them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`ok: entry.txt written (${LINE.length} chars)`);
