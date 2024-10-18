import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInsuranceComponent } from './car-insurance.component';
import { SelectBrandComponent } from './select-brand/select-brand.component';
import { SelectModelComponent } from './select-model/select-model.component';
import { SelectVariantComponent } from './select-variant/select-variant.component';

const routes: Routes = [
  {
    path: '', component: CarInsuranceComponent, children: [
      { path: 'select-brand', component: SelectBrandComponent },
      { path: 'select-model', component: SelectModelComponent },
      { path: 'select-variant', component: SelectVariantComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInsuranceRoutingModule { }
