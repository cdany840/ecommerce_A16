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

  numberProducts: number = 1;

  constructor(private productService: ProductsService, private infoProductoService: InfoProductoService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
			this.itemId = params.get('id') ?? ""
		});
    this.getProduct();
  }

  getProduct(){
    this.infoProductoService.getBySlug(this.itemId).subscribe((data)=>{
      this.product = data;
    });
  }

  addProduct(product:Products){
    this.productService.addProduct(product);
  }


  selectedImageIndex: number = 0;

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  lessOne(){
    this.numberProducts = this.numberProducts - 1
    if(this.numberProducts < 0) this.numberProducts = 0
  }

  addOne(){
    this.numberProducts = this.numberProducts + 1
    if(this.numberProducts >= this.product?.stock) this.numberProducts = this.product?.stock
  }
}
