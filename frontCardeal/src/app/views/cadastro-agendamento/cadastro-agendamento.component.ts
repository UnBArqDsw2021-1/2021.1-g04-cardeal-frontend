import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Agendamento } from 'src/app/models/agendamento.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';
import ImovelService from 'src/app/services/imovel.service';
import { Imovel } from 'src/app/models/imovel.model';

@Component({
  selector: 'app-cadastro-agendamento',
  templateUrl: './cadastro-agendamento.component.html',
  styleUrls: ['./cadastro-agendamento.component.css'],
})
export class CadastroAgendamentoComponent implements OnInit {
  @Input()
  agendamentoObj = {} as Agendamento;
  id!: number;
  idClient!: number;
  idProperty!: number;
  dateMeeting!: Date;
  clientes!: Array<Cliente>;
  proprietario!: string;
  imoveis!: Array<Imovel>;

  constructor(
    private service: AgendamentoService,
    private route: Router,
    private toats: ToastService,
    private serviceCliente: ClienteService,
    private serviceImovel: ImovelService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.receberClientes();
    this.receberImoveis();
  }

  receberClientes() {
    this.serviceCliente.listarCliente().subscribe(
      (resultado) => {
        console.log(resultado);
        this.clientes = resultado;
      },
      (error) => console.log(error)
    );
  }

  receberImoveis() {
    this.serviceImovel.listarImovel().subscribe(
      (resultado) => {
        this.imoveis = resultado;
        console.log(this.imoveis);
      },
      (error) => this.toast.showErroToast('Erro ao listar os imóveis')
    );
  }

  handlerSubmit() {
    console.log('Entrou no cadastro cliente');
    let idCliente = this.clientes.filter((e) => {
      return e.name == this.proprietario;
    });
    console.log(idCliente);

    const Agendamento = {
      // id: this.id,
      idClient: idCliente,
      idProperty: this.idProperty,
      dateMeeting: this.dateMeeting,
    };
    console.log(Agendamento);
    console.log('objeto agendamento');
    console.log(this.agendamentoObj);

    this.service.cadastraAgendamento(this.agendamentoObj).subscribe(
      (resultado) => {
        this.toats.showSucessToast('Agendamento cadastrado com sucesso!!!');
        this.route.navigateByUrl('agendamentos');
      },
      (error) =>
        this.toats.showErroToast('Erro ao criar o agendamento:' + error)
    );
  }
}
