'use strict';
let number = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';
  } else if (guess < number) {
    document.querySelector('.message').textContent = '🔻 Your Guess is too low';
    score--;
    document.querySelector('.score').textContent = score;
    console.log(score);
  } else if (guess > number) {
    document.querySelector('.message').textContent =
      '📈 Your Guess is too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent =
      "✅ Hurrayyyy Bubu you guess it right & All Dudu's money is yours";
    // document.querySelector('.number').textContent = number;
    document.querySelector('.img').src =
      'https://raw.githubusercontent.com/shubham1221/guessMyNumber/refs/heads/main/assets/bubuWon.png';
    document.querySelector('.img').style.width = '80%';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').style.background = 'white';
    document.querySelector('.number').style.color = 'white';
    document.querySelector('body').style.background = 'pink';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset Message
  document.querySelector('.message').textContent = 'Start guessing...';
  // Reset input Guess
  document.querySelector('.guess').value = '';
  // Reset ? Number
  // document.querySelector('.number').textContent = '?';
  document.querySelector('.img').src =
    'https://raw.githubusercontent.com/shubham1221/guessMyNumber/refs/heads/main/assets/bubuThink.png';
  document.querySelector('.number').style.background = 'white';
  document.querySelector('.number').style.color = '#222';
  document.querySelector('.score').textContent = 20;
  number = Math.trunc(Math.random() * 20);
  console.log(number);
  score = 20;
  document.querySelector('body').style.background = '#222';
});
