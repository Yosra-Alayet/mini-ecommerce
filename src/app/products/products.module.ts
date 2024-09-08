import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    ProductsRoutingModule
  ],
  exports : [
    ProductListComponent,
    ProductDetailComponent,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
