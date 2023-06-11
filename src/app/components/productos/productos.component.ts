import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Products } from 'src/app/models/products';
import { CategoryService } from 'src/app/services/category.service';
import { FavoritosService } from 'src/app/services/favoritos.service';
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
  categoryId = "";

  page!: number;

  jwtHelper = new JwtHelperService();

  userToken: any;

  favorite: any;

  categories: any;

  constructor(private themeServiceService: ThemeServiceService, private productService: ProductsService, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router, private favoritos: FavoritosService) {
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.userToken = this.jwtHelper.decodeToken(token);
    }

    this.route.paramMap.subscribe(params => {
			this.subcategoryId = params.get('subcategory') ?? ""
		});

    this.route.paramMap.subscribe(params => {
			this.categoryId = params.get('category') ?? ""
		});

    this.getCategories();

    if(this.subcategoryId)
      this.getProductsSub();
    else if (this.categoryId)
      this.getProductsCat();
    else if (this.router.url === "/productos/ofertas")
      this.getAllOffers();
    else
      this.getAllProducts();

  }

  getProductsSub(){
    this.productService.getProductsSub(this.subcategoryId).subscribe((data)=>{
      this.products = data;
    });
  }

  getProductsCat(){
    this.productService.getProductsCat(this.categoryId).subscribe((data)=>{
      this.products = data;
    });
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.products = data;
    });
  }

  getAllOffers(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.products = data;
      const offers = this.products.filter((element:any) => element.discount > 0)
      this.products = offers;
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

  addFavorite(product: any){
    const userId = this.userToken._id;
    const data = {"userId": userId, "productId": product};
    this.favoritos.addFavorite(data);
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
   }

}
