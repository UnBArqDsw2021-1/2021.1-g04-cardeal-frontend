import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { Proprietario, Proprietarios } from 'src/app/models/proprietario.model';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent implements OnInit {
  proprietarios!: any;
  proprietario!: Proprietario;
  constructor(private service: ProprietarioService, private route: Router) {}

  ngOnInit(): void {
    this.lerProprietarios();
  }

  lerProprietarios(){
    this.service.listarProprietario().subscribe(
      (resultado) => {
        this.proprietarios = resultado;
      },
      (error) => console.log(error)
    );
  }

  deleteProprietario(proprietario: any) {
    this.service.deletarProprietario(proprietario.id).subscribe(
      (resultado) => {
        console.log(proprietario);
        alert('Proprietario Deletado');
        this.lerProprietarios();

        // this.route.navigateByUrl('login-corretor');
      },
      (error) => console.log(error)
    );
  }

  view(proprietario: any) {
    console.log(proprietario.id);
    this.service.MostraProprietario(proprietario.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/proprietario/' + proprietario.id);
      },
      (error) => console.log(error)
    );
  }

  atualizarProprietario(proprietario: any) {
    console.log(proprietario.id);
    this.service.MostraProprietario(proprietario.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-proprietario/' + proprietario.id);
      },
      (error) => console.log(error)
    );
  }
}
