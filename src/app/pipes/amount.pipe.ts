import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount',
})
export class AmountPipe implements PipeTransform {
  transform(value: string): string {
    return parseInt(value).toLocaleString('en-US', { useGrouping: true });
  }
}
