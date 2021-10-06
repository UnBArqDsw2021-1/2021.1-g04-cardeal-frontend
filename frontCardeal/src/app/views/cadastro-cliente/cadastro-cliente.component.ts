import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import ClienteService from 'src/app/services/cliente.service';

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
  telephone!: string;
  email!: string;

  constructor(private service: ClienteService, private route: Router) {}

  ngOnInit(): void {
    document.querySelector('#link_home')!.classList.remove('ativo');
    document.querySelector('#link_cadastrar_imoveis')!.classList.add('ativo');
    document.querySelector('#link_faq')!.classList.remove('ativo');
    document.querySelector('#link_busca_imoveis')!.classList.remove('ativo');
    document.querySelector('#link_meus_imoveis')!.classList.remove('ativo');
  }

  handlerSubmit() {
    console.log('Entrou no cadastro cliente');
    const cliente = {
      name: this.name,
      cpf: this.cpf,
      telephone: this.telephone,
      email: this.email,
    };
    console.log(cliente);
    console.log('objeto cliente');
    console.log(this.clienteObj);

    this.service.cadastraCliente(this.clienteObj).subscribe(
      (resultado) => {
        this.route.navigateByUrl('dashboard');
      },
      (error) => console.log(error)
    );
  }
}
