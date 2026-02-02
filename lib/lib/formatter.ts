import { QUESTIONS } from "./questions";
import type { Answers } from "./types";

const DEFAULT_TAGS: Record<string, string[]> = {
  hair_style: ["sleek straight hair"],
  makeup: ["natural makeup"],
  lighting: ["cinematic soft lighting"],
  camera_distance: ["medium shot"],
  mood: ["elegant", "cinematic"]
};

export function buildPrompt(answers: Answers) {
  const missingRequired: string[] = [];
  const collectedTags: string[] = [];

  for (const q of QUESTIONS) {
    const selected = answers[q.id];

    if (q.required && !selected) {
      missingRequired.push(q.id);
      continue;
    }

    if (selected) {
      const opt = q.options.find(o => o.id === selected);
      if (opt) collectedTags.push(...opt.tags);
    } else if (DEFAULT_TAGS[q.id]) {
      collectedTags.push(...DEFAULT_TAGS[q.id]);
    }
  }

  const base = [
    "ultra photorealistic night portrait of an adult woman",
    "tasteful, non-explicit",
    "highly detailed skin texture",
    "sharp focus, soft background bokeh"
  ];

  const prompt = [...base, ...collectedTags]
    .filter((v, i, a) => a.indexOf(v) === i)
    .join(", ");

  return { prompt, missingRequired };
}
