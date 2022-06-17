import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit , DoCheck{
 
  productsz : IProducts = {} as IProducts;
  id : number = 0;
  count: number = 0;
  productsx : IProducts[] = products;
  constructor(private route : ActivatedRoute, private CS: CartService) { }

  addToCartX(){
    this.CS.addToCart(this.productsz);

  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params["id"];
      this.productsz = products[this.id];

    })

  }
  ngDoCheck(): void {
    this.count = this.CS.itemsLength();
  }
}
