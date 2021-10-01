import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Imovel } from 'src/app/models/imovel.model';
import ImovelService from 'src/app/services/imovel.service';

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
  constructor(private route: ActivatedRoute, private service: ImovelService) {}

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

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
