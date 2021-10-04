import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Proprietario } from '../models/proprietario.model';

@Injectable({
  providedIn: 'root',
})
export class ProprietarioService {
  private listaProprietario: Proprietario[];
  private url = "http://localhost:3000/corretor"
  private proprietario!: Proprietario;

  constructor(private httpClient: HttpClient) {
    this.listaProprietario = [];
  }

  listarProprietario(): Observable<Proprietario[]> {
    const resposta = this.httpClient.get<Proprietario[]>(this.url);
    return resposta;
  }
  enviaProprietario(): Proprietario{
    console.log("Enviando Proprietario");
    return this.proprietario;
  }

  recebeProprietario(proprietario: Proprietario): void{
    console.log("Recebendo o Proprietário");
    this.proprietario = proprietario;
    console.log("Proprietario Recebido", proprietario);
    console.log("Proprietario do Service", this.proprietario);
  }

  cadastraProprietario(proprietario: Proprietario) : Observable<Proprietario>{
    return this.httpClient.post<Proprietario>(this.url, proprietario);
  }

  atualizaProprietario(proprietario:Proprietario):Observable<Proprietario>{
    return this.httpClient.put<Proprietario>(this.url+'/'+proprietario.id, proprietario);
  }

  deleteProprietario(proprietario:Proprietario): Observable<Proprietario>{
    return this.httpClient.delete<Proprietario>(`${this.url}/${proprietario.id}`)
  }

}

