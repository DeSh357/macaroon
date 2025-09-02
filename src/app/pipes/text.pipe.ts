import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textPipe'
})
export class TextPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 95) {
      return value.substring(0, 95) + '...';
    }
    return value;
  }

}
