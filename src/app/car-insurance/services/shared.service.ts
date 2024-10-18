import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  vehicleData : BehaviorSubject<any> = new BehaviorSubject<any>('');
  vehicleDataObs$ = this.vehicleData.asObservable();

  constructor() { }

  sendData(data:any){
    this.vehicleData.next(data);
  }

}
