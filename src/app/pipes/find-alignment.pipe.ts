import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findAlignment',
})
export class FindAlignmentPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const findByAlignment = [];

    value.forEach((val) => {
      if (
        val?.biography?.alignment?.toLowerCase().indexOf(arg?.toLowerCase()) >
        -1
      ) {
        findByAlignment.push(val);
      }
    });

    return findByAlignment;
  }
}
