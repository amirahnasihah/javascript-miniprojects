// Challenge:
// When the user clicks on the "Pick Fighters" button, pick two random
// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
// hint: generate random number as index which then use to fetch the emojis

let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
  "🐿️",
  "🦑",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  // console.log("pick fighters btn click!");

  const randomIndexOne = Math.floor(Math.random() * fighters.length);
  const randomIndexTwo = Math.floor(Math.random() * fighters.length);
  // console.log(randomIndex);
  stageEl.textContent =
    fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
});
