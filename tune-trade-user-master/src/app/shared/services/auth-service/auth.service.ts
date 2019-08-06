import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, SignupRequest } from '../../models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mainURL  = environment.url;
  urlsForAuth = {
    login: this.mainURL + 'userlogin',
    signup: this.mainURL + 'usersignup'
  };
  constructor(private http: HttpClient) { }

  login(loginData: LoginRequest): Observable<any> {
    return this.http.post<any>(this.urlsForAuth.login, loginData);
  }
  signup(signupdata: SignupRequest): Observable<any> {
    return this.http.post<any>(this.urlsForAuth.signup, signupdata);
  }


}
