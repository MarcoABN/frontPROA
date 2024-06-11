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

  //Serviço para consulta do cliente
  consultarCliente(IDCliente: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.url}/${IDCliente}`);
  }

 

}