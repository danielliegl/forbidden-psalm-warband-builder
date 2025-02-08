import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {WarbandDataServiceService} from '../shared/services/warband-data-service.service';

@Component({
  selector: 'app-home',
  imports: [
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private warbandDataService: WarbandDataServiceService) {}

  onCreateWarbandClick(): void {

  }
}
