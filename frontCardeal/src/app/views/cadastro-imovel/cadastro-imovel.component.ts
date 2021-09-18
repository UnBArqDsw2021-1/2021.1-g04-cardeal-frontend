import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ImovelService from 'src/app/services/imovel.service';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.css'],
})
export class CadastroImovelComponent implements OnInit {
  state!: string;
  city!: string;
  district!: string;
  number!: number;
  zipNumber!: string;
  size!: number;
  numberBedroom!: number;
  numberBath!: number;
  numberPark!: number;
  value!: number;
  idOwner!: number;
  idRealtor!: number;
  media!: string;
  type!: string;

  constructor(private service: ImovelService, private route: Router) {}

  ngOnInit(): void {
    document.querySelector('#link_home')!.classList.remove('ativo');
    document.querySelector('#link_cadastro_imoveis')!.classList.remove('ativo');
    document.querySelector('#link_faq')!.classList.remove('ativo');
    document.querySelector('#link_busca_imoveis')!.classList.remove('ativo');
  }

  handlerSubmit() {
    const imovel = {
      state: this.state,
      city: this.city,
      district: this.district,
      number: this.number,
      zipNumber: this.zipNumber,
      numberBedroom: this.numberBedroom,
      numberBath: this.numberBath,
      numberPark: this.numberPark,
      value: this.value,
      idOwner: this.idOwner,
      media: this.media,
      size: this.size,
      idRealtor: this.idRealtor,
    };
    // console.log(imovel);

    this.service.cadastraImovel(imovel).subscribe(
      (resultado) => {
        console.log(imovel);
        this.limparCampos();
        this.route.navigateByUrl('cadastro-imovel');
      },
      (error) => console.log(error)
    );
  }

  limparCampos() {
    console.log('cheguei');
    this.state = '';
    this.city = '';
    this.district = '';
    this.number = 0;
    this.zipNumber = '';
    this.numberBedroom = 0;
    this.numberBath = 0;
    this.numberPark = 0;
    this.value = 0;
    this.idOwner = 0;
    this.media = '';
    this.size = 0;
    this.idRealtor = 0;
  }
}
