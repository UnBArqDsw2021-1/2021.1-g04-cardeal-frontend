import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { Proprietario, Proprietarios } from 'src/app/models/proprietario.model';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent implements OnInit {
  proprietarios!: any;
  proprietario!: Proprietario;
  constructor(private service: ProprietarioService, private route: Router, private toast: ToastService) {}

  ngOnInit(): void {
    this.lerProprietarios();
  }

  lerProprietarios(){
    this.service.listarProprietario().subscribe(
      (resultado) => {
        this.proprietarios = resultado;
      },
      (error) => console.log(error)
    );
  }

  deleteProprietario(proprietario: any) {
    this.service.deletarProprietario(proprietario.id).subscribe(
      (resultado) => {
        console.log(proprietario);
        this.toast.showSucessToast("Proprietario Removido com sucesso!")
        this.lerProprietarios();
      },
      (error) => this.toast.showErroToast("Erro ao remover proprietário")
    );
  }

  view(proprietario: any) {
    console.log(proprietario.id);
    this.service.MostraProprietario(proprietario.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/proprietario/' + proprietario.id);
      },
      (error) => this.toast.showErroToast("Erro ao carregar informações de proprietário")
    );
  }

  atualizarProprietario(proprietario: any) {
    console.log(proprietario.id);
    this.service.MostraProprietario(proprietario.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-proprietario/' + proprietario.id);
      },
      (error) => this.toast.showErroToast("Erro ao carregar informações de proprietário")
    );
  }
}
