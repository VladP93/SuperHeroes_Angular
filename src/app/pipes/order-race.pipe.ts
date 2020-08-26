import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderRace',
})
export class OrderRacePipe implements PipeTransform {
  transform(value: any): any {
    return value.sort((a, b) => {
      if (a.appearance.race < b.appearance.race) {
        return -1;
      }
      if (a.appearance.race > b.appearance.race) {
        return 1;
      }
      return 0;
    });
  }
}
