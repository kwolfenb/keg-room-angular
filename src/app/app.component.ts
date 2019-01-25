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
  showNewKeg = false;
  happyHour: boolean = false;
  salePercentage = 1;

  kegList: Keg[] = [
    new Keg('Mannys', 'Georgetown Brewing', 6, 4.5, 124),
    new Keg('Mac N Jacks African Ale', 'Mac N Jacks', 5, 4.5, 124),
    new Keg('Cult Favorite', 'Cloudburst Brewing', 6.50, 5, 124),
    new Keg('Corona', 'Corona Brewing', 3.50, 4.5, 124)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    console.log(clickedKeg);
  }

  showNew() {
    this.showNewKeg=!this.showNewKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.kegList.push(newKeg);
  }

  sellPint(clickedKeg) {
    clickedKeg.pints -=1;
    console.log(clickedKeg.pints);
  }
  sellGrowler(clickedKeg) {
    clickedKeg.pints -=2;
    console.log(clickedKeg.pints);
  }

  happyHourSale() {
    if (this.happyHour) {
      this.salePercentage = 1;
      this.happyHour=!this.happyHour;
    } else {
      this.salePercentage = .60;
      this.happyHour=!this.happyHour;

    }
  }

}
