import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  constructor(private _name: string) {}

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this.special;
  }

  get cost(): number {
    return this.cost;
  }

  abstract get energyType(): EnergyType;
}