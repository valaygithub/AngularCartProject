import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';

// Define an interface for the product
interface Product {
  name: string;
  image: string;
  weight: string;
  price: number;
}

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  products: Product[] = [];
  cartService: any;

  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('assets/products.json').subscribe((data: any) => {
      this.products = data;
    });
  }

  addToCart(product: Product): void {
    // Implement adding product to cart logic here
    this.cartService.addToCart(product);
  }
}
