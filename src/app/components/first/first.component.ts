import { Component, DoCheck, Input, OnChanges, OnInit,OnDestroy, SimpleChanges,AfterViewChecked, ViewChild,AfterViewInit,AfterContentInit,AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit ,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterViewChecked,AfterContentChecked,AfterViewInit{

 @Input() value:string="Prodcadmy"
 
 constructor() {
  console.log("constructor called!!");
  console.log(this.value);
 }

 ngOnChanges(change:SimpleChanges){
console.log("ngOnChange is called");
console.log(change);
 }

 ngOnInit(): void {
  console.log("NgOnInit called!!!");
  console.log(this.value);
}

ngDoCheck(): void {
  console.log("ngDocheck run");
  
}
ngAfterContentInit(): void {
  console.log("NgafterContentinit run");
  
}
ngAfterContentChecked(): void {
  console.log("ngAftercontentcheced run");
  
}
ngAfterViewInit(): void {
  console.log("ngAfterViewInit called");
  
}
ngAfterViewChecked(){
  console.log("ngAfterviewchecked run");
  
}
ngOnDestroy(){
console.log("ngOnDestroy run");

}
}
