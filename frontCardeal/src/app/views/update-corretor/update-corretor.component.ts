import { Component, OnInit } from '@angular/core';
import { CorretorService } from 'src/app/services/corretor.service';
import { Corretor } from 'src/app/models/corretor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-corretor',
  templateUrl: './update-corretor.component.html',
  styleUrls: ['./update-corretor.component.css']
})
export class UpdateCorretorComponent implements OnInit {
  
  id!: number;
  name!: string;
  cpf!: string;
  telephone!: string;
  email!: string;
  password!: string;
  confirmpassword!: string;
  corretor!: Corretor;

  constructor(private service: CorretorService, private route: Router) {
    
   }

   ngOnInit(): void {
    this.corretor = this.service.enviaCorretor();
    console.log("Esse é o corretor", this.corretor);
   }

   handleSubmit(){
    const novoCorretor = {
      name: this.corretor.name,
      cpf: this.corretor.cpf,
      telephone: this.corretor.telephone,
      email: this.corretor.email,
      id: this.corretor.id
    }

    this.service.atualizaCorretor(novoCorretor).subscribe(resposta =>{
      console.log(resposta);
      this.route.navigateByUrl("/dashboard");
    })
   }

   excluirConta(){
     this.service.deleteCorretor(this.corretor).subscribe(resposta =>{
       console.log(resposta);
       this.route.navigateByUrl("/login-corretor")
     })
   }
}
