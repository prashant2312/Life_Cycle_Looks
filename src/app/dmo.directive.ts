import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDmo]'
})
export class DmoDirective implements AfterViewInit {

  
  constructor(private ele:ElementRef) { }

  ngAfterViewInit(): void {
    this.ele.nativeElement.style.color="green"
  }

}
