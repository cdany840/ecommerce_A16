import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

    categories: any;

    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
      this.getCategories();
    }

    getCategories(){
      this.categoryService.getCategories().subscribe(data => {
        this.categories = data;
      })
    }

    deleteCategory(id: string){
      this.categoryService.deleteCategoryById(id);
    }
}
