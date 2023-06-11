import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  carrito: any;
  
  ngOnInit(): void {
    this.carrito = localStorage.getItem('carrito')
    this.products = JSON.parse(this.carrito);
  }
}
