import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Agendamento, Agendamentos } from 'src/app/models/agendamento.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente, Clientes } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})

export class AgendamentosComponent implements OnInit {
  agendamentos!: Agendamentos;
  dados!: Array<{agen: Agendamento, cli: string}>;

  constructor(private service: AgendamentoService, private cservice: ClienteService, private route: Router) {}

  ngOnInit(): void {
    this.lerAgendamentos();
  }

  lerAgendamentos(){
    this.service.listarAgendamento().subscribe(
      (resultado) => {
        this.agendamentos = resultado;
      },
      (error) => console.log(error)

    );
  }

  deleteAgendamento(agendamento: any) {
    this.service.deletarAgendamento(agendamento.id).subscribe(
      (resultado) => {
        console.log(agendamento);
        alert('Agendamento Deletado');
        this.lerAgendamentos();

        // this.route.navigateByUrl('login-corretor');
      },
      (error) => console.log(error)
    );
  }

  view(agendamento: any) {
    console.log(agendamento.id);
    this.service.MostraAgendamento(agendamento.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/agendamento/' + agendamento.id);
      },
      (error) => console.log(error)
    );
  }

  atualizarAgendamento(agendamento: any) {
    console.log(agendamento.id);
    this.service.MostraAgendamento(agendamento.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-agendamento/' + agendamento.id);
      },
      (error) => console.log(error)
    );
  }

  abrirPropriedade(idPropriedade: any) {
    this.route.navigateByUrl('/imovel/' + idPropriedade)
  }

  corrigeData(data:any){
    var data_corrigida = new Date(data);
    
    return data_corrigida.setHours(data_corrigida.getHours() + 12);
  }

  compararDatas(data: any){
    var dataAgendamento = new Date(data).toISOString().slice(0, 10);
    var hoje = new Date().toISOString().slice(0, 10);
    if(dataAgendamento < hoje) {
      return -1;
    } 

    if(dataAgendamento === hoje) {
      return 0;
    } 

    return 1;
  }
}


