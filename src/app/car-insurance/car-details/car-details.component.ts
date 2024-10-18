import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  carDetails: CarDetails = new CarDetails();

  constructor(private shared: SharedService) {

  }


  ngOnInit() {
    this.shared.vehicleDataObs$.subscribe({
      next: (resp: any) => {
        //name : 'BrandName', value : "Tata"
        // name : 'model' , value : 'Nexon'
        if (resp.name == 'brandName') {
          this.carDetails.brandName = resp.value;
        }
      }
    })
  }
}

export class CarDetails {
   brandName:string="";
   model:string="";
}
