import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : any = [];

  constructor() { }

//adding the items to the caer
  addToCart(prod: any) {
    this.items.push(prod);
  }

  getItems() {
  
    return this.items;
  }


  //after purchasing clean the cart
  cleanCard() {
    this.items = [];
    return this.items;
  }

  
  itemsLength(){
    return this.items.length;
  }
}
