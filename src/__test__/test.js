import Character from '../character';

test('Character correct', () => {
  const character = new Character('hero', 'Bowman');
  const correct = {
    name: 'hero', type: 'Bowman', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(character).toEqual(correct);
});

test('Name not correct', () => {
  expect(() => new Character('h', 'Bowman')).toThrow(Error);
});

test('Type not correct', () => {
  expect(() => new Character('hero', 'Swordsmans')).toThrow(Error);
});

test('levelUp correct work', () => {
  const character = new Character('hero', 'Bowman');
  character.levelUp();
  const correct = {
    name: 'hero', type: 'Bowman', health: 100, level: 2, attack: 12, defence: 48,
  };
  expect(character).toEqual(correct);
});

test('levelUp if health = 0', () => {
  const character = new Character('hero', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(Error);
});

test('damage if health >= 0', () => {
  const character = new Character('hero', 'Bowman');
  character.damage(20);
  const correct = {
    name: 'hero', type: 'Bowman', health: 88, level: 1, attack: 10, defence: 40,
  };
  expect(character).toEqual(correct);
});

test('damage if health < 0', () => {
  const character = new Character('hero', 'Bowman');
  character.health = -20;
  expect(() => character.damage(20)).toThrow(Error);
});
