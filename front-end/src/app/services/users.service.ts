import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserLogIn, UserLogInResponse } from '../models/user.interface';

const API = 'http://localhost:3000/users/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  setHeader(token: string) {
    httpOptions.headers = httpOptions.headers.set(
      'Authorization',
      `Bearer ${token}`
    );
  }

  userSignUp(user: User): Observable<string> {
    return this.http.post<string>(`${API}signUp`, user);
  }

  userSignIn(user: UserLogIn): Observable<UserLogInResponse> {
    return this.http.post<UserLogInResponse>(`${API}signIn`, user);
  }

  getUserPersonalData(token: string): Observable<User> {
    this.setHeader(token);
    return this.http.get<User>(API, httpOptions);
  }

  editUserPersonalData(token: string, user: User): Observable<string> {
    this.setHeader(token);
    return this.http.patch<string>(API, user, httpOptions);
  }

  changeUserPassword(
    token: string,
    reqBody: { currentPassword: string; password: string }
  ): Observable<string> {
    this.setHeader(token);
    return this.http.post<string>(`${API}changePassword`, reqBody, httpOptions);
  }

  deleteUserAccount(token: string): Observable<string> {
    this.setHeader(token);
    return this.http.delete<string>(API, httpOptions);
  }
}
