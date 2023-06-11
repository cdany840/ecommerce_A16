import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AddressService } from 'src/app/services/address.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-datos-envio',
  templateUrl: './datos-envio.component.html',
  styleUrls: ['./datos-envio.component.css'],
})
export class DatosEnvioComponent implements OnInit {

  jwtHelper = new JwtHelperService();

  addAddress = false;
  
  address: any;
  
  userId: any;
  carrito: any;
  total: any;
  quantity: any;
  productsId: any;
  products: any;

  formAddress = this.fb.group({
    street: ['', Validators.required],
    no_ext: ['',Validators.required],
    no_int: [''],
    state: ['',Validators.required],
    city: ['',Validators.required],
    colony: ['',Validators.required],
    zip: ['',Validators.required],
    user: ['',Validators.required],
  });

  salesForm = this.fb.group({
    userId: ['',Validators.required],
    address: ['',Validators.required],
    productId: [[] ,Validators.required],
    quantity: [ '',Validators.required],
    total: [ '',Validators.required],
    send: [ '',Validators.required]
  });

  constructor(private addressService: AddressService, private fb: FormBuilder, private saleService: SalesService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.products = localStorage.getItem('carrito');
    const total = localStorage.getItem('total');
    const quantity = localStorage.getItem('quantity');

    this.carrito = JSON.parse(this.products)
    this.total = total
    this.quantity = quantity

    this.carrito.forEach((element:any) => {
      this.productsId = element._id
    });

    if (token) {
      this.userId = this.jwtHelper.decodeToken(token);
    }

    this.getAddress(this.userId._id);
  }

  getAddress(id: string) {
    this.addressService.getAddress(id).subscribe((data) => {
      this.address = data;
    });
  }

  createAddress(){
    const data = this.formAddress?.value;
    this.addressService.createAddress(this.userId._id, data);
  }

  addAdress(){
    this.addAddress = !this.addAddress
  }

  createSale(){
    this.salesForm.patchValue({
      userId: this.userId._id,
      quantity: this.quantity,
      productId: this.productsId,
      total: this.total,
      send: '100'
    });
    this.saleService.createSale(this.salesForm.value)
  }
}
