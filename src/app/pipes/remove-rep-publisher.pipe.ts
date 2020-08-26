import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeRepPublisher',
})
export class RemoveRepPublisherPipe implements PipeTransform {
  transform(value: any): any {
    return value.filter(
      (value, i, arr) =>
        arr.findIndex(
          (data) => data.biography.publisher === value.biography.publisher
        ) === i
    );
  }
}
