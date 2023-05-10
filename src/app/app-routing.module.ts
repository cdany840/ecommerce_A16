import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InfoProductoComponent } from './views/info-producto/info-producto.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from './auth/guards';
import { DetallePerfilComponent } from './components/detalle-perfil/detalle-perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DatosEnvioComponent } from './components/datos-envio/datos-envio.component';
import { PagosFacturasComponent } from './components/pagos-facturas/pagos-facturas.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto', component: InfoProductoComponent },
  {
    path: 'perfil', component: PerfilComponent,
    children: [
      { path: 'detalle', component: DetallePerfilComponent },
      { path: 'compras', component: ComprasComponent },
      { path: 'envio', component: DatosEnvioComponent },
      { path: 'pago-facturacion', component: PagosFacturasComponent },
      { path: 'favoritos', component: FavoritosComponent },
      { path: '**', component: DetallePerfilComponent },
    ]
  },

  {
    path: 'auth',
    canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
