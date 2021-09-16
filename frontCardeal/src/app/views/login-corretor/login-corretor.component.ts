import { Component, OnInit } from '@angular/core';
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
  }

  constructor(private service: CorretorService){

  }
  handlerSubmit(){

    const realtor = {
      email:this.email,
      password:this.password,
      }
    console.log(realtor)
    this.service.loginCorretor(realtor);
  }

}
