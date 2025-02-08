import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {WarbandDataService} from '../shared/services/warband-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private warbandDataService: WarbandDataService,
              private router: Router
  ) {
  }

  onCreateWarbandClick() {
    this.warbandDataService.createWarband();
    this.router.navigate(['builder']);
  };
}
