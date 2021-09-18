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
  private url = 'http://localhost:3000/posts/';
  private url_post = 'http://localhost:3000/put/';
  private url_del = 'http://localhost:3000/delete/';

  constructor(private httpClient: HttpClient) {
    this.listaImoveis = [];
  }

  cadastraImovel(imovel: Imovel): Observable<Imovel> {
    return this.httpClient.post<Imovel>(this.url, imovel);
  }

  listarImovel(): Observable<Imovel[]> {
    return this.httpClient.get<Imovel[]>(this.url);
  }

  atualizarImovel(imovel: Imovel, id: number): Observable<Imovel> {
    return this.httpClient.put<Imovel>(this.url_post + id, imovel);
  }

  deletarImovel(id: number): Observable<Imovel> {
    return this.httpClient.delete<Imovel>(this.url + id);
  }
}
