import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Products } from '../models/products';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl: string = environment.baseUrl;

  private myList: Products[] = [];

  private myCart = new BehaviorSubject<Products[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const carritoString = localStorage.getItem('carrito');
    if (carritoString) {
      this.myList = JSON.parse(carritoString);
      this.myCart.next(this.myList);
    }
  }

  getAllProducts(): Observable<Products[]> {
    const url = `${this.baseUrl}/product`
    const response = this.http.get<Products[]>(url);
    return response;
  }

  getProductsSub(sub: any): Observable<Products[]> {
    const url = `${this.baseUrl}/product/subcategory/${sub}`
    const response = this.http.get<Products[]>(url);
    return response;
  }

  getProductsCat(cat: any): Observable<Products[]> {
    const url = `${this.baseUrl}/product/category/${cat}`
    const response = this.http.get<Products[]>(url);
    return response;
  }

  addProduct(product: Products) {
    if (this.myList.length === 0) {
      product.quantity = 1
      this.myList.push(product)
      this.myCart.next(this.myList);
      const carrito = localStorage.setItem('carrito', JSON.stringify(this.myList));
    } else {
      const productMod = this.myList.find((element) => {
        return element._id === product._id;
      });
      if (productMod) {
        productMod.quantity += 1
        this.myCart.next(this.myList);
      } else {
        product.quantity = 1;
        this.myList.push(product);
        this.myCart.next(this.myList);
        const carrito = localStorage.setItem('carrito', JSON.stringify(this.myList));
      }
    }
  }

  deleteProducto(id: string) {
    this.myList = this.myList.filter((product) => {
      return product._id != id;
    });
    this.myCart.next(this.myList);
    const carrito = localStorage.setItem('carrito', JSON.stringify(this.myList));
  }

  findProductById(id: string) {
    return this.myList.find((element) => {
      return element._id === id;
    });
  }

  emptyList() {
    this.myList = [];
    localStorage.removeItem('carrito');
    return this.myCart.next(this.myList);
  }

  totalCart() {
    const total = this.myList.reduce(function (acc, product) { return acc + (product.quantity * product.price); }, 0)
    return total;
  }

  goToCheckout() {
    const carrito = localStorage.setItem('carrito', JSON.stringify(this.myList));
    this.router.navigate(['checkout']);
    return carrito;
  }
}
