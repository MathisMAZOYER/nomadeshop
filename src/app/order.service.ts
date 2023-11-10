import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = 'assets/orders.json';

  constructor(private http: HttpClient) { }

  getOrder() : Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
}
