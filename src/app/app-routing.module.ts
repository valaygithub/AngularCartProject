import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' }, // Default route to 'catalogue'
  { path: '**', redirectTo: '/catalogue' }, // Redirect to 'catalogue' for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
