import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Empresa } from './../core/model';
import { MoneyHttp } from '../seguranca/money-http';

export class EmpresaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class EmpresaService {

  empresasUrl: string;

  constructor(private http: MoneyHttp) {
    this.empresasUrl = `${environment.apiUrl}/empresas`;
  }

  pesquisar(filtro: EmpresaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.empresasUrl}`, { params })
      .toPromise()
      .then(response => {
        const empresas = response.content;

        const resultado = {
          empresas,
          total: response.totalElements
        };

        return resultado;
      })
  }

  listarTodas(): Promise<any> {
    return this.http.get<any>(this.empresasUrl)
      .toPromise()
      .then(response => response.content);
  }

  excluir(id: string): Promise<void> {
    return this.http.delete(`${this.empresasUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(empresa: Empresa): Promise<Empresa> {
    return this.http.post<Empresa>(this.empresasUrl, empresa)
      .toPromise();
  }

  atualizar(empresa: Empresa): Promise<Empresa> {
    return this.http.put<Empresa>(`${this.empresasUrl}/${empresa.id}`, empresa)
      .toPromise();
  }

  buscarPorId(id: string): Promise<Empresa> {
    return this.http.get<Empresa>(`${this.empresasUrl}/${id}`)
      .toPromise();
  }

}