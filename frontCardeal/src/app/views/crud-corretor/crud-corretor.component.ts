import { ToastService } from 'src/app/services/toast.service';
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

  ngOnInit(): void {}

  constructor(private service: CorretorService, private route: Router, private toast: ToastService){

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
      password:this.password,
      phone: this.telephone
      }
    console.log(realtor)

    this.service.cadastraCorretor(realtor).subscribe(
      resultado =>{
        this.toast.showSucessToast("Corretor cadastrado com sucesso!!!")
        this.route.navigateByUrl('meus-imoveis')
      },
      error => this.toast.showErroToast("Erro ao cadastrar Corretor" + error)
    )
  }
}
