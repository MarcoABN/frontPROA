import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Embarcacao } from '../model/embarcacao';

@Injectable({
  providedIn: 'root'
})
export class FrontEmbarcacaoService {

  private url = "http://localhost:8080/cembarcacao/embarcacao";

  constructor(private httpClient: HttpClient) { }

  //Listar Embarcacoes a partir do metodo API REST que tem na URL acima
  listarEmbarcacoes(): Observable<Embarcacao[]>{
    return this.httpClient.get<Embarcacao[]>(`${this.url}`)
  }

  //Serviço para consulta da embarcacao
  consultarEmbarcacao(IDEmbarcacao: number): Observable<Embarcacao>{
    return this.httpClient.get<Embarcacao>(`${this.url}/${IDEmbarcacao}`);
  }

  //Servico para incluir uma embarcacao
  cadastrarEmbarcacao(barco: Embarcacao): Observable<object>{
    return this.httpClient.post(`${this.url}`, barco);
  }

  //Servico para Alterar uma Embarcacao
  alterarEmbarcacao(IDEmbarcacao: number, barco: Embarcacao): Observable<Object>{
    return this.httpClient.put(`${this.url}/${IDEmbarcacao}`, barco);
  }

  //Servico para Excluir uma Embarcacao
  excluirEmbarcacao(IDEmbarcacao: number): Observable<Object>{
    return this.httpClient.delete<Embarcacao>(`${this.url}/${IDEmbarcacao}`);
  }

}
