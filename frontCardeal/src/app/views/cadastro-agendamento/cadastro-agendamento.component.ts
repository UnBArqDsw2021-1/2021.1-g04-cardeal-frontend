import { Imovel } from 'src/app/models/imovel.model';
import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Agendamento } from 'src/app/models/agendamento.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';
import ImovelService from 'src/app/services/imovel.service';
import { Subscription } from 'rxjs';

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
  routeSub!: Subscription;
  clientes!: Array<Cliente>;
  proprietario!: string;
  imoveis!: Array<Imovel>;
  imovel!: Imovel;
  idImovel!: number;
  show = false;
  propriedade!: any;
  idPropriedade!: any;

  constructor(
    private service: AgendamentoService,
    private route: Router,
    private toats: ToastService,
    private serviceCliente: ClienteService,
    private serviceImovel: ImovelService,
    private router: ActivatedRoute,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.router.params.subscribe((params) => {
      this.idImovel = params['idImovel'];
      // console.log('Esse é o id do imovel', this.id);
      if (this.idImovel !== undefined) {
        this.show = true;
        this.idProperty = this.idImovel;
        this.recebeImovel();
        this.receberClientes();
      } else {
        this.receberImoveis();
        this.receberClientes();
      }
    });
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
    // console.log('Entrou no cadastro cliente');
    let idCliente = this.clientes.filter((e) => {
      return e.name == this.proprietario;
    });
    // console.log(idCliente);
    if (!this.show) {
      // console.log(this.propriedade);
      this.idPropriedade = this.imoveis.filter((e) => {
        return e.name == this.propriedade;
      });
      this.idProperty = this.idPropriedade[0].id;
    }
    // console.log('id');
    // console.log(idCliente[0].id);
    // console.log('this.idProperty');
    // console.log(this.idProperty);
    // const Agendamento = {
    //   // id: this.id,
    //   idClient: idCliente[0].id,
    //   idProperty: this.idProperty,
    //   dateMeeting: this.dateMeeting,
    // };
    if (idCliente[0].id != undefined) {
      this.agendamentoObj.idClient = idCliente[0].id;
    }
    if (idCliente[0].id != undefined) {
      this.agendamentoObj.idProperty = this.idProperty;
    }
    this.agendamentoObj.dateMeeting = this.dateMeeting;
    // console.log(Agendamento);
    // console.log('objeto agendamento');
    // console.log(this.agendamentoObj);

    this.service.cadastraAgendamento(this.agendamentoObj).subscribe(
      (resultado) => {
        this.toats.showSucessToast('Agendamento cadastrado com sucesso!!!');
        this.route.navigateByUrl('agendamentos');
      },
      (error) =>
        this.toats.showErroToast('Erro ao criar o agendamento:' + error)
    );
  }

  recebeImovel() {
    this.serviceImovel.MostraImovel(this.idImovel).subscribe((imovel) => {
      this.imovel = imovel;
      // console.log(this.imovel);
    });
  }
}
