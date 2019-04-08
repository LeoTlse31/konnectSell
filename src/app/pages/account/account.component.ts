import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  data : Date = new Date();


  constructor() { }

  ngOnInit() {
	  
  }
  ngOnDestroy(){
	  
  }
}
