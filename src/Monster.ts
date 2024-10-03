import Character from './Character';
import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  _lifePoints: number;
  _strength: number;
  
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }
  
  character = new Character('');

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.character.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    } else { this._lifePoints = this.lifePoints - damage; }
    return this.lifePoints;
  }
}