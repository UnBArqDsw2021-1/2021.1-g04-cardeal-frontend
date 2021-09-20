import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Proprietario } from '../models/proprietario.models';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(proprietario: any): Observable<Proprietario> {
    return this.httpClient.post<Proprietario>(this.apiServer + '/proprietario/', JSON.stringify(proprietario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id: number): Observable<Proprietario> {
    return this.httpClient.get<Proprietario>(this.apiServer + '/proprietario/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Proprietario[]> {
    return this.httpClient.get<Proprietario[]>(this.apiServer + '/proprietario/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, proprietario:any): Observable<Proprietario> {
    return this.httpClient.put<Proprietario>(this.apiServer + '/proprietario/' + id, JSON.stringify(proprietario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Proprietario>(this.apiServer + '/proprietario/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
