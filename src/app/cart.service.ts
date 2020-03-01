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
  card.quantity++;
  if (card.quantity == 1){
	this.items.push(card);}
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

    if(this.total > 200){
      this.total = this.total * 0.9;
    }
    if(this.total > 300){
      this.total = this.total * 0.8;
    }

    return this.total;
  }

  substractItem(id){
    this.items[id].quantity--;
    if (this.items[id].quantity == 0){
        this.items.splice(id, 1);
    }
  }

}