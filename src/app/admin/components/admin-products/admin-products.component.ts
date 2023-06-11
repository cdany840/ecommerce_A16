import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InfoProductoService } from 'src/app/services/info-producto.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: any;
  productsSearch: any;

  resultado: any;

  page!: number;

  constructor(
    private productsService: ProductsService,
    private infoProduct: InfoProductoService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  buscar(event: any) {
    const busqueda = event.target.value.toLowerCase();
    if (busqueda){
      const products = this.products.filter( (product:any) => product.name.toLowerCase().includes( busqueda ));
      this.products = products;
    }else{
      this.getAllProducts();
    }
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: string) {
    this.infoProduct.deleteProduct(id);
  }
}
