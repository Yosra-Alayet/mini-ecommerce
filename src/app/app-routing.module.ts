import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component';
import { CartComponent } from './cart/components/cart/cart.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'store', component: StoreComponent},
  {path:'products', component: ProductListComponent},
  {path:'details', component: ProductDetailComponent},
  {path:'cart', component: CartComponent},
  { path: 'product/:id', component: ProductDetailComponent },  // Route avec paramètre id


  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirection vers /home
  { path: '**', redirectTo: '/products' } // Redirection en cas de chemin invalide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
