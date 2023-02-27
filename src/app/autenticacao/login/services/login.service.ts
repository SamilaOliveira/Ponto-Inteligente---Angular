import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../';
import { EnvironmentInjector as env } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly PATH: string = 'auth';
  constructor(private httpClient: HttpClient) {}

  logar(login: Login): Observable<any> {
   return this.httpClient.post(this.PATH, login);
  }
}
