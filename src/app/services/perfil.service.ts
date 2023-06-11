import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getById(id: string): Observable<any> {
    const url = `${this.baseUrl}/profile/${id}`;
    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const reqOptions = { headers: headers };
    return this.http.get(url, reqOptions);
  }

  update(id: string, data: any) {
    const url = `${this.baseUrl}/profile/${id}`;
    return this.http.put(url, data).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'El registro fue editado!',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
          location.reload();
        }, 1000)
      },
      error => {
        Swal.fire('Error', error.message, 'error' );
      }
    )
  }
}
