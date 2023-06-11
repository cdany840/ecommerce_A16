import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addFavorite(data: any){
    const url = `${this.baseUrl}/wish`
    this.http.post(url, data).subscribe(
      response => {
        alert('Agregado')
      },
      error => {
        alert('Error')
      }
    )
  }

  getFavoritesById(userId: any){
    const url = `${this.baseUrl}/wish/${userId}`;
    return this.http.get(url);
  }

  removeFavoriteById(idFavorite: string){
    const url = `${this.baseUrl}/wish/${idFavorite}`;
    return this.http.delete(url).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Producto eliminado!',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
          location.reload();
        }, 2000)
      },
      error => {
        Swal.fire('Error', error.message, 'error' );
      }
    );
  }
}
