import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imoveis, Imovel } from 'src/app/models/imovel.model';
import  ImovelService  from 'src/app/services/imovel.service';


@Component({
  selector: 'app-meus-imoveis',
  templateUrl: './meus-imoveis.component.html',
  styleUrls: ['./meus-imoveis.component.css'],
})
export class MeusImoveisComponent implements OnInit {
  imoveis!: any;
  imoveis_filter!: Imoveis;

  constructor(private service: ImovelService, private route: Router) {}

  ngOnInit(): void {
    this.lerimoveis();
  }

  lerimoveis() {
    this.service.listarImovel().subscribe(
      (resultado) => {
        console.log(resultado);
        this.imoveis = resultado;
        console.log(this.imoveis);
        this.route.navigateByUrl('meus-imoveis');
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
    this.service.atualizarImovel(imovel.id, imovel).subscribe(
      (resultado) => {
        console.log(imovel);
        // alert('Imovel Deletado');
        this.lerimoveis();
        // this.route.navigateByUrl('login-corretor');
      },
      (error) => console.log(error)
    );
  }
}
