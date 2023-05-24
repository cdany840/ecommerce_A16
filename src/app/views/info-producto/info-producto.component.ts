import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { InfoProductoService } from 'src/app/services/info-producto.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.css']
})
export class InfoProductoComponent implements OnInit {

  $mycart = this.productService.myCart$;

  itemId = "";

  cantidadId = '';

  product: any;

  constructor(private productService: ProductsService, private infoProductoService: InfoProductoService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
			this.itemId = params.get('id') ?? ""
		});
    this.getProduct();
  }

  getProduct(){
    this.infoProductoService.getById(this.itemId).subscribe((data)=>{
      this.product = data;
    });
  }

  addProduct(product:Products){
    this.productService.addProduct(product);
  }


  addOne(operation: string, id: string) {
    const product = this.productService.findProductById(id);
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

  deleteProduct(id: string) {
    this.productService.deleteProducto(id);
  }

  selectedImageIndex: number = 0;

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }
}
