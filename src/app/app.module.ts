
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
