import Race from './Races';

export default class Elf extends Race {
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static _instances = 0;
  _maxLifePoints: number;

  static createdRacesInstances(): number {
    return Elf._instances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instances += 1;
  }
}