import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector } from '@angular/core';
import { Lancamento } from '../models';
import { HttpUtilService } from './http-util.service';

@Injectable()

export class LancamentoService {

  private readonly PATH: string = 'lancamento';
  private readonly PATH_ULTIMO_LANC = '/funcionario/{funcionarioId}/ultimo'
  private readonly PATH_LANCAMENTOS = '/funcionario/{funcionarioId}'
  private readonly PATH_TODOS_LANC = '/funcionario/{funcionarioId}/todos'
  buscarUltimoTipoLancado: any;

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
  ) { }

  buscarUltimoTipoLancamento(): Observable<any> {
    return this.http.get(
      EnvironmentInjector.baseApiUrl + this.PATH +
        this.PATH_ULTIMO_LANC.replace(
          '{funcionarioId}', this.httpUtil.obterIdUsuario()
        ),
        this.httpUtil.headers()
    );
  }

  cadastrar(lancamento: Lancamento): Observable<any>{
    return this.http.post(
      EnvironmentInjector.baseApiUrl + this.PATH,
      lancamento,
      this.httpUtil.headers()
    );
  }
}
