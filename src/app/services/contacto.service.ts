import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  sendEmail(data: any){
    const url = `${this.baseUrl}/contact`;
    return this.http.post(url, data).subscribe(
      response => {
        Swal.fire('Éxito', 'Mensaje enviado', 'success');
      },
      error => {
        Swal.fire('Error', error.message, 'error' );
      }
    )
  }

}
