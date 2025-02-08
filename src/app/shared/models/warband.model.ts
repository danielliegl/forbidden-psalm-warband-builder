import { Model } from "./model.model"

export class Warband {
  name: string;
  gold: number = 50;
  experience: number = 0;
  members: string[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
