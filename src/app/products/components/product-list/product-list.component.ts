import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((data) => {
    //   this.products = data;
    // });
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products; // Accédez au tableau 'products' dans la réponse
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}