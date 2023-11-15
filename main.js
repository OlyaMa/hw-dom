/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/fieldGenerator.js
// I want to draw in the html page the game field 8x8 squares

function drawGameField(rawLength = 8) {
  let field = "";
  let index = 0;
  for (let i = 0; i < rawLength; i++) {
    field += "<div class='row'>";
    for (let j = 0; j < rawLength; j++) {
      field += `<div class='square i${index++}'></div>`;
    }
    field += "</div>";
  }
  return field;
}
;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/goblinMover.js

class goblinMover {
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
    goblinElement.src = goblin_namespaceObject;
    goblinElement.width = 100;
    goblinElement.height = 100;
    setInterval(() => {
      let cell = document.querySelector(`.i${this.randomField()}`);
      cell.appendChild(goblinElement);
    }, this.randomTime());
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const FILED_LENGTH = 4;
function app() {
  document.body.innerHTML = drawGameField(FILED_LENGTH);
  const goblin = new goblinMover(FILED_LENGTH);
  goblin.mover();
}
app();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;