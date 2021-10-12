import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AgendamentoService} from 'src/app/services/agendamento.service';
import { Agendamento } from 'src/app/models/agendamento.model';

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

  constructor(private service: AgendamentoService, private route: Router, private toats: ToastService) {}

  ngOnInit(): void {
    document.querySelector('#link_home')!.classList.remove('ativo');
    document.querySelector('#link_cadastrar_imoveis')!.classList.add('ativo');
    document.querySelector('#link_faq')!.classList.remove('ativo');
    document.querySelector('#link_busca_imoveis')!.classList.remove('ativo');
    document.querySelector('#link_meus_imoveis')!.classList.remove('ativo');
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
        this.route.navigateByUrl('meus-imoveis');
      },
      (error) => this.toats.showErroToast("Erro ao criar o agendamento:" + error)
    );
  }
}
