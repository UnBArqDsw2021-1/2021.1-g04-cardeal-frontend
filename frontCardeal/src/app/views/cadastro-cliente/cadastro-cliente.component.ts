import { ToastService } from 'src/app/services/toast.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import {ClienteService} from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css'],
})
export class CadastroClienteComponent implements OnInit {
  @Input()
  clienteObj = {} as Cliente;
  name!: string;
  cpf!: number;
  email!: string;
  phone!: string;

  constructor(private service: ClienteService, private route: Router, private toast: ToastService) {}

  ngOnInit(): void {

  }

  handlerSubmit() {
    console.log('Entrou no cadastro cliente');
    const cliente = {
      name: this.name,
      cpf: this.cpf,
      telephone: this.phone,
      email: this.email,
    };
    console.log(cliente);
    console.log('objeto cliente');
    console.log(this.clienteObj);

    this.service.cadastraCliente(this.clienteObj).subscribe(
      (resultado) => {
        this.toast.showSucessToast("Cliente cadastrado com sucesso !!!")
        this.route.navigateByUrl('meus-imoveis');
      },
      (error) => this.toast.showErroToast("Erro ao cadastrar cliente: " + error)
    );
  }
}
