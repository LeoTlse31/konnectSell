import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  data : Date = new Date();


  constructor() { }

  ngOnInit() {
	  
  }
  ngOnDestroy(){
	  
  }
}
