import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredText: string, propName: string): any {
    if(filteredText.length === 0 || filteredText === '') {
      return value;
    }
    var arr = [];
    for(const item of value) {
      if(item[propName] === filteredText) {
        arr.push(item);
      }
    }
    return arr;
  }

}
