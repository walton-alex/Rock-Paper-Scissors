/*
  Rock = 0
  Paper = 1
  Scissors = 2
*/

const humanSelection = document.querySelector('.app__human-section__selection');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const computerRock = document.querySelector('#computer-rock');
const computerPaper = document.querySelector('#computer-paper');
const computerScissors = document.querySelector('#computer-scissors');

const resultNumber = document.querySelector('.app__human-section__result__number');
const computerResultNumber = document.querySelector('.app__computer-section__result__number');

let playerScore = 0;
let computerScore = 0;

const classArray = [computerRock, computerPaper, computerScissors];

const randomComputerPick = () => {
  computerPick = Math.floor(Math.random() * 3 );

  let addClass = classArray[computerPick];
  addClass.classList.add('app__computer-section__selection__computer-option--chosen');

}

const disabledButton = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

let result = (pick, computerPick) => {

  /*
    Set 'workOutLoser' to be the player's pick + 1. 
    If player pick is equal to computer pick, return (draw).
    Player is always beaten by one above (unless chosing scissors, then is beaten by 0, hence the else if block) e.g:

    0:Rock beaten by 1:Paper
    1:Paper beaten by 2:Scissors

    else if block example:
    2:Scissors beaten by 0:Rock

    By that, so long as the computer pick doesn't = 'workOutLoser', player wins.
  */

  let workOutLoser = pick + 1;

  if (pick === computerPick) {
    return;
  } else if (workOutLoser > 2) {
    workOutLoser = 0;
  }

  if (computerPick == workOutLoser) {
    computerScore++;
  } else if (computerPick != workOutLoser) {
    playerScore++;
  }

  resultNumber.innerHTML = playerScore;
  computerResultNumber.innerHTML = computerScore;

}

const reset = () => {
  
  const elementsToReset = document.querySelectorAll('.app__human-section__selection__option--chosen');
  const elementsToResetComp = document.querySelectorAll('.app__computer-section__selection__computer-option--chosen');

  elementsToReset.forEach(element => {
    element.classList.remove('app__human-section__selection__option--chosen');
  });

  elementsToResetComp.forEach(element => {
    element.classList.remove('app__computer-section__selection__computer-option--chosen');
  });

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;

}

humanSelection.addEventListener('click', ({target}) => {

  if (target && target.matches('button')) {

    disabledButton();

    target.classList.add('app__human-section__selection__option--chosen');
    let pick = parseInt(target.getAttribute('data-pick'));

    randomComputerPick();

    result(pick, computerPick);

      setTimeout(() => {
        reset();
      }, 1000);

  }

});