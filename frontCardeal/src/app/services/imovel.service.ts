import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imovel } from '../models/imovel.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class ImovelService {
  private listaImoveis: Imovel[];
  private url = `${environment.API}/properties`;

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

  listarImovelFiltro(url: string): Observable<Imovel[]> {
    return this.httpClient.get<Imovel[]>(this.url + url);
  }

  MostraImovel(id: number): Observable<Imovel> {
    return this.httpClient.get<Imovel>(`${this.url}/${id}`);
  }

  atualizarImovel(imovel: Imovel, id: number): Observable<Imovel> {
    console.log(id);
    console.log('entrei');
    return this.httpClient.patch<Imovel>(`${this.url}/${id}`, imovel);
  }

  deletarImovel(id: number): Observable<Imovel> {
    return this.httpClient.delete<Imovel>(`${this.url}/${id}`);
  }
}
