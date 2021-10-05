import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imovel } from '../models/imovel.model';

@Injectable({
  providedIn: 'root',
})
export default class ImovelService {
  private listaImoveis: Imovel[];
  // private url = 'http://localhost:3000/imoveis';
  private url = 'http://localhost:3000/imoveis';
  /*   private url_post = 'http://localhost:3000/put/';
  private url_del = 'http://localhost:3000/delete/'; */

  constructor(private httpClient: HttpClient) {
    this.listaImoveis = [];
  }

  cadastraImovel(imovel: Imovel): Observable<Imovel> {
    console.log('Entrou no servico de cadastro imovel');
    console.log(imovel);
    return this.httpClient.post<Imovel>(this.url, imovel);
  }

  listarImovel(): Observable<Imovel[]> {
    return this.httpClient.get<Imovel[]>(this.url);
  }

  MostraImovel(id: number): Observable<Imovel> {
    return this.httpClient.get<Imovel>(`${this.url}/${id}`);
  }

  atualizarImovel(imovel: Imovel, id: number): Observable<Imovel> {
    console.log(id);
    console.log('entrei');
    return this.httpClient.put<Imovel>(`${this.url}/${id}`, imovel);
  }

  deletarImovel(id: number): Observable<Imovel> {
    return this.httpClient.delete<Imovel>(`${this.url}/${id}`);
  }
}
