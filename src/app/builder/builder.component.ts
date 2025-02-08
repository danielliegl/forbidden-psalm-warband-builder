import { Component } from '@angular/core';
import {WarbandDataService} from '../shared/services/warband-data.service';

@Component({
  selector: 'app-builder',
  imports: [],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent {
  constructor(public warbandDataService: WarbandDataService) {
  }



}
