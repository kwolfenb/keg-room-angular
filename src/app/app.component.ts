import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedKeg = null;

  kegList: Keg[] = [
    new Keg('Mannys', 'Georgetown Brewing', 6, 4.5),
    new Keg('Mac N Jacks African Ale', 'Mac N Jacks', 5, 4.5),
    new Keg('Cult Favorite', 'Cloudburst Brewing', 6.50, 5)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    console.log(clickedKeg);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.kegList.push(newKeg);
  }

}
