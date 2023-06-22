import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css']
})
export class EditSubcategoryComponent {
  formSubcategories = this.fb.group({
    subcategory: '',
    category: ''
  });
  
  categories: any;

  subcategory: any;

  editId: any;

  categorySelected: any;

  get categoryId(){
    return this.formSubcategories.get('category')?.value;
  }
  
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.editId = params.get('id') ?? "";
    });
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((data:any)=>{
      this.categories = data;
      this.getSubcategoryById();
    });
  }

  getSubcategoryById(){
    this.categoryService.getSubcategoryById(this.editId).subscribe((data:any)=>{
      this.subcategory = data;
      const categoryId = data.category;
      this.formSubcategories.patchValue({
        subcategory: data.subcategory,
      })
      this.selectedCategory(categoryId);
    });
  }

  selectedCategory(id:string){
    const category = this.categories.filter((element:any) => element._id === id)
    this.categorySelected =  category[0]._id;
    this.formSubcategories.patchValue({
      category: this.categorySelected
    });
  }

  updateSubcategory(){
    this.categoryService.updateSubcategory(this.editId, this.formSubcategories.value);
  }
}
