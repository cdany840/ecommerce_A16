import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createSale(data:any){
    const url = `${this.baseUrl}/sale`;
    this.http.post(url, data)
  }
}
