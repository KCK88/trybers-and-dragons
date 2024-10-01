import Race from './Races';

export default class Dwarf extends Race {
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static _instances = 0;
  _maxLifePoints: number;

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }
}
