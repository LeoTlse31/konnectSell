import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-eventsDetails',
  templateUrl: './eventsDetails.component.html',
  styleUrls: ['./eventsDetails.component.scss']
})
export class EventsDetailsComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
    data : Date = new Date();
    focus;
    focus1;

    constructor() { }

    ngOnInit() {

    }
    ngOnDestroy(){

    }

}
