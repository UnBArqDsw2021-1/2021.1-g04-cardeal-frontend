import { ToastService } from 'src/app/services/toast.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Imovel } from 'src/app/models/imovel.model';
import { Location } from '@angular/common';
import ImovelService from 'src/app/services/imovel.service';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { Proprietario } from 'src/app/models/proprietario.model';

@Component({
  selector: 'app-update-imovel',
  templateUrl: './update-imovel.component.html',
  styleUrls: ['./update-imovel.component.css'],
})
export class UpdateImovelComponent implements OnInit {
  @Input()
  id!: number;
  private routeSub!: Subscription;
  imovel!: Imovel;
  proprietarios!: Array<Proprietario>;
  dono!: any;
  novoDono!: any;

  constructor(
    private route: ActivatedRoute,
    private service: ImovelService,
    private router: Router,
    private toast: ToastService,
    private serviceProprietario: ProprietarioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.receberImovel();
    });
  }

  receberImovel() {
    this.service.MostraImovel(this.id).subscribe((imovel) => {
      this.imovel = imovel;
      this.receberProprietarios();
    });
  }
  receberProprietarios() {
    // console.log('entrei ');
    this.serviceProprietario.listarProprietario().subscribe(
      (resultado) => {
        // console.log(resultado);
        this.proprietarios = resultado;
        this.dono = this.proprietarios.filter((e) => {
          return e.id == this.imovel.idOwner;
        });
        // console.log(this.dono);
      },
      (error) => console.log(error)
    );
  }

  atualizar() {
    console.log(this.imovel);
    let idProprietario = this.proprietarios.filter((e) => {
      return e.name == this.novoDono;
    });
    this.imovel.idOwner = idProprietario[0].id;

    this.service.atualizarImovel(this.imovel, this.id).subscribe(
      (resultado) => {
        this.toast.showSucessToast("Informações do Imóvel Atualizadas com sucesso!!!")
        this.router.navigateByUrl('meus-imoveis');
      },
      (error) => this.toast.showErroToast("Erro ao atualizar as informações do corretor!!!"+error)
    );
  }
  voltar() {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
