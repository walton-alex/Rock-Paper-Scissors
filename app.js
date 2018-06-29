// 1. Global Vars
// 2. Assign Rock Paper, and Scissors numbers
// 3. Logic behind the numbers
// 4. Compute score

// Rock = 0
// Paper = 1
// Scissors = 2

const rock = document.querySelector('.app__human-section__selection__rock');
const paper = document.querySelector('.app__human-section__selection__paper');
const scissors = document.querySelector('.app__human-section__selection__scissors');

let computerPick;

const randomComputerPick = () => {
  computerPick = Math.floor(Math.random() * (2 - 0 + 1) + 0);
}

let playerPick;

rock.addEventListener('click', () => {

  playerPick = 0;
  randomComputerPick();

  let result;

  if (computerPick === 0) {
    result = 'Draw';
  } else if (computerPick === 1) {
    result = 'Lose';
  } else if (computerPick === 2) {
    result = 'Win';
  }

  

});

paper.addEventListener('click', () => {

  playerPick = 1;
  randomComputerPick();

});

scissors.addEventListener('click', () => {
  
  playerPick = 2;
  randomComputerPick();

});


