import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corretor } from '../models/corretor.model';

@Injectable({
  providedIn: 'root',
})
export class CorretorService {
  private listaCorretores: Corretor[];
  private url = "api/realtors"
  private corretor!: Corretor;

  constructor(private httpClient: HttpClient) {
    this.listaCorretores = [];
  }


  loginCorretor(corretor: Omit< Corretor, 'phones'>): any {
    this.listarCorretores().subscribe((corretores: Corretor[]) => {
      console.table(corretores);
      console.log(corretor);
      this.listaCorretores = corretores;
      const existeCorretor = corretores.filter(() => corretor.email);
      console.log('Esse é o corretor filtrado', existeCorretor);
      corretor = existeCorretor[0];
    });
    return corretor;
  }

  listarCorretores(): Observable<Corretor[]> {
    const resposta = this.httpClient.get<Corretor[]>(this.url);
    return resposta;
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
    console.log("Enttrou no service de cadastro")
    return this.httpClient.post<Corretor>(this.url, corretor);
  }

  atualizaCorretor(corretor:Corretor):Observable<Corretor>{
    return this.httpClient.patch<Corretor>(this.url+'/'+corretor.id, corretor);
  }

  deleteCorretor(corretor:Corretor): Observable<Corretor>{
    return this.httpClient.delete<Corretor>(`${this.url}/${corretor.id}`)
  }

  MostraCorretor(id: number): Observable<Corretor> {
    return this.httpClient.get<Corretor>(`${this.url}/${id}`);
  }

}
