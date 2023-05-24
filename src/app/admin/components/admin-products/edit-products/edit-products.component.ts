import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { InfoProductoService } from 'src/app/services/info-producto.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  editId = "";

  product: any;

  formProduct = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [, Validators.required],
    slug: ['', Validators.required],
    sku: ['', Validators.required],
    category: ['', Validators.required],
    subcategory: ['', Validators.required]
  });

  categories: any;
  subcategories: any;

  constructor(private categoryService: CategoryService, private infoProductoService: InfoProductoService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.editId = params.get('id') ?? "";
    });

    this.getProducts();
    this.getCategories();

  }

  getCategory() {
    const category = this.formProduct.get('category')?.value;
    this.getSubcategories(category);
  }

  createProduct(){
    const data = this.formProduct.value;
    this.infoProductoService.createProduct(data);
    this.formProduct.reset;
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data;
    });
  }

  getSubcategories(cat: any){
    this.categoryService.getSubcategories(cat).subscribe(data =>{
      this.subcategories = data;
    });
  }

  getProducts() {
    this.infoProductoService.getById(this.editId).subscribe((data) => {
      this.product = data;
      this.formProduct.patchValue({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        slug: this.product.slug,
        sku: this.product.sku,
        category: this.product.category[0].category,
        subcategory: this.product.subcategory[0].subcategory
      });
    });
  }

}
