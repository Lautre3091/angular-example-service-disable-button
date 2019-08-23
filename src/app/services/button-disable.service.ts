import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ButtonDisableService {

  private _disableButton: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get disableButton(): Observable<boolean> {
    return this._disableButton.asObservable();
  }

  constructor() { }

  toogleDisable(){
    this._disableButton.next(!this._disableButton.value);
  }

}