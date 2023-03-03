import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CadastroPf } from '../';
import { En }



@Injectable()
export class CadastrarPfService {

  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any> {
  	  return this.http.post(env.baseApiUrl + this.PATH, cadastroPf);
  }

}
