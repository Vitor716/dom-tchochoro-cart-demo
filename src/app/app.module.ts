import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductSelectedComponent } from './all-products/product-selected/product-selected.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './shared/product.service';

const appRoutes: Routes = [
  {path: '', component: AllProductsComponent},
  {path: 'productSelected', component: ProductSelectedComponent },
  {path: 'cart', component: CartComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllProductsComponent,
    ProductSelectedComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
