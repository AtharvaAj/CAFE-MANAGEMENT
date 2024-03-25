import { Component, OnInit } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../service/cart.service';
import { ProductlistComponent } from '../productlist/productlist.component';
import { CartesComponent } from '../cartes/cartes.component';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,ProductlistComponent,CartesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent implements OnInit {
  public totalItem : number=0;
  constructor(private cartService:CartService){ }

  ngOnInit(): void {
      this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem=res.length;
      })
  }
}
