import { HttpClient, HttpHeaders } from '@angular/common/http';

import { postConfigue } from '../post.configue';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService
 {
  constructor(private http: HttpClient) { }

  //login method
  public userLogin(credentials: object): Observable<any>
   {

    // this url will be http://localhost:3000/users/login
    const url = postConfigue.getPath() + '/users/login';

    return this.http.post(url, credentials);
  }

  //register method
  public userRegister(credentials: object): Observable<any> 
  {

    const url = postConfigue.getPath() + '/users/register';

    return this.http.post(url, credentials);
  }
}