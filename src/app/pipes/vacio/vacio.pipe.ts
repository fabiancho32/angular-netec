import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vacio'
})
export class VacioPipe implements PipeTransform {

  transform(value: any): any {
   if(value == '' || value == undefined){
    return 'VACIO';
   }else{
    return value;
   }
  }

}
