import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'happyHour'
})
export class HappyHourPipe implements PipeTransform {
  transform(price: number, sale: number): number {
    // let saleNumber = parseFloat(sale);
    let happyHourPrice = price*sale;
      return happyHourPrice;
  }

}