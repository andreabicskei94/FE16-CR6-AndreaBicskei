import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : any;
  checkOutForm: any;
  total : number = 0;
  service : number = 0;
  discount : number = 0;
  final : number = 0;

  constructor(private CS: CartService, private FB : FormBuilder) {
    this.checkOutForm = this.FB.group({
      name : "",
      address: ""
    })
  }
  onSubmit(data: any) {
    alert("You order has been submitted");
    console.warn(data);
    this.cart = this.CS.cleanCard();
    this.checkOutForm.reset();
    this.total = 0;
    this.discount = 0;
    this.final=0;
  this.service=0;
  }
  calc() {
  for(let val of this.cart) {
      this.total += val.price;
    }
    this.final = this.total;
    if(this.total > 40 ) {
      this.discount = this.total * 0.15;
      alert("You have got 15% discount");
    }
    this.service = this.total * 0.1;
    this.final = this.final - this.discount;
}
  
  
  ngOnInit(): void {
    this.cart = this.CS.getItems(); 
    this.calc();
  }

}