import { CorretorService } from './services/corretor.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontCardeal';

  constructor(private service: CorretorService){}

  usuarioAutenticado(): boolean{
    return this.service.usuarioLogado();
  }
}
