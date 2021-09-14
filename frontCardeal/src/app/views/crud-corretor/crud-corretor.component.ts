import { Component, OnInit } from '@angular/core';

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
  handlerSubmit(){

    const realtor = {name:this.name,
      cpf:this.cpf,
      telephone:this.telephone,
      email:this.email,
      password:this.password,
      }
    console.log(realtor)
  }
}
