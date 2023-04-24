import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(producttype: any, type: string): any {
    if(type=="All")
       return producttype ;

    return producttype.filter((x:any)=>x.type == type)
  }
  }

