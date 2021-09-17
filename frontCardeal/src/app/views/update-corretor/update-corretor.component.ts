import { Component, OnInit } from '@angular/core';
import { CorretorService } from 'src/app/services/corretor.service';

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

  constructor(private service: CorretorService) {
    
   }


  ngOnInit(): void {
  }

}
