import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { ThemeServiceService } from 'src/app/theme-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  isDarkMode = false;

  products:Products[]=[];

  subcategoryId = "";

  page!: number;

  constructor(private themeServiceService: ThemeServiceService, private productService: ProductsService, private categoryService: CategoryService, private route: ActivatedRoute) {
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
			this.subcategoryId = params.get('subcategory') ?? ""
		});

    if(this.subcategoryId)
      this.getProducts();
    else
      this.getAllProducts();
  }

  getProducts(){
    this.productService.getProducts(this.subcategoryId).subscribe((data)=>{
      this.products = data;
    });
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.products = data;
    });
  }

  addProduct(product:Products){
    this.productService.addProduct(product);
  }

  toggleDarkMode() {
    this.themeServiceService.toggleDarkMode();
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

  mostrarFiltro = false;
  colorDropdown = false;
  sizeDropdown = false;
  categoryDropdown = false;
  colorAside = false;
  sizeAside = false;
  categoryAside = false;

  filtro(){
    this.mostrarFiltro = !this.mostrarFiltro;
  }

  dropdownColor(){
    this.colorDropdown = !this.colorDropdown;
  }
  dropdownSize(){
    this.sizeDropdown = !this.sizeDropdown;
  }
  dropdownCategory(){
    this.categoryDropdown = !this.categoryDropdown;
  }

  asideColor(){
    this.colorAside = !this.colorAside;
  }
  asideSize(){
    this.sizeAside = !this.sizeAside;
  }
  asideCategory(){
    this.categoryAside = !this.categoryAside;
  }



}
