const diceSelect = document.querySelector("#dice-select");
const rollBtn = document.querySelector("#roll-btn");
const clearBtn = document.querySelector("#clear-btn");
const results = document.querySelector("#results");

let rolls = [];

function rollDice(numFaces) {
  const result = Math.floor(Math.random() * numFaces) + 1;
  rolls.push(result);
  return result;
}

rollBtn.addEventListener("click", () => {
  const numFaces = parseInt(diceSelect.value);
  const result = rollDice(numFaces);
  results.innerHTML += `<br>Roll ${rolls.length}: ${result}`;
});

clearBtn.addEventListener("click", () => {
  rolls = [];
  results.innerHTML = "";
});
