import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  products: any;
  constructor(private route : ActivatedRoute, private CS : CartService) { }

  addToCart(prod : any) {
    alert("added to the cart");
    this.CS.addToCart(prod);
    console.log(this.CS.getItems())
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : any = params.get("id");
      this.products = products[id];
    })
  }
}
