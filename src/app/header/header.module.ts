import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './header.component';
import {TilConfig} from './config';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HeaderComponent,
    // TilConfig
  ]
})
export class HeaderModule { }
