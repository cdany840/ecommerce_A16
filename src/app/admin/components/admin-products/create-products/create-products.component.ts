import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { InfoProductoService } from 'src/app/services/info-producto.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit{

  formProduct = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [, Validators.required],
    slug: [{value: '', disabled: true}, Validators.required],
    sku: ['', Validators.required],
    category: ['', Validators.required],
    subcategory: ['', Validators.required]
  });

  categories: any;
  subcategories: any;
  slug: any;

  constructor(private productService: InfoProductoService, private categoryService: CategoryService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategory() {
    const category = this.formProduct.get('category')?.value;
    this.getSubcategories(category);
  }

  getSlug() {
    const slug = this.formProduct.get('name')?.value;
    const slugLower = slug?.toLowerCase();
    this.slug = slugLower?.replace(/[^a-zA-Z0-9-]+/g, '-');
    console.log(this.slug);
  }
  ///[^a-zA-Z0-9]/g
  //Computadora PRIDE GAMING DPC ELITE / NVIDIA® GeForce RTX™ 3060 / AMD RYZEN 5 5600 / 16GB RAM / 1TB SSD M.2 NVMe / ENF. LIQ. 240MM RGB / 650W 80+

  createProduct(){
    const data = this.formProduct.value;
    this.productService.createProduct(data);
    this.formProduct.reset();
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
}
