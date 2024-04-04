import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CartComponent,
    ConfirmOrderComponent,
    // HttpClientModule,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
