import { ModalService } from '../../services';
import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EventService } from "../../core/event.service";
import { Event } from '../../core/event.model';
@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  data : Date = new Date();
   eventForm: FormGroup;
  events = ['Windstorm', 'Bombasto', 'Magneta'];
  eventList: any= [];
   city: any;
  event : Event = new Event();

  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder,private eventService:EventService) {
	      config.backdrop = 'static';
    config.keyboard = false;
	   this.createForm();
  }


  ngOnInit() {
    this.getEvents();

  }
  ngOnDestroy(){
	  
  }
  addCoffee = event => this.eventService.createEventOrder(JSON.parse(JSON.stringify(event)));

    createForm() {
        this.eventForm = this.fb.group({
          title: [''],
          description: [''],
          location_venue_name: [''],
          venue_name_full: [''],
          startdate: [''],
          enddate: [''],
          organiser_name: [''],
          event_image: [''],
          adresse: [''],
          CP: [''],
          city: ['']
        });
      }


    createEvent() {
      console.log(this.eventForm.value);
      this.addCoffee(this.eventForm.value);
      this.modalService.dismissAll();
      this.eventForm.reset();

  }
 
      getEvents = () =>
      this.eventService
      .getEventOrders()
      .subscribe(res =>(this.eventList = res,    console.log(res)));


  open(content) {
    this.modalService.open(content);
  }

}
