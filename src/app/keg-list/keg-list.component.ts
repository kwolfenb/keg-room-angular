import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
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
