import { Injectable } from '@angular/core';

@Injectable()
export class TonService {
numbers:[number]=[1]
  constructor() { }
setNumber(val:number){
this.numbers.push(val);
}
getNumber(){
  console.log(this.numbers);
  
  return this.numbers
}
}