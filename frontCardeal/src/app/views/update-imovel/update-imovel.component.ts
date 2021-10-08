import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Imovel } from 'src/app/models/imovel.model';
import { Location } from '@angular/common';
import ImovelService from 'src/app/services/imovel.service';

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

  constructor(
    private route: ActivatedRoute,
    private service: ImovelService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params);
      // console.log(params['id']);
      this.id = params['id'];
      this.receberImovel();
    });
  }

  receberImovel() {
    this.service.MostraImovel(this.id).subscribe((imovel) => {
      this.imovel = imovel;
      // console.log(this.imovel);
    });
  }

  atualizar() {
    // console.log(imovel);
    console.log(this.imovel);
    this.service.atualizarImovel(this.imovel, this.id).subscribe(
      (resultado) => {
        this.router.navigateByUrl('meus-imoveis');
      },
      (error) => console.log(error)
    );
  }
  voltar() {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  

}
