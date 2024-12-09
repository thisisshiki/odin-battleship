const Ship = require('./Ship');

test('Ship should be created with correct length', () => {
  const ship = new Ship(4);
  expect(ship.length).toBe(4);
  expect(ship.hits).toBe(0);
});

test('Ship should register hits', () => {
  const ship = new Ship(4);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('Ship should be sunk after enough hits', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
