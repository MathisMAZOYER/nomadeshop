import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'assets/users.json';

  constructor(private http:HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

}
