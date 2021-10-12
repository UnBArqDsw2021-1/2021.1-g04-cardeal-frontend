import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorretorService } from 'src/app/services/corretor.service';

@Component({
  selector: 'app-login-corretor',
  templateUrl: './login-corretor.component.html',
  styleUrls: ['./login-corretor.component.css']
})
export class LoginCorretorComponent implements OnInit {

  email!: string;
  password!: string;
  nome!: string;

  ngOnInit(): void {
    document.querySelector("#link_home")!.classList.remove("ativo");
    document.querySelector("#link_cadastro_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_busca_imoveis")!.classList.remove("ativo");
  }

  constructor(private service: CorretorService, private route: Router, private toast: ToastService){

  }
 async handlerSubmit(){

    const realtor = {
      email:this.email,
      password:this.password,
      }
      try{
        const resultado = await this.service.loginCorretor(realtor);
        this.nome = this.service.CorretorAtual().name;
        this.toast.showSucessToast(`Seja Bem Vindo ${this.nome}`)
        this.route.navigateByUrl('meus-imoveis')

      }catch(erro){
        console.log(erro);
        this.toast.showErroToast("Erro ao efetuar o login");
      }
  }

}
