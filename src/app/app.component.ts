import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'ecommerce';

  myCart$ = this.productsService.myCart$;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    
  }

  totalProduct(price: number, units: number) {
    return price * units;
  }

  deleteProduct(id: string) {
    this.productsService.deleteProducto(id);
  }

  goToCheckout(){
    this.productsService.goToCheckout();
  }

  addOne(operation: string, id: string) {
    const product = this.productsService.findProductById(id);
    if (product) {
      if (operation === 'minus' && product.quantity > 0) {
        product.quantity = product.quantity - 1;
      }
      if (operation === 'add') {
        product.quantity = product.quantity + 1;
      }
      if (product.quantity === 0) {
        this.deleteProduct(id);
      }
    }
  }

  emptyList(){
    this.productsService.emptyList();
  }

  totalCart(){
    const result = this.productsService.totalCart();
    return result;
  }
}
