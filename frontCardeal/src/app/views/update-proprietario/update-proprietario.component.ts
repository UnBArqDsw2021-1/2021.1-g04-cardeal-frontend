import { Component, OnInit, Input } from '@angular/core';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { Proprietario } from 'src/app/models/proprietario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-proprietario',
  templateUrl: './update-proprietario.component.html',
  styleUrls: ['./update-proprietario.component.css']
})
export class UpdateProprietarioComponent implements OnInit {

  @Input()
  id!: number;
  private routeSub!: Subscription;
  proprietario!: Proprietario;

    constructor(
      private route: ActivatedRoute,
      private service: ProprietarioService,
      private router: Router,
      private location: Location
    ) {}

   ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.receberProprietario();
    });
  }

  receberProprietario() {
    this.service.MostraProprietario(this.id).subscribe((proprietario) => {
      this.proprietario = proprietario;
      // console.log(this.imovel);
    });
  }

  atualizar() {
    // console.log(imovel);
    console.log(this.proprietario);
    this.service.atualizarProprietario(this.proprietario, this.id).subscribe(
      (resultado) => {
        this.router.navigateByUrl('meus-imoveis');
      },
      (error) => console.log(error)
    );
  }
  voltar() {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  deleteProprietario() {
    this.service.deletarProprietario(this.id).subscribe(
      (resultado) => {
        console.log(this.proprietario);
        alert('Proprietário excluido');
      },
      (error) => console.log(error)
    );
  }

}





  //  handleSubmit(){
  //   const novoProprietario = {
  //     name: this.proprietario.name,
  //     cpf: this.proprietario.cpf,
  //     telephone: this.proprietario.telephone,
  //     email: this.proprietario.email,
  //     id: this.proprietario.id
  //   }

  //   this.service.atualizaProprietario(novoProprietario).subscribe(resposta =>{
  //     console.log(resposta);
  //     this.route.navigateByUrl("/dashboard");
  //   })
  //  }

  // excluirProprietario() {
  // if(confirm("Você tem certeza que deseja excluir ")) {
  //     this.service.deletarProprietario(this.id: number).subscribe(resposta =>{
  //       console.log(resposta);
  //       this.route.navigateByUrl("/dashboard")
  //     })
  //   }
  // }
