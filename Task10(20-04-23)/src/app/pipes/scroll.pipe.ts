import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scroll'
})
export class ScrollPipe implements PipeTransform {

  transform(products: any, min:any, max:any): any {
    return products.filter(
      (x:any) => (x.price)>=min && (x.price)<=max)
  }

}
