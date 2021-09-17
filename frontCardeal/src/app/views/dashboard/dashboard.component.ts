import { Component, OnInit } from '@angular/core';
import { CorretorService } from 'src/app/services/corretor.service';
import { Corretor } from 'src/app/models/corretor.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private corretorAtual!: Corretor;

  constructor(private serviceCorretor: CorretorService) { }

  ngOnInit(): void {
    document.querySelector("#link_home")!.classList.remove("ativo");
    document.querySelector("#link_cadastro_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_busca_imoveis")!.classList.add("ativo");
    this.corretorAtual = this.serviceCorretor.enviaCorretor();
    console.log("Esse é o corretor no Momento", this.corretorAtual);
    
  }

}
