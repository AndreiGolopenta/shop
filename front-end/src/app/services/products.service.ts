import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductAPI } from '../models/productAPI';
import { Product, CategoriesForHome } from '../models/product.interface';

const API = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(query: string): Observable<ProductAPI> {
    return this.http.get<ProductAPI>(`${API}${query}`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${API}/${id}`);
  }

  get4ProductsPerCategory(query: string): Observable<CategoriesForHome> {
    return this.http.get<CategoriesForHome>(`${API}/categories?${query}`);
  }
}
