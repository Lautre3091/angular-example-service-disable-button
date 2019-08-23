import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Button1Component } from './components/button1/button1.component';
import { Button2Component } from './components/button2/button2.component';
import { MasterButtonComponent } from './components/master-button/master-button.component';
import { ButtonDisableService } from './services/button-disable.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Button1Component, Button2Component, MasterButtonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ButtonDisableService]
})
export class AppModule { }
