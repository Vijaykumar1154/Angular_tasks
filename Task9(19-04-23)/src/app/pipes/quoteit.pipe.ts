import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteit'
})
export class QuoteitPipe implements PipeTransform {

  transform(target: string): string {
    let regx = /(great|excellent|good|perfect|satisfied)/
    if(regx.test(target.toLowerCase())){
      return '"'+target+'"'
    }
    return target
  }
}
