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

  formProduct = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, Validators.required],
    old_price: [null ,Validators.required],
    discount: [0, Validators.required],
    slug: [, Validators.required],
    sku: ['', Validators.required],
    stock: ['', Validators.required],
    images: [[], Validators.required],
    category: ['', Validators.required],
    subcategory: ['', Validators.required],
    specs: this.fb.array([]),
    date_start: [''],
    date_end: ['']
  });

  categories: any;
  subcategories: any;
  product: any;
  slug: any;
  priceWithOffer: any;
  rawPrice = 0;
  fechaStart: any;
  discountNow = 0;
  fechaMinima: string;

  categoryActual: any;
  subcategoryActual: any;

  get price() {
    return this.formProduct.get('price') as FormControl;
  }

  get old_price() {
    return this.formProduct.get('old_price') as FormControl;
  }

  constructor(private categoryService: CategoryService, private infoProductoService: InfoProductoService, private route: ActivatedRoute, private fb: FormBuilder) { 
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1);
    this.fechaMinima = hoy.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.editId = params.get('id') ?? "";
    });
    this.getProducts();
  }

  getSlug() {
    const slug = this.formProduct.get('name')?.value;
    const normalized = slug?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const slugLower = normalized?.toLowerCase();
    this.slug = slugLower?.replace(/[^a-zA-Z0-9-]+/g, '-');
    this.formProduct.patchValue({
      slug: this.slug
    });
  }

  getSlugValue(event: any){
    const slug = event.target.value;
    this.formProduct.patchValue({
      slug: slug
    });
  }
  

  getCategory() {
    const category = this.formProduct.get('category')?.value;
    this.getSubcategories(category);
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
      this.discountNow = this.product.discount
      this.formProduct.patchValue({
        name: this.product.name,
        description: this.product.description,
        discount: this.product.discount,
        price: this.product.discount > 0 ? this.product.old_price: this.product.price,
        images: this.product.images,
        old_price: this.product.discount > 0 ? this.product.price: this.product.old_price,
        slug: this.product.slug,
        sku: this.product.sku,
        stock: this.product.stock,
        date_end: new Date(this.product.date_end).toISOString().substring(0, 10),
        category: this.product.category[0]._id,
        subcategory: this.product.subcategory[0]._id
      });
      console.log(this.formProduct)
      this.categoryActual = this.product.category[0].category;
      this.subcategoryActual = this.product.subcategory[0].subcategory;

      this.getSubcategories(this.product?.category[0]._id);
      this.getCategories();
    });
  }

  updateProduct(){    
    if(this.discountNow > 0){
        this.formProduct.patchValue({
          price: this.priceWithOffer,
          old_price: this.price?.value
        })
    }
    this.infoProductoService.updateProduct(this.editId, this.formProduct.value);
  }

  setValue(event: any){
    const discount = event.target.value;
    this.discountNow = discount
    this.formProduct.patchValue({
      discount: discount
    })
    const price = this.price?.value
    this.priceWithOffer = price - (price * this.discountNow);
    
  }

  getPriceWithOffer(event: any){
    const price = event.target.value;
    this.rawPrice = price;
    this.priceWithOffer = price - (price * this.discountNow)
    
  }

}
