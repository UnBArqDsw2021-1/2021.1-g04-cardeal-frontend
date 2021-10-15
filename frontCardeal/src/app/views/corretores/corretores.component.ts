import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CorretorService } from 'src/app/services/corretor.service';
import { Corretor, Corretores } from 'src/app/models/corretor.model';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-corretores',
  templateUrl: './corretores.component.html',
  styleUrls: ['./corretores.component.css']
})
export class CorretoresComponent implements OnInit {
  corretores!: any;
  corretor!: Corretor;
  constructor(private service: CorretorService, private route: Router) {}

  ngOnInit(): void {
    this.lerCorretores();
  }

  lerCorretores(){
    this.service.listarCorretores().subscribe(
      (resultado) => {
        this.corretores = resultado;
      },
      (error) => console.log(error)
    );
  }

  deleteCorretor(corretor: any) {
    this.service.deleteCorretor(corretor.id).subscribe(
      (resultado) => {
        console.log(corretor);
        alert('Corretor Deletado');
        this.lerCorretores();

        // this.route.navigateByUrl('login-corretor');
      },
      (error) => console.log(error)
    );
  }

  view(corretor: any) {
    console.log(corretor.id);
    this.service.MostraCorretor(corretor.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/corretor/' + corretor.id);
      },
      (error) => console.log(error)
    );
  }

  atualizarCorretor(corretor: any) {
    console.log(corretor.id);
    this.service.MostraCorretor(corretor.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-corretor/' + corretor.id);
      },
      (error) => console.log(error)
    );
  }

  abrirWpp(celular: any){
    window.location.href = "https://api.whatsapp.com/send?phone=55" + celular + "&text=Corretor%20da%20Imobiliária%20Cardeal";
  }
}