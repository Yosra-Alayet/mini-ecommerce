import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../models/product.model';

// interface CartItem {
//   title: string;
//   category: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

    // Fonction pour calculer le total
  getTotal(): number {
    //return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        return this.cartItems.reduce((total, item) => total + item.price, 0);

  }
}
