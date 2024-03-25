import { Component, Inject, OnInit, inject } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { CommonModule } from '@angular/common';
import { RouterLink, Routes } from '@angular/router';
import { ServicesService } from '../services.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../service/cart.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductlistComponent,CommonModule,NavbarComponent,HomeComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public product :any=[

  ];
  public grandTotal !: number;
  public productQuantity:number=1;
  constructor (public cartService:CartService){}
  ngOnInit(): void {
      this.cartService.getProducts()
      .subscribe(res=>{
        this.product=res;
        this.grandTotal=this.cartService.getTotalPrice();
      })
  }
  quantity(value:string){
    if(this.productQuantity < 8 && value=="max"){
      this.productQuantity +=1;
    }else if(this.productQuantity>1 && value=="min"){
      this.productQuantity-=1;
    }
  }
  
  get totalPrice()
  {
    return this.product.price* this.productQuantity
  }

  // removeItem(item: any){
  //   this.cartService.removeCartItem(item);
  // }
  // emptycart(){
  //   this.cartService.removeAllCart();
  // }

}
