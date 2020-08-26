import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeRepRace',
})
export class RemoveRepRacePipe implements PipeTransform {
  transform(value: any): any {
    return value.filter(
      (value, i, arr) =>
        arr.findIndex(
          (data) => data.appearance.race === value.appearance.race
        ) === i
    );
  }
}
