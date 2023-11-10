import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
	
	apiUrl = 'assets/products.json'

  constructor(private http: HttpClient) { }
  
  getProducts():Observable<Product[]> {
	  return this.http.get<Product[]>(this.apiUrl);
  }
 
  getProductById(productId: number): Observable<Product> {
		return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
	  }
}
