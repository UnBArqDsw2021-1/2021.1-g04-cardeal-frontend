import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export default class ClienteService {
  private listaClientes: Cliente[];
  // private url = 'http://localhost:3000/clientes';
  private url = 'http://localhost:3000/cliente';
  /*   private url_post = 'http://localhost:3000/put/';
  private url_del = 'http://localhost:3000/delete/'; */

  constructor(private httpClient: HttpClient) {
    this.listaClientes = [];
  }

  cadastraCliente(cliente: Cliente): Observable<Cliente> {
    console.log('Entrou no servico de cadastro de cliente');
    console.log(cliente);
    return this.httpClient.post<Cliente>(this.url, cliente);
  }

  listarCliente(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.url);
  }

  MostraCliente(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.url}/${id}`);
  }

  atualizarCliente(cliente: Cliente, id: number): Observable<Cliente> {
    console.log(id);
    console.log('entrei');
    return this.httpClient.put<Cliente>(`${this.url}/${id}`, cliente);
  }

  deletarCliente(id: number): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${this.url}/${id}`);
  }
}
