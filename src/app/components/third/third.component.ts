import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private ar:ActivatedRoute) { }

  val
  ngOnInit(): void {
this.ar.params.subscribe(e=>{
  this.val=e['name']
  console.log(e['name']);
  alert(this.val)
})
  }

}
