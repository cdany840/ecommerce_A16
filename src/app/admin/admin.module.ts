import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { EditProductsComponent } from './components/admin-products/edit-products/edit-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateProductsComponent } from './components/admin-products/create-products/create-products.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    EditProductsComponent,
    CreateProductsComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
