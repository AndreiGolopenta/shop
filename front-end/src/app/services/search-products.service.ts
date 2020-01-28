import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

const API: string = 'http://localhost:3000/searchProducts';

@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {

  constructor(
    private http: HttpClient
  ) { }

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${API}?search=${query}`);
  }
}
