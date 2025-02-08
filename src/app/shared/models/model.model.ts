export class Model {
  name: String;
  agility: number;
  presence: number;
  strength: number;
  toughness: number;

  constructor(name: string, agility: number, presence: number, strength: number, toughness: number) {
    this.name = name;
    this.agility = agility;
    this.presence = presence;
    this.strength = strength;
    this.toughness = toughness;
  }


  public getHealth() {
    return this.toughness + 8;
  }

  public getMovement() {
    return this.agility + 5;
  }

}
