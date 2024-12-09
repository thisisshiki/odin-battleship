// Player.js
const Gameboard = require('./Gameboard');

class Player {
  constructor(isComputer = false) {
    this.gameboard = new Gameboard();
    this.isComputer = isComputer;
  }

  makeMove(coordinate, opponentGameboard) {
    return opponentGameboard.receiveAttack(coordinate);
  }

  randomMove(opponentGameboard) {
    const coordinate = this.generateRandomCoordinate();
    return this.makeMove(coordinate, opponentGameboard);
  }

  generateRandomCoordinate() {
    const letters = 'ABCDEFGHIJ';
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const number = Math.floor(Math.random() * 10) + 1;
    return `${letter}${number}`;
  }
}

module.exports = Player;