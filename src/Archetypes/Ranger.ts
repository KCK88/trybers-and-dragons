import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  get energyType(): EnergyType {
    return this._energyType;
  }

  _energyType: EnergyType;
  static _instances = 0;
  
  static createdArchetypeInstances() {
    return Ranger._instances;
  }

  constructor(name: string) {
    super(name);
    Ranger._instances += 1;
    this._energyType = 'stamina';
  }
}