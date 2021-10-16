import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AgendamentoService} from 'src/app/services/agendamento.service';
import { Agendamento } from 'src/app/models/agendamento.model';
import { Clientes } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Imoveis } from 'src/app/models/imovel.model';
import ImovelService from 'src/app/services/imovel.service';

@Component({
  selector: 'app-cadastro-agendamento',
  templateUrl: './cadastro-agendamento.component.html',
  styleUrls: ['./cadastro-agendamento.component.css']
})

export class CadastroAgendamentoComponent implements OnInit {
  @Input()
  agendamentoObj = {} as Agendamento;
  id!: number;
  idClient!: number;
  idProperty!: number;
  dateMeeting!: Date;
  clientes!: Clientes;
  imoveis!: Imoveis;

  constructor(private service: AgendamentoService, private cservice: ClienteService, private iservice: ImovelService, private route: Router, private toats: ToastService) {}

  ngOnInit(): void {
    this.lerClientes();
    this.lerImoveis();
  }

  handlerSubmit() {
    console.log('Entrou no cadastro cliente');
    const Agendamento = {
      id: this.id,
      idClient: this.idClient,
      idProperty: this.idProperty,
      dateMeeting: this.dateMeeting,
    };
    console.log(Agendamento);
    console.log('objeto agendamento');
    console.log(this.agendamentoObj);

    this.service.cadastraAgendamento(this.agendamentoObj).subscribe(
      (resultado) => {
        this.toats.showSucessToast("Agendamento cadastrado com sucesso!!!")
        this.route.navigateByUrl('agendamentos');
      },
      (error) => this.toats.showErroToast("Erro ao criar o agendamento:" + error)
    );
  }

  lerClientes(){
    this.cservice.listarCliente().subscribe(
      (resultado) => {
        this.clientes = resultado;
      },
      (error) => this.toats.showErroToast("Erro ao carregar a lista de clientes")
    );
  }

  lerImoveis(){
    this.iservice.listarImovel().subscribe(
      (resultado) => {
        this.imoveis = resultado;
      },
      (error) => this.toats.showErroToast("Erro ao carregar a lista de imoveis")
    );
  }
}
