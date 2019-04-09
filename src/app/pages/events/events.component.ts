import { ModalService } from '../../services';
import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  data : Date = new Date();
   eventForm: FormGroup;
  events = ['Windstorm', 'Bombasto', 'Magneta'];
  
  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder) {
	      config.backdrop = 'static';
    config.keyboard = false;
	   this.createForm();
  }


  ngOnInit() {
  }
  ngOnDestroy(){
	  
  }
  
    createForm() {
        this.eventForm = this.fb.group({
          name: ['', Validators.required ],
          description: ['', Validators.required ],
          starttime: ['', Validators.required ],
          endtime: ['', Validators.required ]
        });
      }
	  
  open(content) {
    this.modalService.open(content);
  }

}
