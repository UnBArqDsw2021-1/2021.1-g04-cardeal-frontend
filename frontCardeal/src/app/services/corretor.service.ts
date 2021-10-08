import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corretor } from '../models/corretor.model';
import jwt_decode from 'jwt-decode';

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

  async loginCorretor(corretor: Corretor): Promise<boolean> {
    const resposta = await this.httpClient.post<any>(this.url, corretor).toPromise();
    if(resposta && resposta.token){
      window.localStorage.setItem('token', resposta.token);
      return true;
    }
    return false;

   /*  this.listarCorretores().subscribe((corretores: Corretor[]) => {
      console.table(corretores);
      console.log(corretor);
      this.listaCorretores = corretores;
      const existeCorretor = corretores.filter(() => corretor.email);
      console.log('Esse é o corretor filtrado', existeCorretor);
      corretor = existeCorretor[0];
    });
    return corretor; */
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

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date | any{
    const decoded: any = jwt_decode(token);

    if(decoded.exp === undefined){
      return null; // dar atenção para isso mais tarde
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  tokenExpirado(token?: string):boolean{
    if(!token){
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if(date === undefined){
      return false
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  usuarioLogado(){
    const token = this.getAuthorizationToken();
    if(!token){
      return false;
    } else if(this.tokenExpirado(token)){
      return false;
    }

    return true;
  }

  MostraCorretor(id: number): Observable<Corretor> {
    return this.httpClient.get<Corretor>(`${this.url}/${id}`);
  }

}
