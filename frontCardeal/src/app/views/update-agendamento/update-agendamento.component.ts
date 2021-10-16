import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit, Input } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Agendamento } from 'src/app/models/agendamento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { Clientes } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Imoveis } from 'src/app/models/imovel.model';
import ImovelService from 'src/app/services/imovel.service';

@Component({
  selector: 'app-update-agendamento',
  templateUrl: './update-agendamento.component.html',
  styleUrls: ['./update-agendamento.component.css']
})

export class UpdateAgendamentoComponent implements OnInit {

  @Input()
  id!: number;
  private routeSub!: Subscription;
  agendamento!: Agendamento;
  clientes!: Clientes;
  imoveis!: Imoveis;

    constructor(
      private route: ActivatedRoute,
      private service: AgendamentoService,
      private router: Router,
      private location: Location,
      private toast: ToastService,
      private cservice: ClienteService, 
      private iservice: ImovelService, 
    ) {}

   ngOnInit(): void {
    this.lerClientes();
    this.lerImoveis();
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log("Esse é o id", this.id);
      this.receberAgendamento();
    });
  }

  receberAgendamento() {
    this.service.MostraAgendamento(this.id).subscribe((agendamento) => {
      this.agendamento = agendamento;
    });
  }

  atualizar() {
    console.log(this.agendamento);
    this.service.atualizarAgendamento(this.agendamento, this.id).subscribe(
      (_resultado) => {
        this.toast.showSucessToast("Agendamento atualizado com sucesso!!!")
        this.router.navigateByUrl('agendamentos');
      },
      (error) => this.toast.showErroToast("Erro ao atualizar o agendamento"+error)
    );
  }
  voltar() {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  deleteAgendamento() {
    if(confirm("Você tem certeza que deseja excluir este agendamento?")) {
    this.service.deletarAgendamento(this.id).subscribe(
      (resultado) => {
        console.log(this.agendamento);
        this.toast.showSucessToast("Agendamento removido com sucesso")
        this.router.navigateByUrl('agendamentos');
      },
      (error) => this.toast.showErroToast("Erro ao remover o agendamento: "+error)
    );
    }
  }

  lerClientes(){
    this.cservice.listarCliente().subscribe(
      (resultado) => {
        this.clientes = resultado;
      },
      (error) => this.toast.showErroToast("Erro ao carregar a lista de clientes")
    );
  }

  lerImoveis(){
    this.iservice.listarImovel().subscribe(
      (resultado) => {
        this.imoveis = resultado;
      },
      (error) => this.toast.showErroToast("Erro ao carregar a lista de imoveis")
    );
  }
}

