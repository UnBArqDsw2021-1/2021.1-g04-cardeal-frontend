import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorretorService } from 'src/app/services/corretor.service';
import ImovelService from 'src/app/services/imovel.service';
import { ToastService } from 'src/app/services/toast.service';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { Imovel } from '../../models/imovel.model';
import jwt_decode from 'jwt-decode';
import { Proprietario } from 'src/app/models/proprietario.model';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.css'],
})
export class CadastroImovelComponent implements OnInit {
  name!: string;
  dono!: string;
  city!: string;
  state!: string;
  district!: string;
  street!: string;
  number!: number;
  zipNumber!: string;
  type!: string;
  size!: string;
  numberBedroom!: number;
  numberBath!: number;
  numberPark!: number;
  status!: string;
  value!: number;
  idOwner!: number;
  idRealtor!: number;
  image!: string;
  proprietarios!: Array<Proprietario>;
  selecteFile!: File;

  constructor(
    private service: ImovelService,
    private route: Router,
    private serviceProprietario: ProprietarioService,
    private serviceCorretor: CorretorService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.receberProprietarios();
  }

  onFileSelected(event:any){
    this.selecteFile = <File>event.target.files[0];
  }

  handlerSubmit() {
    let idProprietario = this.proprietarios.filter((e) => {
      return e.name == this.dono;
    });
    const token = this.serviceCorretor.getAuthorizationToken();
    let autenticado: any;
    if (token != null) {
      autenticado = jwt_decode(token);
    }

    const fd: FormData = new FormData();
    //console.log("Quando criado", fd);
    //console.log("COm imagem", fd);
    //console.log(fd);

    const property = {
      name: this.name,
      city: this.city,
      state: this.state,
      district: this.district,
      street: this.street,
      number: this.number,
      zipNumber: this.zipNumber,
      type: this.type,
      size: this.size,
      numberBedroom: this.numberBedroom,
      numberBath: this.numberBath,
      numberPark: this.numberPark,
      status: this.status,
      value: this.value,
      viewed: 0,
      idOwner: idProprietario[0].id,
      idRealtor: autenticado.id
    };

    fd.append('name', this.name);
    fd.append('city', this.city)
    fd.append('state', this.state)
    fd.append('district', this.district)
    fd.append('street', this.street)
    fd.append('number', (this.number).toString())
    fd.append('zipNumber', this.zipNumber)
    fd.append('type', this.type)
    fd.append('size', this.size)
    fd.append('numberBedroom', (this.numberBedroom).toString())
    fd.append('numberBath', (this.numberBath).toString())
    fd.append('numberPark', (this.numberPark).toString())
    fd.append('status', this.status)
    fd.append('viewed', '0')
    fd.append('value', (this.value).toString())
    if( idProprietario[0].id != undefined) {
      fd.append('idOwner', (idProprietario[0].id).toString())
    }
    if( autenticado.id != undefined) {
      fd.append('idRealtor', (autenticado.id).toString())
    }
    fd.append('image', this.selecteFile, this.selecteFile.name);
    // console.log(property);


    //console.log("COm o body", fd);
    //console.log(fd.getAll('image'))
    //console.log(fd.getAll('data'))

    this.service.cadastraImovel(fd).subscribe(
      (resultado) => {
        this.toast.showSucessToast('Imovel cadastrado com sucesso!!!');
        this.route.navigateByUrl('meus-imoveis');
      },
      (error) => this.toast.showErroToast('Erro ao cadastrar Im??vel' + error)
    );
  }

  receberProprietarios() {
    // console.log('entrei ');
    this.serviceProprietario.listarProprietario().subscribe(
      (resultado) => {
        // console.log(resultado);
        this.proprietarios = resultado;
      },
      (error) => console.log(error)
    );
  }
}
