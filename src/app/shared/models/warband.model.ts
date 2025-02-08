import {Model} from "./model.model";

export class Warband {
  warbandName: string;
  gold: number = 50;
  experience: number = 0;
  members: Model[] = [];

  constructor(name: string = "New Warband") {
    this.warbandName = name;
  }
}
