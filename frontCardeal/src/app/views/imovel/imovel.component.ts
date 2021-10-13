import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Imovel } from 'src/app/models/imovel.model';
import { Proprietario } from 'src/app/models/proprietario.model';
import { CorretorService } from 'src/app/services/corretor.service';
import ImovelService from 'src/app/services/imovel.service';
import { ProprietarioService } from 'src/app/services/proprietario.service';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css'],
})
export class ImovelComponent implements OnInit {
  @Input()
  id!: number;
  private routeSub!: Subscription;
  imovel!: Imovel;
  proprietario!: Proprietario;

  constructor(
    private route: ActivatedRoute,
    private service: ImovelService,
    private serviceProp: ProprietarioService,
    private location: Location,
    private serviceCorretor: CorretorService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params);
      // console.log(params['id']);
      this.id = params['id'];
      this.receberImovel();
      this.recebeProprietario();
    });
  }

  receberImovel() {
    this.service.MostraImovel(this.id).subscribe((imovel) => {
      this.imovel = imovel;
      console.log(this.imovel);
      this.atualizarViews();
    });
  }

  atualizarViews() {
    // console.log('entrei');
    var logado = this.serviceCorretor.usuarioLogado();
    // console.log('antes');
    console.log(logado);
    if (!logado) {
      let views: any = this.imovel.viewed;
      views++;
      this.imovel.viewed = views;
      this.service.atualizarImovel(this.imovel, this.id).subscribe(
        (resultado) => {
          // console.log('depois');
          // console.log(this.imovel);
        },
        (error) => console.log(error)
      );
    }
    // console.log(logado);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  voltar() {
    this.location.back();
  }
  recebeProprietario(){
    if(this.imovel.idOwner !== undefined){
      this.serviceProp.MostraProprietario(this.imovel.idOwner).subscribe((proprietario) => {
        this.proprietario = proprietario;
      });
    }
  }
}
