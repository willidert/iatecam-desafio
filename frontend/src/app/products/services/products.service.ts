import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly API_URL: string;

  constructor(private client: HttpClient) {
    this.API_URL = 'http://localhost:8000/products';
  }

  list(): Observable<Product[]> {
    return this.client.get<Product[]>(this.API_URL);
  }

  save(product: Partial<Product>): Observable<Product> {
    return this.client.post<Product>(this.API_URL, product);
  }
}
