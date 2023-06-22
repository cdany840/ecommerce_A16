import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create',
  templateUrl: './createSubcategory.component.html',
  styleUrls: ['./createSubcategory.component.css']
})
export class CreateSubcategoryComponent implements OnInit {

  formSubcategories = this.fb.group({
    subcategory: '',
    category: ''
  });
  
  categories: any;

  get categoryId(){
    return this.formSubcategories.get('category')?.value;
  }
  
  constructor(private categoryService: CategoryService, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories = data;
    });
  }

  createSubcategory(){
    const data = this.formSubcategories.value;
    const id = this.categoryId || '';
    this.categoryService.createSubcategory(data, id);
  }
}
