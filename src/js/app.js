import { drawGameField } from "./fieldGenerator.js";
import { goblinMover } from "./goblinMover.js";

const FILED_LENGTH = 4;
export default function app() {
  document.body.innerHTML = drawGameField(FILED_LENGTH);
  const goblin = new goblinMover(FILED_LENGTH);
  goblin.mover();
}

app();
