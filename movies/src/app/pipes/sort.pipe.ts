import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, type: string): any {
    // filtering the value based on key related to type 
    if (type == 'Released') {
      value = value.sort((value1, value2) => Number(new Date(value2.releaseDate)) - Number(new Date(value1.releaseDate)));
    }
    if (type == 'Rating') {
      value = value.sort((value1, value2) => (value2.imdbRating || 0) - (value1.imdbRating || 0));
    }
    return value;
  }

}
