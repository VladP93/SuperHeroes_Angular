import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderPublisher',
})
export class OrderPublisherPipe implements PipeTransform {
  transform(value: any): any {
    return value.sort((a, b) => {
      if (a.biography.publisher < b.biography.publisher) {
        return -1;
      }
      if (a.biography.publisher > b.biography.publisher) {
        return 1;
      }
      return 0;
    });
  }
}
