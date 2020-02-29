import { Component, OnInit } from '@angular/core';
import { TravelComponent } from '../travel/travel.component';
import { ActivatedRoute } from '@angular/router';
import { cardArr } from '../travel/travel.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
	cardArr = cardArr;
	card; 

  constructor(private route: ActivatedRoute, private cartService : CartService) { }

  addToCart(card){
  	// alert("Your travel is in the card :)");
  	this.cartService.addToCart(card);

  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
  	this.card = cardArr[+params.get('travelId')];	
  	});
  };

  
}

