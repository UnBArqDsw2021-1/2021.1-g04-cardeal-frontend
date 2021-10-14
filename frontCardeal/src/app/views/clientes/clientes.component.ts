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
  constructor(private service: ClienteService, private route: Router) {}

  ngOnInit(): void {
    this.lerClientes();
  }

  lerClientes(){
    this.service.listarCliente().subscribe(
      (resultado) => {
        this.clientes = resultado;
      },
      (error) => console.log(error)
    );
  }

  deleteCliente(cliente: any) {
    this.service.deletarCliente(cliente.id).subscribe(
      (resultado) => {
        console.log(cliente);
        alert('Cliente Deletado');
        this.lerClientes();

        // this.route.navigateByUrl('login-corretor');
      },
      (error) => console.log(error)
    );
  }

  view(cliente: any) {
    console.log(cliente.id);
    this.service.MostraCliente(cliente.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/cliente/' + cliente.id);
      },
      (error) => console.log(error)
    );
  }

  atualizarCliente(cliente: any) {
    console.log(cliente.id);
    this.service.MostraCliente(cliente.id).subscribe(
      (resultado) => {
        this.route.navigateByUrl('/update-cliente/' + cliente.id);
      },
      (error) => console.log(error)
    );
  }
}
