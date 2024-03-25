import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartesComponent } from './cartes/cartes.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
   
    {
        path:'navbar',
        component:NavbarComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'product',
    component:ProductlistComponent
  },
  {
    path:'cartes',
    component:CartesComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
   path:'',
   component:HomeComponent
  }
];
