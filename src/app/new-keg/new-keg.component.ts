import { Component, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {

  @Output() sendNewKeg = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    let newKeg: Keg = new Keg(name, brand, price, alcoholContent);
    this.sendNewKeg.emit(newKeg);
  }

  constructor() { }

  ngOnInit() {
  }

}
