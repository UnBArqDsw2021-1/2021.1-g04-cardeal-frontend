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
    this.lerimoveis();
  }

  buscar() {
    this.show = false;
    // console.log(this.dados);
  }

  lerimoveis() {
    this.service.listarImovel().subscribe(
      (resultado) => {
        console.log(resultado);
        // this.filter = resultado.filter((e) => {
        //   console.log(e.type);
        //   return e.type == 'Casa';
        // });
        this.imoveis = resultado;
        // console.log(this.imoveis);
      },
      (error) => console.log(error)
    );
  }

  view(imovel: any) {
    console.log(imovel.id);
    this.service.atualizarImovel(imovel, imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/imovel/' + imovel.id);
      },
      (error) => console.log(error)
    );
  }
}
