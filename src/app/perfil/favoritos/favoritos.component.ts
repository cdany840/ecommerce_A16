import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  userToken: any;

  jwtHelper = new JwtHelperService();

  favoriteProducts: any;

  constructor(private favoritos: FavoritosService, private productService: ProductsService){}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.userToken = this.jwtHelper.decodeToken(token);
    }

    this.getFavoritesById();
  }

  getFavoritesById(){
    const userId = this.userToken._id;
    this.favoritos.getFavoritesById(userId).subscribe((data) => {
      this.favoriteProducts = data;
    })
  }

  removeFavorite(idProduct: string){
    const favoriteId = idProduct
    this.favoritos.removeFavoriteById(favoriteId);
  }

  addToCart(product: any){
    this.productService.addProduct(product);
  }

}
