import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Proprietario } from '../models/proprietario.model';

@Injectable({
  providedIn: 'root',
})
export class ProprietarioService {
  private listaProprietario: Proprietario[];
  private url = "api/owners"
  private proprietario!: Proprietario;

  constructor(private httpClient: HttpClient) {
    this.listaProprietario = [];
  }

  cadastraProprietario(proprietario: Proprietario): Observable<Proprietario> {
    console.log('Entrou no servico de cadastro imovel');
    console.log(proprietario);
    return this.httpClient.post<Proprietario>(this.url, proprietario);
  }

  listarProprietario(): Observable<Proprietario[]> {
    return this.httpClient.get<Proprietario[]>(this.url);
  }

  MostraProprietario(id: number): Observable<Proprietario> {
    return this.httpClient.get<Proprietario>(`${this.url}/${id}`);
  }

  atualizarProprietario(proprietario: Proprietario, id: number): Observable<Proprietario> {
    console.log(id);
    console.log('entrei');
    return this.httpClient.put<Proprietario>(`${this.url}/${id}`, proprietario);
  }

  deletarProprietario(id: number): Observable<Proprietario> {
    return this.httpClient.delete<Proprietario>(`${this.url}/${id}`);
  }
}

