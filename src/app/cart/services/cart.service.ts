import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Utilisation de BehaviorSubject pour maintenir l'état du panier
  /* 
    Un BehaviorSubject est une forme spéciale de Subject dans RxJS. Il émet la valeur actuelle à tous les abonnés, même si ceux-ci s'abonnent après que la valeur ait été émise
  */
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);


  /*
    Cette ligne expose un Observable de cartItemsSubject. Cela permet à d'autres composants, comme CartComponent, de s'abonner et d'être notifiés à chaque fois que l'état du panier change.
  */
  cart$ = this.cartItemsSubject.asObservable();     //Ici, cartItemsSubject stocke un tableau de produits (Product[]) représentant les articles dans le panier.

  /*
    Le constructeur vérifie si le panier est déjà stocké dans le localStorage. Si c'est le cas, il le charge et met à jour le BehaviorSubject avec les articles du panier.
    Cela permet de conserver l'état du panier même après un rafraîchissement de la page.
  */
  constructor() {
    // Récupère l'état du panier depuis le localStorage (si applicable)
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItemsSubject.next(JSON.parse(savedCart));
    }
  }

  // Ajoute un produit au panier
  /*
    Cette méthode ajoute un produit au panier. Elle récupère les articles actuels avec getValue(), ajoute le nouveau produit, et met à jour l'état du panier en émettant la nouvelle liste d'articles via next().
  */
  addToCart(product: Product): void {
    const currentCartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = [...currentCartItems, product];
    this.cartItemsSubject.next(updatedCartItems);
    this.saveCartToLocalStorage(updatedCartItems);
  }

  // Supprime un produit du panier
  removeFromCart(product: Product): void {
    const currentCartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = currentCartItems.filter(item => item.id !== product.id);
    this.cartItemsSubject.next(updatedCartItems);
    this.saveCartToLocalStorage(updatedCartItems);
  }

  // Sauvegarde l'état du panier dans le localStorage
  /*
    La méthode saveCartToLocalStorage() est appelée pour enregistrer la nouvelle version du panier dans le localStorage.
  */
  private saveCartToLocalStorage(cartItems: Product[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Vide le panier
  /*
    Cette méthode vide entièrement le panier en émettant une liste vide à travers le BehaviorSubject et en supprimant l'entrée du localStorage
  */
  clearCart(): void {
    this.cartItemsSubject.next([]);
    localStorage.removeItem('cartItems');
  }
}