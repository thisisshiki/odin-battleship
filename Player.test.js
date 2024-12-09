// Player.test.js
const Player = require('./Player');
const Gameboard = require('./Gameboard');

test('Player should make a move on opponent gameboard', () => {
  const player = new Player();
  const opponentGameboard = new Gameboard();
  opponentGameboard.placeShip(2, ['A1', 'A2']);
  expect(player.makeMove('A1', opponentGameboard)).toBe(true);
  expect(opponentGameboard.ships[0].ship.hits).toBe(1);
});

test('Computer player should make a random move', () => {
  const player = new Player(true);
  const opponentGameboard = new Gameboard();
  opponentGameboard.placeShip(2, ['A1', 'A2']);
  player.randomMove(opponentGameboard);
  expect(opponentGameboard.missedShots.length + opponentGameboard.ships[0].ship.hits).toBe(1);
});