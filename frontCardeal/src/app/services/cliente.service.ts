import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private listaCliente: Cliente[];
  private url = `${environment.API}/clients`
  private cliente!: Cliente;

  constructor(private httpClient: HttpClient) {
    this.listaCliente= [];
  }

  cadastraCliente(cliente: Cliente): Observable<Cliente> {
    console.log('Entrou no servico de cadastro imovel');
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
    return this.httpClient.patch<Cliente>(`${this.url}/${id}`, cliente);
  }

  deletarCliente(id: number): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${this.url}/${id}`);
  }
}
