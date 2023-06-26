import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
})
export class OfertasComponent implements OnInit {
  products: any;
  offerProducts: any;
  oldPrice: any;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      const offerProducts = this.products.filter(
        (element: any) => element.discount > 0
      );
      this.offerProducts = offerProducts;
    });
  }

  currentIndex = 0;

  scrollPrevious() {
    const container = document.querySelector('.snap-x') as HTMLElement;
    const scrollAmount = -250;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollNext() {
    const container = document.querySelector('.snap-x') as HTMLElement;
    const scrollAmount = 250;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
}
