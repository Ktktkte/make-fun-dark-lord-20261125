import { mkdirSync, writeFileSync } from "node:fs";

// The Tired Dark Lord: a 100-word villain monologue.
// Spoken by the keeper of a lighthouse that guides dead ships.
// The tiredness lives in the deflections, never in a plain confession.
const MONOLOGUE =
  "You want the lighthouse, hero. Take it. The lamp oil is in the cellar, " +
  "the logbook is three years behind, and the stairs— the stairs are the " +
  "real villain here, ask my knees. I meant to sink your fleet on Tuesday. " +
  "I wrote it down. Somewhere. The ink ran out, the quill broke, and the " +
  "tide came in through a crack I have been meaning to seal since your " +
  "grandfather was a boy. So. Kneel, or don't. The execution is scheduled " +
  "for dawn, assuming dawn bothers to show up. Tonight you live. Not " +
  "mercy. I simply cannot be bothered to stand up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate: entry must be 1–600 chars of UTF-8 text, not only whitespace.
if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600 || !MONOLOGUE.trim()) {
  throw new Error(`monologue length ${MONOLOGUE.length} outside 1-600 char gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, MONOLOGUE + "\n", "utf8");
