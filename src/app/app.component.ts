import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FooterComponent} from './footer/footer.component';
import {WarbandDataServiceService} from './shared/services/warband-data-service.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'forbidden-psalm-warband-builder';

  constructor(private warbandDataService: WarbandDataServiceService) {
  }

  ngOnInit(): void {
    this.warbandDataService.loadWarbandData()
  }
}
