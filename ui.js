const Game = require('./Game');

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.startGame();

  const playerBoard = document.getElementById('player-board');
  const computerBoard = document.getElementById('computer-board');

  function createBoard(boardElement, isPlayer = false) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.coordinate = `${String.fromCharCode(65 + i)}${j + 1}`;
        if (!isPlayer) {
          cell.addEventListener('click', () => handleAttack(cell));
        }
        boardElement.appendChild(cell);
      }
    }
  }

  function handleAttack(cell) {
    const coordinate = cell.dataset.coordinate;
    const hit = game.playTurn(coordinate);
    cell.classList.add(hit ? 'hit' : 'miss');
    if (game.checkGameOver()) {
      alert('Game Over');
    }
  }

  function renderBoard(boardElement, gameboard) {
    for (const { ship, coordinates } of gameboard.ships) {
      for (const coordinate of coordinates) {
        const cell = boardElement.querySelector(`[data-coordinate="${coordinate}"]`);
        if (cell) {
          cell.classList.add('ship');
        }
      }
    }
  }

  createBoard(playerBoard, true);
  createBoard(computerBoard);

  renderBoard(playerBoard, game.player.gameboard);
  renderBoard(computerBoard, game.computer.gameboard);
});