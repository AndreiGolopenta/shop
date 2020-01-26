import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filters } from '../models/filters.interface';

const API: string = 'http://localhost:3000/filters';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  constructor(private http: HttpClient) {}

  getFilters(filters: string[], category: string): Observable<Filters> {
    return this.http.post<Filters>(API, { filters, category });
  }
}
