import {Injectable, signal} from '@angular/core';
import {Warband} from '../models/warband.model';

@Injectable({
  providedIn: 'root'
})
export class WarbandDataServiceService {

  constructor() {
  }

  warbands: Warband[] = [];
  current_warband: Warband | null = null;

  saveWarbandData() {
    localStorage.setItem("warbandData", JSON.stringify(this.warbands));
  }

  loadWarbandData() {
    this.warbands = JSON.parse(localStorage.getItem("warbandData") as string) as Warband[];
  }

  createWarband(name: string) {
    this.current_warband = new Warband(name);
    this.warbands.push(this.current_warband);
  }

}
