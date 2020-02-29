import { Injectable } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	items = [];
  total: number;

	
  constructor() { }


addToCart(card) {
	this.items.push(card);
	console.log(this.items)
};

getItems(){
	return this.items;
};

clearCart(){
	this.items = [];
	return this.items;
};

 getTotal(){
    this.total = 0;
    for (let value of this.items) {
      this.total += value.price*value.quantity;
    }
    return this.total;
  }


}