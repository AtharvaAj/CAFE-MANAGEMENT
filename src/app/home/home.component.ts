import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartComponent } from '../cart/cart.component';

import { ProductlistComponent } from '../productlist/productlist.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CartComponent,ProductlistComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
