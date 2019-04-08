import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data : Date = new Date();


  constructor() { }

  ngOnInit() {
	  
  }
  ngOnDestroy(){
	  
  }
}
