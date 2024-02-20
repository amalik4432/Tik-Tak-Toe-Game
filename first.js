let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#resetBtn');
let msg = document.querySelector('#Message');
let turnO = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerText = 'O';
      turnO = false;
    } else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  unLockGame();
  msg.innerText = `Game is Reset Play Now Again`;
  msg.style.backgroundColor = ' #191913';
};

const lockGame = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const unLockGame = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};

const showWinner = (pos1) => {
  msg.innerText = `Congratulations! Player ${pos1} wins!`;
  msg.style.backgroundColor = 'green';
  lockGame();
};

const checkWinner = () => {
  for (const pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != '' && pos2 != '' && pos3 != '') {
      if (pos1 == pos2 && pos2 == pos3) {
        showWinner(pos1);
      }
    }
  }
};

resetButton.addEventListener('click', resetGame);
