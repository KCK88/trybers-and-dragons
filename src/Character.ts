import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  name: string;
  race: Race;
  archetype: Archetypes;
  private maxLifePoints: number;
  readonly strength: number;
  readonly lifePoints: number;
  readonly defense: number;
  readonly dexterity: number;
  private _energy: Energy;
  constructor(_name: string) {
    this.name = _name;
    this.dexterity = Math.floor(Math.random() * 10) + 1;
    this.race = new Elf(this.name, this.dexterity);
    this.archetype = new Mage(this.name);
    this.strength = Math.floor(Math.random() * 10) + 1;
    this.defense = Math.floor(Math.random() * 10) + 1;
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this.lifePoints = this.maxLifePoints;
    this._energy = { type_: this.archetype.energyType, amount: Math.floor(Math.random() * 10) + 1 };
  }

  get energy(): Energy {
    return this._energy;
  }
  
  attack(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

  special?(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

  levelUp(): void {
    throw new Error('Method not implemented.');
  }

  receiveDamage(attackPoints: number): number {
    throw new Error('Method not implemented.');
  }
}