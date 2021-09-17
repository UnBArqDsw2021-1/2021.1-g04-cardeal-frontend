import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Corretor } from '../models/corretor.model';

@Injectable({
  providedIn: 'root'
})

export class CorretorService{
  private listaCorretores: Corretor[];
  private url = "http://localhost:3000/corretor"
  private corretor!: Corretor;

  constructor(private httpClient: HttpClient){
    this.listaCorretores = []
  }

  enviaCorretor(): Corretor{
    console.log("Enviando corretor");
    return this.corretor;
  }

  recebeCorretor(corretor: Corretor): void{
    console.log("Reecebdo o corretor");
    this.corretor = corretor;
    console.log("Corretor Recebido", corretor);
    console.log("Corretor do Service", this.corretor);
  }

  cadastraCorretor(corretor: Corretor) : Observable<Corretor>{
    return this.httpClient.post<Corretor>(this.url, corretor);
  }

  loginCorretor(corretor:Corretor): Observable<Corretor[]>{
    return this.httpClient.get<Corretor[]>(`${this.url}?email=${corretor.email}`);
  } 

  atualizaCorretor(corretor:Corretor):Observable<Corretor>{
    return this.httpClient.put<Corretor>(this.url+'/'+corretor.id, corretor);
  }

  deleteCorretor(corretor:Corretor): Observable<Corretor>{
    return this.httpClient.delete<Corretor>(`${this.url}/${corretor.id}`)
  }

  listarCorretores() : Observable<Corretor[]>{
    const resposta = this.httpClient.get<Corretor[]>(this.url);
    return resposta;
  }
}