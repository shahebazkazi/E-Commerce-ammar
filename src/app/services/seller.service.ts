import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor() { }
  userSignUp(){
    console.warn("service call")
  }
}
