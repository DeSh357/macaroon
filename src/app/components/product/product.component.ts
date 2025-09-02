import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(public cartService: CartService) {
    this.product = {
      title: '',
      image: '',
      price: 1.70,
      count: 0
    }
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartService.count+= this.product.count;
    this.cartService.price+= this.product.price;
    this.addToCartEvent.emit(this.product.title);
  }

}
