import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	private url = 'localhost:3000/api/user/register' 
	
	constructor(private http: HttpClient) { }

	addUser(user: any): Observable<any> {
		return this.http.post<any>(this.url, user);
	}
}
