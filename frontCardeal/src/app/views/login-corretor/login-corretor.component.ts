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

  ngOnInit(): void {
    document.querySelector("#link_home")!.classList.remove("ativo");
    document.querySelector("#link_cadastro_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_busca_imoveis")!.classList.remove("ativo");
  }

  constructor(private service: CorretorService, private route: Router){

  }
  handlerSubmit(){

    const realtor = {
      email:this.email,
      password:this.password,
      }
    this.service.loginCorretor(realtor).subscribe(
      resultado => {
      console.log("Resultado da query", resultado[0])
      this.service.recebeCorretor(resultado[0]);
      this.route.navigateByUrl('/dashboard')
    },
    erro => console.log(erro)
    );
  }

}
