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

const computerRock = document.querySelector('.app__computer-section__selection__rock');
const computerPaper = document.querySelector('.app__computer-section__selection__paper');
const computerScissors = document.querySelector('.app__computer-section__selection__scissors');

const resultNumber = document.querySelector('.app__human-section__result__number');
const computerResultNumber = document.querySelector('.app__computer-section__result__number');

let playerScore = 0;
let computerScore = 0;

let computerPick;

const randomComputerPick = () => {
  computerPick = Math.floor(Math.random() * (2 - 0 + 1) + 0);
}

let playerPick;

const disabledButton = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

let result = (outcome) => {

  // window.alert(outcome);

  if (outcome === 'Win') {
    playerScore++;
  } else if (outcome === 'Draw') {
    return;
  } else if (outcome === 'Lose') {
    computerScore++;
  }

  resultNumber.innerHTML = playerScore;
  computerResultNumber.innerHTML = computerScore;

}

const reset = () => {
  
  rock.classList.remove('app__human-section__selection__rock--chosen');
  paper.classList.remove('app__human-section__selection__paper--chosen');
  scissors.classList.remove('app__human-section__selection__scissors--chosen');

  computerRock.classList.remove('app__computer-section__selection__rock--chosen');
  computerPaper.classList.remove('app__computer-section__selection__paper--chosen');
  computerScissors.classList.remove('app__computer-section__selection__scissors--chosen');

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;

}

rock.addEventListener('click', () => {

  disabledButton();

  playerPick = 0;
  rock.classList.add('app__human-section__selection__rock--chosen');

  randomComputerPick();

  let outcome;

  if (computerPick === 0) {
    computerRock.classList.add('app__computer-section__selection__rock--chosen');
    outcome = 'Draw';
  } else if (computerPick === 1) {
    computerPaper.classList.add('app__computer-section__selection__paper--chosen');
    outcome = 'Lose';
  } else if (computerPick === 2) {
    computerScissors.classList.add('app__computer-section__selection__scissors--chosen');
    outcome = 'Win';
  }

  result(outcome);
  
  setTimeout(() => {
    reset();
  }, 1000);

});

paper.addEventListener('click', () => {

  disabledButton();

  playerPick = 1;
  paper.classList.add('app__human-section__selection__paper--chosen');

  randomComputerPick();

  let outcome;

  if (computerPick === 0) {
    computerRock.classList.add('app__computer-section__selection__rock--chosen');
    outcome = 'Win';
  } else if (computerPick === 1) {
    computerPaper.classList.add('app__computer-section__selection__paper--chosen');
    outcome = 'Draw';
  } else if (computerPick === 2) {
    computerScissors.classList.add('app__computer-section__selection__scissors--chosen');
    outcome = 'Lose';
  }

  result(outcome);
  
  setTimeout(() => {
    reset();
  }, 1000);

});

scissors.addEventListener('click', () => {

  disabledButton();
  
  playerPick = 2;
  scissors.classList.add('app__human-section__selection__scissors--chosen');

  randomComputerPick();

  let outcome;

  if (computerPick === 0) {
    computerRock.classList.add('app__computer-section__selection__rock--chosen');
    outcome = 'Lose';
  } else if (computerPick === 1) {
    computerPaper.classList.add('app__computer-section__selection__paper--chosen');
    outcome = 'Win';
  } else if (computerPick === 2) {
    computerScissors.classList.add('app__computer-section__selection__scissors--chosen');
    outcome = 'Draw';
  }

  result(outcome);
  
  setTimeout(() => {
    reset();
  }, 1000);

});
