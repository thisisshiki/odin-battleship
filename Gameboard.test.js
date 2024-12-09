// Gameboard.test.js
const Gameboard = require('./Gameboard');

test('Gameboard should place ships correctly', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, ['A1', 'A2', 'A3']);
  expect(gameboard.ships.length).toBe(1);
});

test('Gameboard should register hits on ships', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, ['A1', 'A2', 'A3']);
  expect(gameboard.receiveAttack('A1')).toBe(true);
  expect(gameboard.ships[0].ship.hits).toBe(1);
});

test('Gameboard should register missed shots', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, ['A1', 'A2', 'A3']);
  expect(gameboard.receiveAttack('B1')).toBe(false);
  expect(gameboard.missedShots.length).toBe(1);
});

test('Gameboard should report when all ships are sunk', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(2, ['A1', 'A2']);
  gameboard.receiveAttack('A1');
  gameboard.receiveAttack('A2');
  expect(gameboard.allShipsSunk()).toBe(true);
});