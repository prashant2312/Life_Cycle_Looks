import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value:string, gender:string): unknown {
    console.log("Value is "+value);
    console.log("Gender is "+gender);
    
    if(gender==="Male"){
      return "Mr "+value
    }
    return "Mrs "+value
  }

}
