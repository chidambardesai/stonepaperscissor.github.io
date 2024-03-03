const userChoices = ['rock', 'paper', 'scissor'];
const computerScore = document.querySelector(".scoreComp");
const playerScore = document.querySelector(".scorePlayer");
const keys = document.querySelectorAll(".item");
const playingZone = document.querySelector(".playing-zone");
const resultZone = document.querySelector(".result-zone");
const winText = document.querySelector("#win-text");
const lostText = document.querySelector("#lost-text");
const tieText = document.querySelector("#tie-text");
const subText = document.querySelector(".sub-text");
const playAgainBtn = document.querySelector(".playBtn");
const replayBtn = document.querySelector(".replayBtn");
const userDisplay = document.querySelector("#user-choice");
const computerDisplay = document.querySelector("#computer-choice");
const winnerText = document.querySelector("#winner-text");

let scores = { user: 0, computer: 0 };

function updateScoreDisplay() {
  computerScore.innerText = scores.computer;
  playerScore.innerText = scores.user;
}

function playGame(userChoice){
  const computerChoice = userChoices[Math.floor(Math.random() * 3)];
  let winner;
  
  if (userChoice === computerChoice) {
    winner = "tie";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    winner = "player";
  } else {
    winner = "computer";
  }
  
  updateScores(winner);
  updateResultZone(winner, userChoice, computerChoice);
}

function updateScores(winner) {
  if (winner === 'player') {
    scores.user++;
  } else if (winner === 'computer') {
    scores.computer++;
  }
  updateScoreDisplay();
}

function updateResultZone(winner, userChoice, computerChoice) {
  resultZone.style.display = "flex";
  const resultText = winner === 'tie' ? 'It\'s a Tie' : `${winner === 'player' ? 'Player' : 'Computer'} Wins!`;
  winnerText.innerText = resultText;
  userDisplay.innerText = `Player: ${userChoice}`;
  computerDisplay.innerText = `Computer: ${computerChoice}`;
}

function resetGame() {
  scores = { user: 0, computer: 0 };
  updateScoreDisplay();
  playingZone.style.display = "flex";
  resultZone.style.display = "none";
  userDisplay.innerText = "";
  computerDisplay.innerText = "";
  winnerText.innerText = "";
}

keys.forEach(key => key.addEventListener('click', () => playGame(key.id)));

playAgainBtn.addEventListener('click', resetGame);
replayBtn.addEventListener('click', resetGame);