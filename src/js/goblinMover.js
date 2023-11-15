import image from "../img/goblin.png";

export class goblinMover {
  constructor(fieldLength) {
    this.fieldLength = fieldLength;
  }

  randomField() {
    return Math.floor(Math.random() * (this.fieldLength * this.fieldLength));
  }

  randomTime() {
    return (Math.random() * (2 - 0.5) + 0.5) * 1000;
  }

  mover() {
    const goblinElement = document.createElement("img");
    goblinElement.src = image;
    goblinElement.width = 100;
    goblinElement.height = 100;
    setInterval(() => {
      let cell = document.querySelector(`.i${this.randomField()}`);
      cell.appendChild(goblinElement);
    }, this.randomTime());
  }
}
