import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-corretor',
  templateUrl: './login-corretor.component.html',
  styleUrls: ['./login-corretor.component.css']
})
export class LoginCorretorComponent implements OnInit {

  constructor() { }

  email!: string;
  password!: string;

  ngOnInit(): void {
  }

  handlerSubmit(){

    const realtor = {
      email:this.email,
      password:this.password,
      }
    console.log(realtor)
  }

}
