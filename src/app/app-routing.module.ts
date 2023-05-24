import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InfoProductoComponent } from './views/info-producto/info-producto.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { DetallePerfilComponent } from './components/detalle-perfil/detalle-perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DatosEnvioComponent } from './components/datos-envio/datos-envio.component';
import { PagosFacturasComponent } from './components/pagos-facturas/pagos-facturas.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { profileGuard } from './guards/profile.guard';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { checkoutGuard } from './guards/checkout.guard';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos/:subcategory', component: ProductosComponent,},
  { path: 'producto/:id', component: InfoProductoComponent},
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [profileGuard],
    children: [
      { path: 'detalle/:id', component: DetallePerfilComponent, },
      { path: 'compras', component: ComprasComponent, },
      { path: 'detalle-compra', component: DetalleCompraComponent },
      { path: 'envio', component: DatosEnvioComponent },
      { path: 'pago-facturacion', component: PagosFacturasComponent },
      { path: 'favoritos', component: FavoritosComponent },
      { path: '**', component: DetallePerfilComponent },
    ]
  },

  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [checkoutGuard],
    children: [
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent,
        canActivate: [profileGuard]
      },
      { path: '**', component: CartComponent },
    ]
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
