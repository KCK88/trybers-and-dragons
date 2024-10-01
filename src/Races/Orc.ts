import Race from './Races';

export default class Orc extends Race {
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static _instances = 0;
  _maxLifePoints: number;

  static createdRacesInstances(): number {
    return Orc._instances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instances += 1;
  }
}