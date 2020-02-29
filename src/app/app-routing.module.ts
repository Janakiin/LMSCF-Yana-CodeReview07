import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
	{
		path: "", component: HomeComponent
	},{
		path: "blog", component: BlogComponent
	}, {
		path: "travel", component: TravelComponent
	},{
		path: "travel/:travelId", component: TravelDetailsComponent
	},{
		path: "cart", component: CartComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
