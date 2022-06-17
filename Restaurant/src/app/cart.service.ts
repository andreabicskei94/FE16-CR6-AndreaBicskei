import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : any = [];

  constructor() { }

  addToCart(prod: any) {
    this.items.push(prod);
  }

  getItems() {
  
    return this.items;
  }

  cleanCard() {
    this.items = [];
    return this.items;
  }
}
