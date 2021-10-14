import { ToastService } from 'src/app/services/toast.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imoveis, Imovel } from 'src/app/models/imovel.model';
import ImovelService from 'src/app/services/imovel.service';
import { CorretorService } from 'src/app/services/corretor.service';

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

  constructor(
    private service: ImovelService,
    private route: Router,
    private toast: ToastService,
    private corretorService: CorretorService
  ) {}

  ngOnInit(): void {
    this.lerimoveis();
  }

  lerimoveis() {
    if (!this.icon) {
      this.service.listarImovelFiltro(this.urlFiltro).subscribe(
        (resultado) => {
          this.imoveis = resultado;
        },
        (error) =>
          this.toast.showErroToast('Erro ao listar os imóveis: ' + error)
      );
    } else {
      this.lerImoveisCorretor();
    }
  }

  lerImoveisCorretor() {
    let corretor = this.corretorService.CorretorAtual();
    console.log(corretor);
    this.urlFiltro = `/idRealtor?limit=50&page=0&tipoAtributo=${corretor.id}`;
    console.log(this.urlFiltro);
    this.service.listarImovelFiltro(this.urlFiltro).subscribe(
      (resultado) => {
        this.imoveis = resultado;
      },
      (error) => this.toast.showErroToast('Erro ao listar os imóveis: ' + error)
    );
  }

  deleteImovel(imovel: any) {
    this.service.deletarImovel(imovel.id).subscribe(
      (resultado) => {
        console.log(imovel);
        this.toast.showSucessToast('Imóvel removido com sucesso');
        this.lerimoveis();
      },
      (error) => this.toast.showErroToast('Erro ao remover imóvel: ' + error)
    );
  }

  view(imovel: any) {
    console.log(imovel.id);
    this.service.MostraImovel(imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/imovel/' + imovel.id);
      },
      (error) =>
        this.toast.showErroToast(
          'Erro ao carregar as informações do imóvel: ' + error
        )
    );
  }

  atualizarImovel(imovel: any) {
    console.log(imovel.id);
    this.service.MostraImovel(imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-imovel/' + imovel.id);
      },
      (error) =>
        this.toast.showErroToast(
          'Erro ao carregar as informações do imóvel: ' + error
        )
    );
  }

  showIcones() {
    this.icones = true;
  }
}
