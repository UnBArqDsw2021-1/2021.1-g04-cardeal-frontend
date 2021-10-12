import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-proprietario',
  templateUrl: './cadastro-proprietario.component.html',
  styleUrls: ['./cadastro-proprietario.component.css']
})
export class CadastroProprietarioComponent implements OnInit {

  name!: string;
  cpf!: string;
  phone!: string;
  email!: string;

  ngOnInit(): void {
    document.querySelector("#link_home")!.classList.remove("ativo");
    document.querySelector("#link_cadastro_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_busca_imoveis")!.classList.remove("ativo");
  }

  constructor(private service: ProprietarioService, private route: Router, private toast: ToastService){

  }

  handlerSubmit(){
    const owner = {
      name:this.name,
      cpf:this.cpf,
      phone:this.phone,
      email:this.email,
      }
    console.log(owner)

    this.service.cadastraProprietario(owner).subscribe(
      resultado =>{
        this.toast.showSucessToast("Proprietario Cadastrado com sucesso !!!")
        this.route.navigateByUrl('meus-imoveis')
      },
      error => this.toast.showErroToast("Erro ao cadastrar Proprietario: "+ error)
    )
  }
}
