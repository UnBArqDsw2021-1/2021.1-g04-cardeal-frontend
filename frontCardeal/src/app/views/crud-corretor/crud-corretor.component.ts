import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorretorService } from 'src/app/services/corretor.service';

@Component({
  selector: 'app-crud-corretor',
  templateUrl: './crud-corretor.component.html',
  styleUrls: ['./crud-corretor.component.css']
})
export class CrudCorretorComponent implements OnInit {


  name!: string;
  cpf!: string;
  telephone!: string;
  email!: string;
  password!: string;
  confirmpassword!: string;

  // constructor() { }

  ngOnInit(): void {
    document.querySelector("#link_home")!.classList.remove("ativo");
    document.querySelector("#link_cadastro_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_busca_imoveis")!.classList.remove("ativo");
  }

  constructor(private service: CorretorService, private route: Router){

  }

  handlerSubmit(){
    if(this.password !== this.confirmpassword){
      alert("digite a mesma senha no campo senha e confirmar senha!");
      return;
    }
    const realtor = {
      name:this.name,
      cpf:this.cpf,
      email:this.email,
      passwordHash:this.password,
      phone: this.telephone
      }
    console.log(realtor)

    this.service.cadastraCorretor(realtor).subscribe(
      resultado =>{
        this.limparCampos();
        this.route.navigateByUrl('login-corretor')
      },
      error => console.log(error)
    )
  }

  limparCampos(){
    this.name = "";
    this.cpf = "";
    this.telephone = "";
    this.email = "";
    this.password = "";
    this.confirmpassword = "";
  }
}
