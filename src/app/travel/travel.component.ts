import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
	cardArr = [
		{img:"/assets/img/berlin.jpg", destination:"Berlin, Germany", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"11.05.2020", duration: 14, price: 120, quantity: 0},
		{img:"/assets/img/Copenhagen.jpg", destination: "Copenhagen, Denmark", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"12.05.2020", duration: 14, price: 140, quantity: 0},
		{img:"/assets/img/Iguasuwaterfalls.jpg", destination: "Iguasu Waterfalls, Brazil", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"13.05.2020", duration: 7, price: 240, quantity: 0},
		{img:"/assets/img/london.jpg", destination: "London, Great Britain", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"14.05.2020", duration: 14, price: 120, quantity: 0},
		{img:"/assets/img/newschwan.jpg", destination: "Neuschwanstein Castle, Germany", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"15.05.2020", duration: 2, price: 70, quantity: 0},
	];


	card;	
	newcard : any = new FormGroup({
		img: new FormControl(""),
		destination: new FormControl(""),
	  	description: new FormControl(""),
	  	startDate: new FormControl(""),
	  	duration: new FormControl(""),
	  	price: new FormControl("")

	})

  constructor(private formFuilder: FormBuilder) { 
	  // this.newcard = this.formBuilder.group({
	  // 		img: "",
	  // 		destination: "",
	  // 		description: "",
	  // 		startDate: "",
	  // 		duration: "",
	  // 		price: "",
	  // 		quantity: ""
	  // 	})
	}

  ngOnInit(): void {
  }

   sendData(newcard){
   	console.log("onSubmit runs")
		this.card = this.newcard.value;
		this.cardArr.push(this.card);
		console.log(this.card);
	}

	sorting(){
		cardArr.sort(function(a, b){return Number(a.price)-Number(b.price)});
		console.log(cardArr)
		// for ( let i of cardArr){
		// 	$("#cards").append(`
		// 		<div  class="row" id="cards">
		// 			<div class="col-12 col-lg-4 mb-3 position-relative" *ngFor="let card of cardArr ; index as travelId">
		// 			<a [routerLink]="['/travel', travelId]"><img src="${i.img}" alt="destinationimage" width="300px" height="200px"></a>
		// 			<h4 class="title">${i.destination}</h4>
		// 			<p class="price">${i.price} €</p>
		// 		</div>
			
		// 	</div>
		// 	`);
		// };
	};


}

export let cardArr = [
		{img:"/assets/img/berlin.jpg", destination:"Berlin, Germany", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"11.05.2020", duration: 14, price: 120, quantity: 0},
		{img:"/assets/img/Copenhagen.jpg", destination: "Copenhagen, Denmark", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"12.05.2020", duration: 14, price: 140, quantity: 0},
		{img:"/assets/img/Iguasuwaterfalls.jpg", destination: "Iguasu Waterfalls, Brazil", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"13.05.2020", duration: 7, price: 240, quantity: 0},
		{img:"/assets/img/london.jpg", destination: "London, Great Britain", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"14.05.2020", duration: 14, price: 120, quantity: 0},
		{img:"/assets/img/newschwan.jpg", destination: "Neuschwanstein Castle, Germany", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magni iure provident nisi quis ad dignissimos excepturi maiores inventore aperiam reiciendis ex optio aliquid aut, mollitia at eveniet dolorem in!", startDate:"15.05.2020", duration: 2, price: 70, quantity: 0},
	];
