import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CartRoutingModule } from './cart-routing.module';
import { DataViewModule } from 'primeng/dataview';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule, // Required for PrimeNG animations
    CartRoutingModule,
    DataViewModule
  ],
  exports : [
    CartComponent,
    CartRoutingModule,
  ]
})
export class CartModule { }
