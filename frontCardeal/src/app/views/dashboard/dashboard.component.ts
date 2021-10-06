import { Component, OnInit } from '@angular/core';
import { CorretorService } from 'src/app/services/corretor.service';
import { Corretor } from 'src/app/models/corretor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private corretorAtual!: Corretor;

  constructor(private serviceCorretor: CorretorService, private route: Router) { }

  ngOnInit(): void {
    // console.log("Iniciando dashboard")
    /* document.querySelector("#link_home")!.classList.remove("ativo");
    document.querySelector("#link_cadastro_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_busca_imoveis")!.classList.add("ativo"); */   
  }

  editarCorretor(){
    this.route.navigateByUrl(`/update-corretor/${this.corretorAtual.id}`)
  }

  editarProprietario(){
    this.route.navigateByUrl(`/update-proprietario/`)
  }
  cadastrarCliente(){
    this.route.navigateByUrl(`/cadastro-cliente/`)
  }
  // editarCliente(){
  //   this.route.navigateByUrl(`/update-cliente/`)
  // }
}
