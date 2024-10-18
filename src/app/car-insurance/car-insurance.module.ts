import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInsuranceRoutingModule } from './car-insurance-routing.module';
import { CarInsuranceComponent } from './car-insurance.component';
import { SelectBrandComponent } from './select-brand/select-brand.component';
import { SelectModelComponent } from './select-model/select-model.component';
import { SelectVariantComponent } from './select-variant/select-variant.component';
import { CarDetailsComponent } from './car-details/car-details.component';


@NgModule({
  declarations: [
    CarInsuranceComponent,
    SelectBrandComponent,
    SelectModelComponent,
    SelectVariantComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    CarInsuranceRoutingModule
  ]
})
export class CarInsuranceModule { }
