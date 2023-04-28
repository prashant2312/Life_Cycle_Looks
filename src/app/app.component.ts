import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkingService } from "./services/working.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
/**
 *
 */
employees
constructor(private api:WorkingService) {}
ngOnInit(){
  // this.api.getAllEmployee().subscribe(e=>this.employees=e)
}
destroy:boolean=true
inputText:string=''
Submit(inputEle:HTMLInputElement){
this.inputText=inputEle.value;
}
DestroyComponent(){
  this.destroy=false
}
}
