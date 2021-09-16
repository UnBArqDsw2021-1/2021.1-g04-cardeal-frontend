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
  }

  constructor(private service: CorretorService, private route: Router){

  }

  handlerSubmit(){
    const realtor = {name:this.name,
      cpf:this.cpf,
      telephone:this.telephone,
      email:this.email,
      password:this.password,
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
