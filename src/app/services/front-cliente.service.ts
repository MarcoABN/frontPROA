import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Cliente } from '../model/cliente';


@Injectable({
  providedIn: 'root'
})
export class FrontClienteService {

  private url = "http://localhost:8080/ccliente/cliente";

  constructor(private httpClient: HttpClient) { }

   //Listar Clientes a partir do metodo API REST que tem na URL acima
   listarClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.url}`)
  }

  //Serviço para consulta do Cliente
  consultarCliente(IDCliente: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.url}/${IDCliente}`);
  }

  //Servico para incluir uma Cliente
  cadastrarCliente(cliente: Cliente): Observable<object>{
    return this.httpClient.post(`${this.url}`, cliente);
  }

  //Servico para Alterar uma Cliente
  alterarCliente(IDCliente: number, cliente: Cliente): Observable<Object>{
    return this.httpClient.put(`${this.url}/${IDCliente}`, cliente);
  }

  //Servico para Excluir uma Cliente
  excluirCliente(IDCliente: number): Observable<Object>{
    return this.httpClient.delete<Cliente>(`${this.url}/${IDCliente}`);

  }

}