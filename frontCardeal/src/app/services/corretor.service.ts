import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corretor } from '../models/corretor.model';

@Injectable({
  providedIn: 'root',
})
export class CorretorService {
  private listaCorretores: Corretor[];
  private url = 'http://localhost:3000/corretor';

  constructor(private httpClient: HttpClient) {
    this.listaCorretores = [];
  }

  cadastraCorretor(corretor: Corretor): Observable<Corretor> {
    return this.httpClient.post<Corretor>(this.url, corretor);
  }

  loginCorretor(corretor: Corretor) {
    this.listarCorretores().subscribe((corretores: Corretor[]) => {
      console.table(corretores);
      console.log(corretor);
      this.listaCorretores = corretores;
      const existeCorretor = corretores.filter(() => corretor.email);
      console.log('Esse é o corretor filtrado', existeCorretor);
    });
  }

  listarCorretores(): Observable<Corretor[]> {
    const resposta = this.httpClient.get<Corretor[]>(this.url);
    return resposta;
  }
}
