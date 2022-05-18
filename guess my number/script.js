'use strict';

// create a secret number
//set the scores to a number
//add event listerner
//if no guess..write a code
//if guess is correct, display a message, change color and width
//if guess is above or below number, write a message, reduces scores and kill game at score 0
//

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumberWidth = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayNumber = function (secret) {
  document.querySelector('.number').textContent = secret;
};
const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};
const displayBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const displayScores = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

//game logics
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Enter A guess 😒😒');
  } else if (guess === secretNumber) {
    displayMessage('Genuis 🏆🏆🏆');
    displayBackground('#60b347');
    displayNumberWidth('25rem');
    displayNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      score;
      displayScores(score);
      displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
    } else {
      displayMessage('💣💣 Game Over');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScores(score);
  displayGuess('');
  displayNumber('?');
  displayBackground('#222');
  displayNumberWidth('15rem');
  displayMessage('Start guessing ...');
});
