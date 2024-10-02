import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  get energyType(): EnergyType {
    return this._energyType;
  }

  _energyType: EnergyType;
  static _instances = 0;
  
  static createdArchetypeInstances() {
    return Warrior._instances;
  }

  constructor(name: string) {
    super(name);
    Warrior._instances += 1;
    this._energyType = 'stamina';
  }
}