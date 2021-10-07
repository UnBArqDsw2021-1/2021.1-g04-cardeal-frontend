import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meus-imoveis',
  templateUrl: './meus-imoveis.component.html',
  styleUrls: ['./meus-imoveis.component.css'],
})
export class MeusImoveisComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.querySelector("#link_busca_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_cadastrar_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_pagina_home")!.classList.remove("ativo");
    document.querySelector("#link_meus_imoveis")!.classList.add("ativo");
  }
}
