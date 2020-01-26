import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderRequest, OrderResponse } from '../models/order.interface';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/orders';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  placeOrder(order: OrderRequest, token: string): Observable<OrderResponse> {
    httpOptions.headers = httpOptions.headers.set(
      'Authorization',
      `Bearer ${token}`
    );
    return this.http.post<OrderResponse>(API, order, httpOptions);
  }
}
