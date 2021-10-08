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
  imoveis!: any;
  imoveis_filter!: Imoveis;
  filter!: any;
  imovel!: Imovel;
  icones = false;

  constructor(private service: ImovelService, private route: Router) {}

  ngOnInit(): void {
    this.lerimoveis();
  }

  lerimoveis() {
    this.service.listarImovel().subscribe(
      (resultado) => {
        console.log(resultado);
        // this.filter = resultado.filter((e) => {
        //   console.log(e.type);
        //   return e.type == 'Casa';
        // });
        console.log(this.filter);
        this.imoveis = resultado;
        // console.log(this.imoveis);
        // this.route.navigateByUrl('meus-imoveis');
      },
      (error) => console.log(error)
    );
  }

  deleteImovel(imovel: any) {
    this.service.deletarImovel(imovel.id).subscribe(
      (resultado) => {
        console.log(imovel);
        alert('Imovel Deletado');
        this.lerimoveis();

        // this.route.navigateByUrl('login-corretor');
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

  atualizarImovel(imovel: any) {
    console.log(imovel.id);
    this.service.MostraImovel(imovel.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-imovel/' + imovel.id);
      },
      (error) => console.log(error)
    );
  }

  showIcones() {
    this.icones = true;
  }
}
