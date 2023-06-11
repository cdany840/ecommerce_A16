import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { EditProductsComponent } from './components/admin-products/edit-products/edit-products.component';
import { CreateProductsComponent } from './components/admin-products/create-products/create-products.component';
import { StatsComponent } from './components/admin-stats/stats.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { CreateComponent } from './components/admin-categories/create/create.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'products', component: AdminProductsComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'categories', component: AdminCategoriesComponent,
        children: [
          { path: 'create', component: CreateComponent }
        ]
      },
      { path: 'create', component:  CreateProductsComponent},
      { path: 'edit/:id', component: EditProductsComponent },
      { path: '', redirectTo: 'stats', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
