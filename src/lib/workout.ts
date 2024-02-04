import { PADWORK_COMBO_TMPL } from "./workout.const";

const PADWORK_COMBOS = PADWORK_COMBO_TMPL.split("\n").map((line) =>
  line.trim().split(" ")
);

export function translatePunch(punch: string | number): string {
  if (typeof punch === "number") return punch.toString();
  else if (punch.endsWith("b")) {
    return punch.replace("b", " body");
  }
  switch (punch) {
    case "rr":
      return "roll right";
    case "rl":
      return "roll left";
    case "sr":
      return "slip right";
    case "sl":
      return "slip left";
    case "s":
      return "slip";
    case "bblk":
      return "body block";
    default:
      return punch;
  }
}

export function translateCombo(combo: (string | number)[]): string {
  return combo?.map(translatePunch).join(" - ");
}

function pickOne<T>(items: T[]): T {
  const index = Math.floor(Math.random() * items.length);
  const item = items[index];
  return item;
}

export function padWorkCallout(): string {
  const combo = pickOne(PADWORK_COMBOS);
  return translateCombo(combo);
}

const PROGRESSION_COMBOS = PADWORK_COMBOS.filter((combo) => combo.length >= 5);

export function getProgression(duration: number): string[][] {
  const combo = pickOne(PROGRESSION_COMBOS);
  const numPhases = Math.floor(duration / 30);
  console.log("phases", numPhases);
  console.log("combo", combo);
  const progression: string[][] = [];
  for (let i = 0; i < (numPhases || 1); i++) {
    console.log("in loop", combo.slice(0, i * -1));
    progression.unshift(i === 0 ? [...combo] : combo.slice(0, i * -1));
  }
  console.log(progression);
  return progression;
}
