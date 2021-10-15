import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente, Clientes } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes!: any;
  cliente!: Cliente;
  constructor(private service: ClienteService, private route: Router, private toast: ToastService) {}

  ngOnInit(): void {
    this.lerClientes();
  }

  lerClientes(){
    this.service.listarCliente().subscribe(
      (resultado) => {
        this.clientes = resultado;
      },
      (error) => this.toast.showErroToast("Erro ao carregar a lista de clientes")
    );
  }

  deleteCliente(cliente: any) {
    this.service.deletarCliente(cliente.id).subscribe(
      (resultado) => {
        console.log(cliente);
        this.toast.showSucessToast("Cliente removido com sucesso!")
        this.lerClientes();

        // this.route.navigateByUrl('login-corretor');
      },
      (error) => this.toast.showErroToast("Erro ao remover cliente")
    );
  }

  view(cliente: any) {
    console.log(cliente.id);
    this.service.MostraCliente(cliente.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/cliente/' + cliente.id);
      },
      (error) => this.toast.showErroToast("Erro ao carregar informações do cliente")
    );
  }

  atualizarCliente(cliente: any) {
    console.log(cliente.id);
    this.service.MostraCliente(cliente.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-cliente/' + cliente.id);
      },
      (error) => this.toast.showErroToast("Erro ao carregar informações do cliente")
    );
  }
}
