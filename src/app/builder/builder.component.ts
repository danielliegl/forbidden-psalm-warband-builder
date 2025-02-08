import {Component} from '@angular/core';
import {WarbandDataService} from '../shared/services/warband-data.service';
import {MatCard, MatCardContent} from '@angular/material/card';
import {Warband} from '../shared/models/warband.model';
import {Model} from '../shared/models/model.model';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-builder',
  imports: [
    MatCard,
    MatCardContent,
    MatInputModule,
    MatButton,
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent {
  constructor(public warbandDataService: WarbandDataService) {
    this.currentWarband = this.warbandDataService.current_warband()!;
  }

  currentWarband: Warband;

  onNameInput(event: any) {
    this.currentWarband.warbandName = event.target.value;
    this.updateWarbandState();
  }

  addNewWarbandMember() {
    this.currentWarband.members.push(new Model("New Member"));
    this.updateWarbandState();
  }


  updateWarbandState(): void {
    this.warbandDataService.current_warband.set(this.currentWarband);
  }
}
