import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

    categories: any;

    modal = false;

    iconSelect = '';

    selectedImage: any;

    constructor(private categoryService: CategoryService, private http:HttpClient) { }

    ngOnInit(): void {
      this.getCategories();
    }

    getCategories(){
      this.categoryService.getCategories().subscribe(data => {
        this.categories = data;
      })
    }

    openModal(){
      this.modal = !this.modal
    }

    iconSelected(icon: string){
      this.iconSelect = icon;
    }

    imgSelected(event: any){
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
}
