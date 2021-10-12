import { Router } from '@angular/router';
import { CorretorService } from './services/corretor.service';
import { Component } from '@angular/core';
import { Corretor } from './models/corretor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontCardeal';
  corretor!: Corretor;
  constructor(private service: CorretorService, private route: Router){}

  usuarioAutenticado(): boolean{
    if(this.service.usuarioLogado()){
      this.corretor = this.service.CorretorAtual();
      return true;
    }
    else return false;
  }

  sair(){
    this.service.logout();
    this.route.navigateByUrl("");
  }
  paginaConfiguracoes(){
    this.route.navigateByUrl(`update-corretor/${this.corretor.id}`);
  }
}
