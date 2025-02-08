export class Model {
  name: string;
  agility: number;
  presence: number;
  strength: number;
  toughness: number;

  constructor(name: string) {
    this.name = name;
    this.agility = 0;
    this.presence = 0;
    this.strength = 0;
    this.toughness = 0;
  }


  public getHealth() {
    return this.toughness + 8;
  }

  public getMovement() {
    return this.agility + 5;
  }

}
