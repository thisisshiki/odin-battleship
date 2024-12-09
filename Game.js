// Game.js
const Player = require('./Player');

class Game {
  constructor() {
    this.player = new Player();
    this.computer = new Player(true);
    this.currentPlayer = this.player;
  }

  startGame() {
    // Initialize gameboards with predetermined coordinates
    this.player.gameboard.placeShip(3, ['A1', 'A2', 'A3']);
    this.computer.gameboard.placeShip(3, ['B1', 'B2', 'B3']);
  }

  playTurn(coordinate) {
    const opponent = this.currentPlayer === this.player ? this.computer : this.player;
    const hit = this.currentPlayer.makeMove(coordinate, opponent.gameboard);
    this.checkGameOver();
    this.switchPlayer();
    return hit;
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === this.player ? this.computer : this.player;
  }

  checkGameOver() {
    if (this.player.gameboard.allShipsSunk() || this.computer.gameboard.allShipsSunk()) {
      console.log('Game Over');
      return true;
    }
    return false;
  }
}

module.exports = Game;