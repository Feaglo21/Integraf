import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServiciosCardComponent } from './servicios-card/servicios-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiciosCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
