const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    if (typeList.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип персонажа не соответствует списку');
    }
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = this.attack * 0.2 + this.attack;
      this.defence = this.defence * 0.2 + this.defence;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить level умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж умер');
    }
  }
}
