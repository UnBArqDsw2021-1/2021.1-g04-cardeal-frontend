import { ToastService } from 'src/app/services/toast.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imoveis, Imovel } from 'src/app/models/imovel.model';
import ImovelService from 'src/app/services/imovel.service';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css'],
})
export class PostagensComponent implements OnInit {
  @Input() icon = false;

  @Input('tipo') urlFiltro: string = '';

  imoveis!: any;
  imoveis_filter!: Imoveis;
  filter!: any;
  imovel!: Imovel;
  icones = false;

  constructor(private service: ImovelService, private route: Router, private toast: ToastService) {}

  ngOnInit(): void {
    this.lerimoveis();
  }

  lerimoveis() {
    this.service.listarImovelFiltro(this.urlFiltro).subscribe(
      (resultado) => {
        this.imoveis = resultado;
        // console.log(resultado);
        // console.log(this.urlFiltro);
      },
      (error) => this.toast.showErroToast("Erro ao listar os imóveis: "+ error)
    );
    // } else console.log('fazer a buscar com parametros');
  }

  deleteImovel(imovel: any) {
    this.service.deletarImovel(imovel.id).subscribe(
      (resultado) => {
        console.log(imovel);
        this.toast.showSucessToast("Imóvel removido com sucesso")
        this.lerimoveis();

        // this.route.navigateByUrl('login-corretor');
      },
      (error) => this.toast.showErroToast("Erro ao remover imóvel: "+error)
    );
  }

  view(imovel: any) {
    console.log(imovel.id);
    this.service.MostraImovel(imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/imovel/' + imovel.id);
      },
      (error) => this.toast.showErroToast("Erro ao carregar as informações do imóvel: "+error)
    );
  }

  atualizarImovel(imovel: any) {
    console.log(imovel.id);
    this.service.MostraImovel(imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-imovel/' + imovel.id);
      },
      (error) => this.toast.showErroToast("Erro ao carregar as informações do imóvel: "+error)
    );
  }

  showIcones() {
    this.icones = true;
  }
}
