import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  icones = true;
  dados = {
    cidade: '',
    bairro: '',
    prec_min: '',
    prec_max: '',
    qtd_banheiros: '',
    qtd_quartos: '',
    area: '',
    tipo_compra: '',
    tipo_aluguel: '',
  };

  constructor(private service: ImovelService, private route: Router) {}

  ngOnInit(): void {
    this.show = true;
  }

  buscar() {
    this.show = false;
    // console.log(this.dados);
  }
}
