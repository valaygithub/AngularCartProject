  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })
  export class CartService {
    cart: any[] = [];

    constructor() {}

    addToCart(product: any): void {
      // Check if the product already exists in the cart
      const existingProduct = this.cart.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        existingProduct.quantity++; // Increment quantity if product exists
      } else {
        // Add the product to the cart with quantity 1
        this.cart.push({ ...product, quantity: 1 });
      }
    }

    removeFromCart(product: any): void {
      // Remove the product from the cart
      this.cart = this.cart.filter((item) => item.name !== product.name);
    }

    // Implement other cart functionality as needed
  }
