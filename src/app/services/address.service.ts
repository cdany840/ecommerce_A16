import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAddress(id:string){
    const url = `${this.baseUrl}/address/${id}`;
    return this.http.get(url);
  }

  createAddress(id:string, data: any){
    const url = `${this.baseUrl}/address/${id}`;
    return this.http.post(url, data).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'La dirección ha sido añadida',
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
