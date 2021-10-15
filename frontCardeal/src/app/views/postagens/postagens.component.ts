import { ToastService } from 'src/app/services/toast.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Corretor } from 'src/app/models/corretor.model';
import { Imoveis, Imovel } from 'src/app/models/imovel.model';
import { CorretorService } from 'src/app/services/corretor.service';
import ImovelService from 'src/app/services/imovel.service';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css'],
})
export class PostagensComponent implements OnInit {
  @Input() icon = false;
  imoveis!: any;
  imoveis_filter!: Imoveis;
  filter!: any;
  imovel!: Imovel;
  icones = false;
  corretor!: any;
  url!: string;

  constructor(
    private service: ImovelService,
    private route: Router,
    private serviceCorretor: CorretorService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.lerimoveis();
  }

  lerimoveis() {
    if (!this.icon) {
      this.service.listarImovel().subscribe(
        (resultado) => {
          this.imoveis = resultado;
        },
        (error) => this.toast.showErroToast("Erro ao listar os imóveis")
      );
    } else {
      this.lerimoveisFilter();
    }
  }

  lerimoveisFilter() {
    this.corretor = this.serviceCorretor.CorretorAtual();
    this.url = `/idRealtor?limit=50&page=0&tipoAtributo=${this.corretor.id}`;
    this.service.listarImovelFiltro(this.url).subscribe(
      (resultado) => {
        this.imoveis = resultado;
      },
      (error) => this.toast.showErroToast("Erro ao filtrar imóveis")
    );
  }

  deleteImovel(imovel: any) {
    this.service.deletarImovel(imovel.id).subscribe(
      (resultado) => {
        this.toast.showSucessToast("Imóvel Removido com sucesso")
        this.lerimoveis();
      },
      (error) => this.toast.showErroToast("Erro ao remover imóvel")
    );
  }

  view(imovel: any) {
    console.log(imovel.id);
    this.service.MostraImovel(imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/imovel/' + imovel.id);
      },
      (error) => this.toast.showErroToast("Erro ao carregar informações de imóvel")
    );
  }

  atualizarImovel(imovel: any) {
    console.log(imovel.id);
    this.service.MostraImovel(imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-imovel/' + imovel.id);
      },
      (error) => this.toast.showErroToast("Erro ao carregar informações de imóvel")
    );
  }

  showIcones() {
    this.icones = true;
  }
}
