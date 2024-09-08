import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

//Cette annotation signifie que ce service est fourni à la racine de l'application Angular et est disponible globalement. Cela évite d'avoir à l'importer manuellement dans chaque module.
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  //private apiUrl = 'https://fakestoreapi.com/products';  // URL de l'API 
  private apiUrl = 'https://dummyjson.com/products'; 

  constructor(private http: HttpClient) { }  // Le HttpClient d'Angular est utilisé pour effectuer des appels API. Il est injecté via le constructeur du service, ce qui permet d'effectuer des requêtes HTTP

  // Récupère tous les produits de l'API
  //Elle retourne un Observable<Product[]>, ce qui signifie que la méthode émet une liste de produits que les composants peuvent observer et utiliser
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Récupère un produit spécifique par son id
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);  //Le backtick (`) permet de construire une URL dynamique avec l'ID du produit
  }
}