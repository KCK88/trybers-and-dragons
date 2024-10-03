import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private necromancerP: Fighter = new Character('Mendeln'),
    private mageP: Fighter = new Character('Gandalf'),
  ) {
    super(necromancerP);
  }

  fight(): number {
    while (this.necromancerP.lifePoints > 0 && this.mageP.lifePoints > 0) {
      this.necromancerP.attack(this.mageP);
      if (this.mageP.lifePoints <= 0) break;
      
      this.mageP.attack(this.necromancerP);
    }

    return super.fight();
  }
}