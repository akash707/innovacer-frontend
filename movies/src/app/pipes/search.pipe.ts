import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, term: any): any {
    // filtering the value based on ther term entered inside the search input
    if (term) {
      value = value.filter(item =>
        Object.keys(item).some(k => item[k] && item[k].toString().toLowerCase().includes(term.toLowerCase()))
      );
    }
    return value;
  }

}
