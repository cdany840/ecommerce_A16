import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCategories(){
    const url = `${this.baseUrl}/category/`;
    return this.http.get(url);
  }

  getSubcategories(category: any){
    const url = `${this.baseUrl}/subcategory/${category}`;
    return this.http.get(url);
  }

  getAll(id: string){
    const url = `${this.baseUrl}/product/subcategory/${id}`;
    return this.http.get(url);
  }
}
