import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imovel } from 'src/app/models/imovel.model';
import ImovelService from 'src/app/services/imovel.service';

@Component({
  selector: 'app-buscar-imoveis',
  templateUrl: './buscar-imoveis.component.html',
  styleUrls: ['./buscar-imoveis.component.css'],
})
export class BuscarImoveisComponent implements OnInit {
  @Input()
  imoveis!: any;
  show!: any;
  imovel = {} as Imovel;
  url: any;
  status = '';
  msg = '* Campos obrigatórios.';
  alerta = false;
  dados = {
    cidade: '',
    bairro: '',
    prec_min: '',
    prec_max: '',
    qtd_banheiros: '',
    qtd_quartos: '',
    area: '',
    tipo_compra: false,
    tipo_aluguel: false,
  };

  constructor(private service: ImovelService, private route: Router) {}

  ngOnInit(): void {
    this.show = true;
    document.querySelector('#link_busca_imoveis')!.classList.add('ativo');
    document
      .querySelector('#link_cadastrar_imoveis')!
      .classList.remove('ativo');
    document.querySelector('#link_faq')!.classList.remove('ativo');
    document.querySelector('#link_pagina_home')!.classList.remove('ativo');
    document.querySelector('#link_meus_imoveis')!.classList.remove('ativo');
  }

  gerarAlerta() {
    if (this.dados.tipo_compra == false && this.dados.tipo_aluguel == false)
      this.alerta = true;
    else {
      this.alerta = false;
      this.buscar2();
    }
  }

  // usando componente de postagens, e sem o serviço local
  buscar() {
    this.show = !this.show;
    this.tipoStatus();
    this.url = `/search?limit=50&page=0&city=${this.dados.cidade}&district=${this.dados.bairro}&lowprice=${this.dados.prec_min}&highprice=${this.dados.prec_max}&baths=${this.dados.qtd_banheiros}&rooms=${this.dados.qtd_quartos}&m2=${this.dados.area}&status=${this.status}`;
  }

  buscar2() {
    // this.show = !this.show;
    this.tipoStatus();
    this.url = `/search?limit=50&page=0&city=${this.dados.cidade}&district=${this.dados.bairro}&lowprice=${this.dados.prec_min}&highprice=${this.dados.prec_max}&baths=${this.dados.qtd_banheiros}&rooms=${this.dados.qtd_quartos}&m2=${this.dados.area}&status=${this.status}`;
    this.lerImoveisFiltro();
  }

  tipoStatus() {
    if (this.dados.tipo_aluguel == true && this.dados.tipo_compra == false) {
      this.status = 'Aluguel';
    } else if (
      this.dados.tipo_aluguel == false &&
      this.dados.tipo_compra == true
    ) {
      this.status = 'Venda';
    } else if (
      this.dados.tipo_aluguel == true &&
      this.dados.tipo_compra == true
    ) {
      this.status = '';
    }
  }

  lerImoveisFiltro() {
    this.service.listarImovelFiltro(this.url).subscribe(
      (resultado) => {
        console.log(resultado);
        this.imoveis = resultado;
        console.log(this.url);
      },
      (error) => console.log(error)
    );
  }

  view(imovel: any) {
    console.log(imovel.id);
    this.service.MostraImovel(imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/imovel/' + imovel.id);
      },
      (error) => console.log(error)
    );
  }
}

// http://localhost:3000/properties/search?limit=50&page=0&city=${this.dados.cidade}&district=Taguatinga&lowprice=20000&highprice=40000&baths=2&rooms=10&m2=50&status=Comprar
