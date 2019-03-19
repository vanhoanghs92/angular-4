import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNumber' })

export class RoundPie implements PipeTransform {
  transform(value: number, isUpper: boolean): number {
    if(isUpper) {
      return Math.ceil(value)
    }
    return Math.round(value);
  }
}
