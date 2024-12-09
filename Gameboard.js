// Gameboard.js
const Ship = require('./Ship');

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
  }

  placeShip(length, coordinates) {
    const ship = new Ship(length);
    this.ships.push({ ship, coordinates });
  }

  receiveAttack(coordinate) {
    for (const { ship, coordinates } of this.ships) {
      if (coordinates.includes(coordinate)) {
        ship.hit();
        return true;
      }
    }
    this.missedShots.push(coordinate);
    return false;
  }

  allShipsSunk() {
    return this.ships.every(({ ship }) => ship.isSunk());
  }
}

module.exports = Gameboard;