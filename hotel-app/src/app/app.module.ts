import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';

@NgModule({
  declarations: [AppComponent],
  // must include all models created so that root knows about them
  imports: [BrowserModule, AppRoutingModule, HomeModule, ReservationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
