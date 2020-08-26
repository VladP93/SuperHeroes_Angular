import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findRace',
})
export class FindRacePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const findByRace = [];

    value.forEach((val) => {
      if (
        val?.appearance?.race?.toLowerCase().indexOf(arg?.toLowerCase()) > -1
      ) {
        findByRace.push(val);
      }
    });

    return findByRace;
  }
}
