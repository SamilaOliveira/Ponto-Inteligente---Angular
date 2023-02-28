import { EnvironmentInjector as env, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CadastroPj } from '../';

@Injectable()
export class CadastrarPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
  	  return this.http.post(env + this.PATH, cadastroPj);
  }

}
