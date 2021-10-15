import { Imovel } from 'src/app/models/imovel.model';
import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AgendamentoService} from 'src/app/services/agendamento.service';
import { Agendamento } from 'src/app/models/agendamento.model';
import { Subscription } from 'rxjs';
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
  private routeSub!: Subscription;
  private imovel!: Imovel;

  constructor(private service: AgendamentoService,
              private router: Router,
              private toats: ToastService,
              private route: ActivatedRoute,
              private serviceImovel: ImovelService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['idImovel'];
      console.log("Esse é o id do imovel", this.id);
      if(this.id!==undefined){
        this.recebeImovel();
      }
    });
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
        this.router.navigateByUrl('agendamentos');
      },
      (error) => this.toats.showErroToast("Erro ao criar o agendamento:" + error)
    );
  }
  recebeImovel(){
    this.serviceImovel.MostraImovel(this.id).subscribe((imovel) => {
      this.imovel = imovel;
      console.log(this.imovel);
    });
  }
}
