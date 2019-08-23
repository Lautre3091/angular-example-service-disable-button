import { Component, OnInit } from '@angular/core';
import {ButtonDisableService} from '../../services/button-disable.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component implements OnInit {

  disable: Observable<boolean>;

  constructor(private buttonDisable: ButtonDisableService) { }

  ngOnInit() {
    this.disable = this.buttonDisable.disableButton;
  }

}