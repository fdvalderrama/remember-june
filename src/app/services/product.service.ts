import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private api = 'https://localhost:44394/api/products';

  constructor() {}

  getProduct() {
    return this.http.get<Product[]>(this.api);
  }
}
