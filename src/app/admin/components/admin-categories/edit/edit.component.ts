import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formCategory = this.fb.group({
    category: ['', Validators.required],
    icon: ['', Validators.required],
  });

  modal = false;

  iconSelect = '';

  editId = '';

  category: any;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.editId = params.get('id') ?? "";
    });
    this.getCategory();
  }
  
  getCategory() {
    this.categoryService.getCategoryById(this.editId).subscribe( (data) => {
      this.category = data;
      this.iconSelect = this.category.icon
      this.formCategory.patchValue({
        category: this.category.category,
        icon: this.category.icon
      });
    })
  }

  editCategory(){
    this.formCategory.patchValue({
      category: this.formCategory.get('category')?.value
    })
    this.categoryService.updateCategory(this.editId, this.formCategory.value);
  }

  openModal() {
    this.modal = !this.modal;
  }

  iconSelected(icon: string) {
    this.iconSelect = icon;
    this.formCategory.patchValue({
      icon: this.iconSelect,
    });
  }
}
