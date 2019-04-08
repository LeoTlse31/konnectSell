import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  data : Date = new Date();


  constructor() { }

  ngOnInit() {
	  
  }
  ngOnDestroy(){
	  
  }
}
