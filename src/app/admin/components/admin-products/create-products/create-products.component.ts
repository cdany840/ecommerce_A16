import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { InfoProductoService } from 'src/app/services/info-producto.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  formProduct = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, Validators.required],
    old_price: [{ value: null, disabled: true }, Validators.required],
    discount: [0, Validators.required],
    slug: [{ value: '', disabled: true }, Validators.required],
    sku: ['', Validators.required],
    stock: ['', Validators.required],
    images: [[], Validators.required],
    category: ['', Validators.required],
    subcategory: ['', Validators.required],
    specs: this.fb.array([]),
    date_end: [''],
  });

  get specs(): FormArray {
    return this.formProduct.get('specs') as FormArray;
  }

  get discount() {
    return this.formProduct.get('discount') as FormControl;
  }

  get price() {
    return this.formProduct.get('price') as FormControl;
  }

  categories: any;
  subcategories: any;
  slug: any;
  discountNow = 0;
  fechaMinima: string;
  fechaStart: any;
  myFiles: any;
  priceWithOffer: any;
  rawPrice = 0;
  selectedImage: any;

  constructor(
    private productService: InfoProductoService,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1);
    this.fechaMinima = hoy.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategory() {
    const category = this.formProduct.get('category')?.value;
    this.getSubcategories(category);
  }

  getSlug() {
    const slug = this.formProduct.get('name')?.value;
    const normalized = slug?.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const slugLower = normalized?.toLowerCase();
    this.slug = slugLower?.replace(/[^a-zA-Z0-9-]+/g, '-');
    this.formProduct.patchValue({
      slug: this.slug,
    });
  }

  createProduct() {
    const formData = new FormData();

    if (this.myFiles && this.myFiles.length > 0) {
      for (let i = 0; i < this.myFiles.length; i++) {
        const file = this.myFiles[i];
        formData.append('images', file);
      }
    }

    const specArray = this.specs.controls.map((control: any) => {
      const specValue = control.get('spec')?.value;
      const valueValue = control.get('value')?.value;
      return { spec: specValue, value: valueValue };
    });

    specArray.forEach((specObj, index) => {
      formData.append(`specs[${index}][spec]`, specObj.spec);
      formData.append(`specs[${index}][value]`, specObj.value);
    });

    if (this.discount?.value > 0) {
      this.formProduct.patchValue({
        old_price: this.priceWithOffer,
      });
      formData.append('price', this.formProduct.get('old_price')?.value || '');
      formData.append('old_price', this.formProduct.get('price')?.value || '');
    } else {
      formData.append('price', this.formProduct.get('price')?.value || '');
      formData.append(
        'old_price',
        this.formProduct.get('old_price')?.value || ''
      );
    }

    formData.append('name', this.formProduct.get('name')?.value || '');
    formData.append(
      'description',
      this.formProduct.get('description')?.value || ''
    );

    formData.append(
      'date_start',
      this.formProduct.get('date_start')?.value || ''
    );
    formData.append('date_end', this.formProduct.get('date_end')?.value || '');
    formData.append('discount', this.discount?.value || 0);
    formData.append('slug', this.formProduct.get('slug')?.value || '');
    formData.append('sku', this.formProduct.get('sku')?.value || '');
    formData.append('category', this.formProduct.get('category')?.value || '');
    formData.append(
      'subcategory',
      this.formProduct.get('subcategory')?.value || ''
    );

    this.productService.createProduct(formData);

    this.formProduct.reset();
  }

  onFileChanged(event: any) {
    const files = event.target.files;
    this.myFiles = files;
    this.selectedImage = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const image = e.target.result;
          this.selectedImage.unshift(image);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getSubcategories(cat: any) {
    this.categoryService.getSubcategories(cat).subscribe((data) => {
      this.subcategories = data;
    });
  }

  setValue(event: any) {
    const discount = event.target.value;
    this.discountNow = discount;
    this.formProduct.patchValue({
      discount: discount,
    });
    const price = this.price?.value;
    this.priceWithOffer = price - price * this.discountNow;
  }

  addSpec() {
    const specs = this.formProduct.controls.specs as FormArray;

    specs.push(
      this.fb.group({
        spec: [''],
        value: [''],
      })
    );
  }

  removeSpec(index: number) {
    const specs = this.formProduct.controls.specs as FormArray;
    specs.removeAt(index);
  }

  fechaInicio(event: any) {
    const date = event.target.value;
    this.fechaStart = date;
  }

  getPriceWithOffer(event: any) {
    const price = event.target.value;
    this.rawPrice = price;
    this.priceWithOffer = price - price * this.discountNow;
  }
}
