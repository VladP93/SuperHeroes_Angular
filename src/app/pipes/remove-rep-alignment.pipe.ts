import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeRepAlignment',
})
export class RemoveRepAlignmentPipe implements PipeTransform {
  transform(value: any): any {
    return value.filter(
      (value, i, arr) =>
        arr.findIndex(
          (data) => data.biography.alignment === value.biography.alignment
        ) === i
    );
  }
}
