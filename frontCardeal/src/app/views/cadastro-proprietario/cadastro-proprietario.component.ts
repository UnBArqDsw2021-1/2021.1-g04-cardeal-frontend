import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-proprietario',
  templateUrl: './cadastro-proprietario.component.html',
  styleUrls: ['./cadastro-proprietario.component.css']
})
export class CadastroProprietarioComponent implements OnInit {

  name!: string;
  cpf!: string;
  telephone!: string;
  email!: string;

  constructor() { }

  ngOnInit(): void {
    document.querySelector("#link_home")!.classList.remove("ativo");
    document.querySelector("#link_cadastro_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_busca_imoveis")!.classList.remove("ativo");
  }

  // constructor(private service: ProprietarioService, private route: Router){

  // }

  handlerSubmit(){
    const realtor = {name:this.name,
      cpf:this.cpf,
      telephone:this.telephone,
      email:this.email,
      }
    console.log(realtor)

    // this.service.cadastraCorretor(realtor).subscribe(
    //   resultado =>{
    //     this.limparCampos();
    //     this.route.navigateByUrl('login-corretor')
    //   },
    //   error => console.log(error)
    // )
  }

  limparCampos(){
    this.name = "";
    this.cpf = "";
    this.telephone = "";
    this.email = "";
  }

}
