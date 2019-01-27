import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'

@Injectable()
export class AuthenticationService {

  private apiRoot = environment.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiRoot}/Customers/login`, {
      email: email,
      password: password
    });
  }

  logout(accessToken: string): Observable<any> {
    return this.http.post(`${this.apiRoot}/Customers/logout?access_token=${accessToken}`, {});
  }
}
