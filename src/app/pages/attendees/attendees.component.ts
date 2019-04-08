import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss']
})
export class AttendeesComponent implements OnInit {
  data : Date = new Date();

  attendees = ['Windstorm', 'Bombasto', 'Magneta'];

  constructor() { }

  ngOnInit() {
	  
  }
  ngOnDestroy(){
	  
  }
}
