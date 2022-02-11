import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutletName'
})
export class TrimOutletNamePipe implements PipeTransform {

  transform(title: string, outletName: string): any {
    return title.replace(` - ${outletName}`, '');
  }
  // transform(value: string, ...args: any): any {
  //   let finalValue = value;
  //
  //   if (value.includes("-")) {
  //     let lastValue = value.replace("- CNN", "")
  //     finalValue = lastValue;
  //   }
  //
  //   if (value.includes("- CBS News")) {
  //     let lastValue = value.replace("- CBS News", "")
  //     finalValue = lastValue;
  //   }
  //   return finalValue;
  // }
}
