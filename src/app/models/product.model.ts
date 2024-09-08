export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    thumbnail: string;
    quantity?: number;  // Facultatif si vous voulez gérer la quantité dans le panier
  }