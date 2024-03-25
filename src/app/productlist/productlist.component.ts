import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ServicesService } from '../services.service';
import { CartService } from '../service/cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import productData from '../assets/product.json';

interface product{
  name:String;
  price:number;
  id:number;
  img:String;
}
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule,NavbarComponent,HomeComponent,CartComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
  name='Angular';
  products:product[]=productData;
  constructor(private cartSevice: CartService){}
ngOnInit(): void {
}
  

}
