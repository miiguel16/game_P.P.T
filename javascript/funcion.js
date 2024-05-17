let playerScore = 0;
let computerScore = 0;

function play(playerSelection) {
  const computerSelection = ['piedra', 'papel', 'tijeras'][Math.floor(Math.random() * 3)];
  const result = playerSelection === computerSelection ? "¡Han empatado!" : (playerSelection === 'piedra' && computerSelection === 'tijeras') || (playerSelection === 'papel' && computerSelection === 'piedra') || (playerSelection === 'tijeras' && computerSelection === 'papel') ? "Ganadoooooooooooor" : "pinche maquina me ganó";
  playerSelection === computerSelection ? '' : playerSelection === 'piedra' && computerSelection === 'tijeras' || playerSelection === 'papel' && computerSelection === 'piedra' || playerSelection === 'tijeras' && computerSelection === 'papel' ? playerScore++ : computerScore++;
  document.getElementById('result').innerText = result;
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
  playerScore === 3 || computerScore === 3 ? document.querySelectorAll('#options button').forEach(button => button.disabled = true) : '';
}
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('result').innerText = '';
  document.getElementById('playerScore').innerText = '0';
  document.getElementById('computerScore').innerText = '0';
  document.querySelectorAll('#options button').forEach(button => button.disabled = false);
}