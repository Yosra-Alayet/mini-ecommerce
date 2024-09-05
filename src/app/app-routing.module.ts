import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'store', component: StoreComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers /home
  { path: '**', redirectTo: '/home' } // Redirection en cas de chemin invalide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
