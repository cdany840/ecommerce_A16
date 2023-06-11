import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { environment } from 'src/environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InfoProductoService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBySlug(id: string): Observable<Products> {
    const url = `${this.baseUrl}/product/${id}`;
    return this.http.get<Products>(url);
  }

  getById(id: string): Observable<Products> {
    const url = `${this.baseUrl}/product/id/${id}`;
    return this.http.get<Products>(url);
  }

  createProduct(data: any){
    const url = `${this.baseUrl}/product`;
    return this.http.post(url, data).subscribe(
      response => {
        Swal.fire('Éxito', 'Registro creado exitosamente', 'success');
      },
      error => {
        Swal.fire('Error', error.message, 'error' );
      }
    )
  }

  updateProduct(id: string, data: any){
    const url = `${this.baseUrl}/product/${id}`;
    return this.http.patch(url, data).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'El registro fue editado!',
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
    )
  }

  deleteProduct(id: string){
    const url = `${this.baseUrl}/product/${id}`;
    return this.http.delete(url).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'El registro fue eliminado!',
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
    )
  }
}
