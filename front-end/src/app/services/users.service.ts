import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserLogIn, UserLogInResponse } from '../models/user.interface';

const API = 'http://localhost:3000/users/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  userSignUp(user: User): Observable<string> {
    return this.http.post<string>(`${API}signUp`, user);
  }

  userSignIn(user: UserLogIn): Observable<UserLogInResponse> {
    return this.http.post<UserLogInResponse>(`${API}signIn`, user);
  }
}
