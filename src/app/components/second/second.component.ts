import { Component, OnInit ,ContentChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
number=Math.random()*100;
  
incremnet(){
this.number=this.number+1000;
}
decrement(){
  this.number=this.number-1000
}
@ContentChild("paragraph") element:ElementRef
ngOnInit(): void {
  // this.element.nativeElement.style.color="green"
  console.log(this.element);
  
}

ngAfterContentInit(){
  console.log(this.element);
  
  console.log(this.element.nativeElement.textContent);
  
}
}
