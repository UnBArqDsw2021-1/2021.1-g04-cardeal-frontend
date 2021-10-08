import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector("#link_busca_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_cadastrar_imoveis")!.classList.remove("ativo");
    document.querySelector("#link_faq")!.classList.remove("ativo");
    document.querySelector("#link_pagina_home")!.classList.add("ativo");
    document.querySelector("#link_meus_imoveis")!.classList.remove("ativo");
  }
}
