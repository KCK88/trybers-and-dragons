import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  name: string;
  race: Race;
  private _archetype: Archetypes;
  private _maxLifePoints: number;
  private _strength: number;
  private _lifePoints: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(_name: string) {
    this.name = _name;
    this._dexterity = getRandomInt(1, 10);
    this.race = new Elf(this.name, this.dexterity);
    this._archetype = new Mage(this.name);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._energy = { 
      type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  get archetype(): Archetypes {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    enemy.receiveDamage((this.race.maxLifePoints * this._strength) / 2);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } 
    this._lifePoints = this._maxLifePoints;
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    } 
    return this.lifePoints;
  }
}