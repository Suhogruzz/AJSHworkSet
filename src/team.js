export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('Персонаж с таким именем уже существует');
    }
  }

  addAll(...characters) {
    characters.forEach((e) => this.members.add(e));
  }

  toArray() {
    return [...this.members];
  }
}
