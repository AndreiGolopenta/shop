import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {
  
  transform(value: string) {
    return (`${value.substring(0, 35)}...`)
  }
}