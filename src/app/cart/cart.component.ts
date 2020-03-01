import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import { TravelComponent } from '../travel/travel.component';
import { ActivatedRoute } from '@angular/router';
import { cardArr } from '../travel/travel.component';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items;


  constructor(private cartService: CartService) {
  	
   };

  ngOnInit(): void {
  	this.items = this.cartService.items;
  }

  total(){
    return this.cartService.getTotal();
  }

   addQuantity(id){
    this.cartService.addToCart(id);
  }

  substractQuantity(id){
    this.cartService.substractItem(id);
  }

}
