import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Imoveis, Imovel } from 'src/app/models/imovel.model';
import ImovelService from 'src/app/services/imovel.service';

@Component({
  selector: 'app-meus-imoveis',
  templateUrl: './meus-imoveis.component.html',
  styleUrls: ['./meus-imoveis.component.css'],
})
export class MeusImoveisComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
