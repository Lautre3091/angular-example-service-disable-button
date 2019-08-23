import { Component, OnInit } from '@angular/core';
import {ButtonDisableService} from '../../services/button-disable.service';

@Component({
  selector: 'app-master-button',
  templateUrl: './master-button.component.html',
  styleUrls: ['./master-button.component.css']
})
export class MasterButtonComponent implements OnInit {

  constructor(private buttonDisable: ButtonDisableService) { }

  ngOnInit() {
  }

  toogleButtonState(){
    this.buttonDisable.toogleDisable();
  }

}