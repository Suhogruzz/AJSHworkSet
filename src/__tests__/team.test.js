import Team from '../team';
import Character from '../character';

test('check add()', () => {
  const team = new Team();
  const character1 = new Character('Ryan');
  team.add(character1);
  expect(() => team.members.has(character1)).toBeTruthy();
});

test('check addAll()', () => {
  const team = new Team();
  const character1 = new Character('Ryan');
  const character2 = new Character('Gosling');
  const character3 = new Character('Driver');
  team.addAll(character1, character2, character3);
  expect(team.members.size).toBe(3);
});

test('dupe error in add()', () => {
  const team = new Team();
  const character1 = new Character('Ryan');
  team.add(character1);
  expect(() => team.add(character1)).toThrow();
});

test('no dupes in addAll()', () => {
  const team = new Team();
  const character1 = new Character('Ryan');
  team.addAll(character1, character1);
  expect(team.members.size).toBe(1);
});

test('check toArray()', () => {
  const team = new Team();
  const character1 = new Character('Ryan');
  const character2 = new Character('Gosling');
  team.addAll(character1, character2);
  expect(team.toArray()).toEqual([character1, character2]);
});
