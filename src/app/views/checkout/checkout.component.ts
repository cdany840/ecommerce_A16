import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  subtotal: any;
  total: any;
  products: any;
  carrito: any;
  cantidad: any;
  envio = 100;

  constructor(){}

  ngOnInit(): void {
    this.carrito = localStorage.getItem('carrito')
    this.products = JSON.parse(this.carrito);
    this.getCantidad();
    this.getSubtotal();
    this.getTotal();
  }

  getSubtotal(){
    let total = 0;
    this.products.forEach((element:any) => {
      total += element.price
    });
    return this.subtotal = total;
  }

  getCantidad(){
    let products = this.products;
    this.cantidad = products.length
    localStorage.setItem('quantity', products.length)
  }

  getTotal(){
    let total = 0;
    total = this.envio + this.subtotal
    localStorage.setItem('total', total.toString())
    return this.total = total
  }
}
