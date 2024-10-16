import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInsuranceComponent } from './car-insurance.component';

const routes: Routes = [
  { path: '', component: CarInsuranceComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInsuranceRoutingModule { }
