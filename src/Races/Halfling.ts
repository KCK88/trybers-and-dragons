import Race from './Races';

export default class Halfling extends Race {
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static _instances = 0;
  _maxLifePoints: number;

  static createdRacesInstances(): number {
    return Halfling._instances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }
}