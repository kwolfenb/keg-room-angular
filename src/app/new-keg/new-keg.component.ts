import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {

  @Input() showNewKeg;
  @Output() sendNewKeg = new EventEmitter();
  @Output() showKeg = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    let newKeg: Keg = new Keg(name, brand, price, alcoholContent);
    this.sendNewKeg.emit(newKeg);
  }

  showNew() {
    this.showKeg.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
