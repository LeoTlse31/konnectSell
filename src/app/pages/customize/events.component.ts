import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  data : Date = new Date();


  constructor() { }

  ngOnInit() {
	  
  }
  ngOnDestroy(){
	  
  }
}
