import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReservationFormComponent, ReservationListComponent],
  // ReactiveFormsModule validates form in ts class
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class ReservationModule {}
