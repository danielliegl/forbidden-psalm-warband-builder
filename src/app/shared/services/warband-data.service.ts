import {Injectable, signal} from '@angular/core';
import {Warband} from '../models/warband.model';

@Injectable({
  providedIn: 'root'
})
export class WarbandDataService {

  constructor() {
    this.loadWarbandData()
  }

  warbands: Warband[] = [];
  current_warband = signal<Warband | null>(null);

  saveWarbandData() {
    localStorage.setItem("warbandData", JSON.stringify(this.warbands));
  }

  loadWarbandData() {
    this.warbands = JSON.parse(localStorage.getItem("warbandData") as string) as Warband[];
  }

  createWarband(name: string = "New Warband") {
    this.current_warband.set(new Warband(name));
    if (this.warbands === null)
    {
      this.warbands = []
    }
    this.warbands.push(this.current_warband()!);
  }

}
