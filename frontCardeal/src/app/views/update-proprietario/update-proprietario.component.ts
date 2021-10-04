import { Component, OnInit } from '@angular/core';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { Router } from '@angular/router';
import { Proprietario } from 'src/app/models/proprietario.model';

@Component({
  selector: 'app-update-proprietario',
  templateUrl: './update-proprietario.component.html',
  styleUrls: ['./update-proprietario.component.css']
})
export class UpdateProprietarioComponent implements OnInit {

  id!: number;
  name!: string;
  cpf!: string;
  telephone!: string;
  email!: string;
  proprietario!: Proprietario;

  constructor(private service: ProprietarioService, private route: Router) {
  }

   ngOnInit(): void {
    
   }

   handleSubmit(){
    const novoProprietario = {
      name: this.proprietario.name,
      cpf: this.proprietario.cpf,
      telephone: this.proprietario.telephone,
      email: this.proprietario.email,
      id: this.proprietario.id
    }

    this.service.atualizaProprietario(novoProprietario).subscribe(resposta =>{
      console.log(resposta);
      this.route.navigateByUrl("/dashboard");
    })
   }

  //  excluirProprietario(){
  //    this.service.deleteProprietario(this.proprietario).subscribe(resposta =>{
  //      console.log(resposta);
  //      this.route.navigateByUrl("/dashboard")
  //    })
  //  }

  excluirProprietario() {
  if(confirm("Você tem certeza que deseja excluir ")) {
      this.service.deleteProprietario(this.proprietario).subscribe(resposta =>{
        console.log(resposta);
        this.route.navigateByUrl("/dashboard")
      })
    }
  }
}
