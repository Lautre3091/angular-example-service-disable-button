import { Component, OnInit } from '@angular/core';
import {ButtonDisableService} from '../../services/button-disable.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit {

  disable: Observable<boolean>;

  constructor(private buttonDisable: ButtonDisableService) { }

  ngOnInit() {
    this.disable = this.buttonDisable.disableButton;
  }

}