import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInsuranceRoutingModule } from './car-insurance-routing.module';
import { CarInsuranceComponent } from './car-insurance.component';


@NgModule({
  declarations: [
    CarInsuranceComponent
  ],
  imports: [
    CommonModule,
    CarInsuranceRoutingModule
  ]
})
export class CarInsuranceModule { }
