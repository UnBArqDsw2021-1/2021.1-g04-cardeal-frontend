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
      console.log(this.imovel);
      this.receberProprietarios();
    });
  }

  receberProprietarios() {
    this.serviceProprietario.listarProprietario().subscribe(
      (resultado) => {
        this.proprietarios = resultado;
        this.dono = this.proprietarios.filter((e) => {
          return e.id == this.imovel.idOwner;
        });
      },
      (error) => console.log(error)
    );
  }

  atualizar() {
    this.novoDono = this.dono[0].name;
    let idProprietario = this.proprietarios.filter((e) => {
      return e.name == this.novoDono;
    });
    this.imovel.idOwner = idProprietario[0].id;

    this.service.atualizarImovel(this.imovel, this.id).subscribe(
      (resultado) => {
        this.toast.showSucessToast(
          'Informa????es do Im??vel Atualizadas com sucesso!!!'
        );
        this.router.navigateByUrl('meus-imoveis');
        // this.router.navigateByUrl('imovel/' + this.imovel.id);
      },
      (error) =>
        this.toast.showErroToast(
          'Erro ao atualizar as informa????es do corretor!!!' + error
        )
    );
  }

  voltar() {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
