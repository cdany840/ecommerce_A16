import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createCategory(data: any){
    const url = `${this.baseUrl}/category`;
    return this.http.post(url, data).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Categoria guardada',
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

  deleteCategoryById(id: string){
    const url = `${this.baseUrl}/category/${id}`;
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
    );
  }

  updateCategory(id: string, data: any){
    const url = `${this.baseUrl}/category/${id}`;
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

  getCategories(){
    const url = `${this.baseUrl}/category/`;
    return this.http.get(url);
  }

  getCategoryById(id: string) {
    const url = `${this.baseUrl}/category/${id}`;
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

  createSubcategory(data: any, id: string){
    const url = `${this.baseUrl}/subcategory/${id}`;
    return this.http.post(url, data).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Subcategoría guardada',
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

  deleteSubategoryById(id: string){
    const url = `${this.baseUrl}/subcategory/${id}`;
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
    );
  }

  getSubcategoryById(id: string){
    const url = `${this.baseUrl}/subcategory/sub/${id}`;
    return this.http.get(url);
  }

  updateSubcategory(id: string, data: any){
    const url = `${this.baseUrl}/subcategory/${id}`;
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
}
