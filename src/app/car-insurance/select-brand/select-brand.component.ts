import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-brand',
  templateUrl: './select-brand.component.html',
  styleUrls: ['./select-brand.component.scss']
})
export class SelectBrandComponent {

  brandList:any=[
    {
      brandName:"MARUTI",
      logo : "https://d2h44aw7l5xdvz.cloudfront.net/assets/icons/Maruti_Suzuki_n.png"
     },
     {
      brandName : "Hyundai",
      logo : "https://d2h44aw7l5xdvz.cloudfront.net/assets/icons/Hyundai_n.png",
     },
     {
      brandName : "Toyota",
      logo : "https://d2h44aw7l5xdvz.cloudfront.net/assets/icons/Toyota_n.png",
     },
     {
      brandName : "Mahindra",
      logo : "https://d2h44aw7l5xdvz.cloudfront.net/assets/icons/Mahindra_n.png",
     },
     {
      brandName : "Honda",
      logo : "https://d2h44aw7l5xdvz.cloudfront.net/assets/icons/Honda_n.png",
     }




  ]

  constructor(private shared:SharedService,private router:Router){

  }

  navigateTo(brandName:string){
    var obj = {name:"brandName",value:brandName};
    this.shared.sendData(obj);
    this.router.navigate(["/car-insurance/select-model"]);
  }

}
