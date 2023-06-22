import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InfoProductoComponent } from './views/info-producto/info-producto.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComprasComponent } from './perfil/compras/compras.component';
import { DetalleCompraComponent } from './perfil/detalle-compra/detalle-compra.component';
import { DetallePerfilComponent } from './perfil/detalle-perfil/detalle-perfil.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatosEnvioComponent } from './perfil/datos-envio/datos-envio.component';
import { SearchPipe } from './pipes/search.pipe';
import { FavoritosComponent } from './perfil/favoritos/favoritos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptor/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    OfertasComponent,
    ProductosComponent,
    CarouselComponent,
    InfoProductoComponent,
    PerfilComponent,
    ComprasComponent,
    DetalleCompraComponent,
    DetallePerfilComponent,
    CheckoutComponent,
    CartComponent,
    DatosEnvioComponent,
    SearchPipe,
    FavoritosComponent,
    FooterComponent,
    ContactComponent,
    BrandsComponent,
    CategoriesComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
