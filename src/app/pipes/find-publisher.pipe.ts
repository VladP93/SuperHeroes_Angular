import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findPublisher',
})
export class FindPublisherPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const findByPublisher = [];

    value.forEach((val) => {
      if (
        val?.biography?.publisher?.toLowerCase().indexOf(arg?.toLowerCase()) >
        -1
      ) {
        findByPublisher.push(val);
      }
    });

    return findByPublisher;
  }
}
