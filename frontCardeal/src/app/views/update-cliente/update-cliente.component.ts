import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})

export class UpdateClienteComponent implements OnInit {

  @Input()
  id!: number;
  private routeSub!: Subscription;
  cliente!: Cliente;

    constructor(
      private route: ActivatedRoute,
      private service: ClienteService,
      private router: Router,
      private location: Location
    ) {}

   ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log("Esse é o id", this.id);
      this.receberCliente();
    });
  }

  receberCliente() {
    this.service.MostraCliente(this.id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  atualizar() {
    console.log(this.cliente);
    this.service.atualizarCliente(this.cliente, this.id).subscribe(
      (_resultado) => {
        this.router.navigateByUrl('dashboard');
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

  deleteCliente() {
    if(confirm("Você tem certeza que deseja excluir "+ this.cliente.name )) {
    this.service.deletarCliente(this.id).subscribe(
      (resultado) => {
        console.log(this.cliente);
        alert('Cliente excluído');
        this.router.navigateByUrl('dashboard');
      },
      (error) => console.log(error)
    );
    }
  }
}

