import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  get energyType(): EnergyType {
    return this._energyType;
  }

  _energyType: EnergyType;
  static _instances = 0;
  
  static createdArchetypeInstances() {
    return Necromancer._instances;
  }
  
  constructor(name: string) {
    super(name);
    Necromancer._instances += 1;
    this._energyType = 'mana';
  }
}