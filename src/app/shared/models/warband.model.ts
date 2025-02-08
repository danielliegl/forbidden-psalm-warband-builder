import { Model } from "./model.model"

export class Warband {
  name: string;
  gold: number = 50;
  experience: number = 0;
  members: string[] = [];

  constructor(name: string="New Warband") {
    this.name = name;
  }
}
