import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corretor } from '../models/corretor.model';
import jwt_decode from 'jwt-decode';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root',
})
export class CorretorService {
  private listaCorretores: Corretor[];
  private url = `${environment.API}/realtors`
  private corretor!: Corretor;

  constructor(private httpClient: HttpClient) {
    this.listaCorretores = [];
  }

  async loginCorretor(corretor: Corretor): Promise<boolean> {
    const resposta = await this.httpClient.post<any>(`${this.url}/login`, corretor).toPromise();
    if(resposta && resposta.accessToken){
      window.localStorage.setItem('accessToken', resposta.accessToken);
      return true;
    }
    return false;
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
    return this.httpClient.post<Corretor>(this.url, corretor);
  }

  atualizaCorretor(corretor:Corretor):Observable<Corretor>{
    return this.httpClient.patch<Corretor>(this.url+'/'+corretor.id, corretor);
  }

  deleteCorretor(corretor:Corretor): Observable<Corretor>{
    return this.httpClient.delete<Corretor>(`${this.url}/${corretor.id}`)
  }

  getAuthorizationToken(){
    const accessToken = window.localStorage.getItem('accessToken');
    return accessToken;
  }

  getTokenExpirationDate(accessToken: string): Date | any{
    const decoded: any = jwt_decode(accessToken);

    if(decoded.exp === undefined){
      return null; // dar atenção para isso mais tarde
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  tokenExpirado(accessToken?: string):boolean{
    if(!accessToken){
      return true;
    }
    const date = this.getTokenExpirationDate(accessToken);
    if(date === undefined){
      return false
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  usuarioLogado(){
    const accessToken = this.getAuthorizationToken();
    if(!accessToken){
      return false;
    } else if(this.tokenExpirado(accessToken)){
      return false;
    }

    return true;
  }

  MostraCorretor(id: number): Observable<Corretor> {
    return this.httpClient.get<Corretor>(`${this.url}/${id}`);
  }

  logout(){
    window.localStorage.setItem('accessToken', '');
  }

}
