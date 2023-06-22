import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})

export class CreateComponent implements OnInit {
  formCategory = this.fb.group({
    category: ['', Validators.required],
    front: ['', Validators.required],
    icon: ['', Validators.required],
    subcategory: this.fb.array([])
  });

  get subcategory(): FormArray{
    return this.formCategory.get('subcategory') as FormArray;
  }

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  modal = false;

  iconSelect = '';

  selectedImage: any;

  myFiles: any;

  openModal() {
    this.modal = !this.modal;
  }

  iconSelected(icon: string) {
    this.iconSelect = icon;
    this.formCategory.patchValue({
      icon: this.iconSelect,
    });
  }

  createCategory() {
    const formData = new FormData();

    this.subcategory.controls.forEach((control:any) => {
      const subcategoryValue = control.get('subcategory').value;
      
      formData.append('subcategory', subcategoryValue);
    });

    if (this.myFiles && this.myFiles.length > 0) {
      for (let i = 0; i < this.myFiles.length; i++) {
        formData.append('front', this.myFiles[i]);
      }
    }
    formData.append('category', this.formCategory.get('category')?.value || '');
    formData.append('icon', this.formCategory.get('icon')?.value || '');
    this.categoryService.createCategory(formData);
    this.formCategory.reset();
  }

  imgSelected(event: any) {
    const file = event.target.files[0];
    const img = event.target.files;
    this.myFiles = img;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addSubcategory() {
    const subcategory = this.formCategory.controls.subcategory as FormArray;
  
    subcategory.push(this.fb.group({
      subcategory: ['']
    }));

  }

  removeSpec(index: number){
    const specs = this.formCategory.controls.subcategory as FormArray;
    specs.removeAt(index);
  }
}
