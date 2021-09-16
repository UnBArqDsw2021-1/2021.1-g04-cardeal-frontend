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

  constructor(private httpClient: HttpClient){
    this.listaCorretores = []
  }

  cadastraCorretor(corretor: Corretor) : Observable<Corretor>{
    return this.httpClient.post<Corretor>(this.url, corretor);
  }
}