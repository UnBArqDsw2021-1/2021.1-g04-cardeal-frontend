import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Agendamento } from '../models/agendamento.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private listaAgendamento: Agendamento[];
  private url = `${environment.API}/schedules`
  private agendamento!: Agendamento;

  constructor(private httpClient: HttpClient) {
    this.listaAgendamento= [];
  }

  cadastraAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    console.log('Entrou no servico de cadastro imovel');
    console.log(agendamento);
    return this.httpClient.post<Agendamento>(this.url, agendamento);
  }

  listarAgendamento(): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(this.url);
  }

  MostraAgendamento(id: number): Observable<Agendamento> {
    return this.httpClient.get<Agendamento>(`${this.url}/${id}`);
  }

  atualizarAgendamento(Agendamento: Agendamento, id: number): Observable<Agendamento> {
    console.log(id);
    console.log('entrei');
    return this.httpClient.patch<Agendamento>(`${this.url}/${id}`, Agendamento);
  }

  deletarAgendamento(id: number): Observable<Agendamento> {
    return this.httpClient.delete<Agendamento>(`${this.url}/${id}`);
  }
}
