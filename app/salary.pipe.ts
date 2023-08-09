import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(basic: number): number{
    const hra = 0.10 * basic;
    const ta = 0.05 * basic;
    const da = 0.03 * basic;
    return basic+hra+ta+da;
  }

}
