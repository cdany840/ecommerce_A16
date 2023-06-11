import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { token } from '../interfaces/token.interface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<token>(url, body).pipe(
      map(({ token }) => this.setAuthentication(token)),
      catchError((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error de registro',
          text: err.error.message
        });
        return throwError(() => err.error.message);
      })
    );
  }

  private setAuthentication(token: string): boolean {
    localStorage.setItem('token', token);

    return true;
  }

  register(email: string, password: string, name: string) {
    const url = `${this.baseUrl}/auth/register`;
    const body = { email, password, name };

    return this.http.post<token>(url, body).pipe(
      map(({ token }) => {
        Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'Tu cuenta ha sido registrada correctamente.',
        });
        return this.setAuthentication(token);
      }),
      catchError((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error de registro',
          text: err.error.message
        });
        return throwError(() => err.error.message);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}
