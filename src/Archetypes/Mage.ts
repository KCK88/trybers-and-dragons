import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Mage extends Archetypes {
  get energyType(): EnergyType {
    return this._energyType;
  }
  
  _energyType: EnergyType;
  static _instances = 0;
  
  static createdArchetypeInstances() {
    return Mage._instances;
  }

  constructor(name: string) {
    super(name);
    Mage._instances += 1;
    this._energyType = 'mana';
  }
}