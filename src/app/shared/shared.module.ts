import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { NewsletterComponent } from './layouts/newsletter/newsletter.component';
import { CartModule } from "../cart/cart.module";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    CartModule,
    OverlayPanelModule,
    ButtonModule,
    RouterModule.forRoot([]) 
],exports:[
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NewsletterComponent
  ]
})
export class SharedModule { }
