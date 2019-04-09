import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

import { ModalService } from '../../services';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  data : Date = new Date();

  events = ['Windstorm', 'Bombasto', 'Magneta'];
  constructor(private modalService: ModalService) {
  }


  ngOnInit() {
  }
  ngOnDestroy(){
	  
  }

  openModal(id: string) {
    console.log("e")
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}
