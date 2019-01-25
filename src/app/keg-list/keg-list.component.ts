import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {

  @Input() childKegList: Keg[];
  @Input() childSale;
  @Output() clickSender = new EventEmitter();
  @Output() clickSellPint = new EventEmitter();
  @Output() clickSellGrowler = new EventEmitter();
  @Output() happyHourSale = new EventEmitter();

  happyHourButton() {
    this.happyHourSale.emit();
  }

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(kegToSell: Keg) {
    this.clickSellPint.emit(kegToSell);
  }
  sellGrowler(kegToSell: Keg) {
    this.clickSellGrowler.emit(kegToSell);
  }

  priceColor(currentKeg) {
    if(currentKeg.price < 4) {
      return "bg-danger";
    } else if(currentKeg.price >=4 && currentKeg.price <= 6) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }


}
