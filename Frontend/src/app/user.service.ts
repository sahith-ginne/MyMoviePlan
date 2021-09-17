import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http : HttpClient) { }

  createUser(user:User) : Observable<object>{

    return this.http.post("http://localhost:8080/api/v1/users", user);
  }

  
}
