import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { EditProductsComponent } from './components/admin-products/edit-products/edit-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateProductsComponent } from './components/admin-products/create-products/create-products.component';
import { StatsComponent } from './components/admin-stats/stats.component';
import { NgChartsModule } from 'ng2-charts';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { CreateComponent } from './components/admin-categories/create/create.component';
import { EditComponent } from './components/admin-categories/edit/edit.component';
import { AdminSubcategoriesComponent } from './components/admin-subcategories/admin-subcategories.component';
import { CreateSubcategoryComponent } from './components/admin-subcategories/create/createSubcategory.component';
import { EditSubcategoryComponent } from './components/admin-subcategories/edit-subcategory/edit-subcategory.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    EditProductsComponent,
    CreateProductsComponent,
    StatsComponent,
    AdminCategoriesComponent,
    CreateComponent,
    EditComponent,
    AdminSubcategoriesComponent,
    CreateSubcategoryComponent,
    EditSubcategoryComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgChartsModule
  ]
})
export class AdminModule { }
