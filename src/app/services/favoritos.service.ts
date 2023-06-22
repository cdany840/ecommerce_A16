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
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado a favoritos!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
      },
      error => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Algo salió mal',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
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
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Producto eliminado',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        }).then( () =>{
            window.location.reload()
        })
      },
      error => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Algo salió mal',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
      }
    );
  }
}
