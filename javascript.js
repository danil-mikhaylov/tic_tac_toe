let area = document.getElementById("area");
let currentPlayer = "X";
let cells = document.getElementsByClassName("cell");
let winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Добавляем возможность ставить крестики/нолики
area.addEventListener("click", function (event) {
  if (event.target.classList[0]) {
    if (currentPlayer === "X") {
      event.target.innerHTML = "X";
      switchCurrentPlayer();
      setTimeout(checkWin, 100);
    } else {
      event.target.innerHTML = "0";
      switchCurrentPlayer();
      setTimeout(checkWin, 100);
    }
  }
});

function victory() {
  alert(`Победили ${currentPlayer}`);
  location.reload();
}

function tie() {
  alert(`Ничья!`);
  location.reload();
}

function switchCurrentPlayer() {
  if (currentPlayer === "0") {
    currentPlayer = "X";
  } else {
    currentPlayer = "0";
  }
}

function checkWin() {
  let marked = 0;
  if (
    cells[0].innerHTML &&
    cells[1].innerHTML &&
    cells[2].innerHTML &&
    cells[3].innerHTML &&
    cells[4].innerHTML &&
    cells[5].innerHTML &&
    cells[6].innerHTML &&
    cells[7].innerHTML &&
    cells[8].innerHTML
  )
    tie();

  for (let i = 0; i < winCombinations.length; i++) {
    if (
      cells[winCombinations[i][0]].innerHTML === "X" &&
      cells[winCombinations[i][1]].innerHTML === "X" &&
      cells[winCombinations[i][2]].innerHTML === "X"
    ) {
      switchCurrentPlayer();
      setTimeout(victory, 100);
    } else if (
      cells[winCombinations[i][0]].innerHTML === "0" &&
      cells[winCombinations[i][1]].innerHTML === "0" &&
      cells[winCombinations[i][2]].innerHTML === "0"
    ) {
      switchCurrentPlayer();
      setTimeout(victory, 100);
    }
  }
}
