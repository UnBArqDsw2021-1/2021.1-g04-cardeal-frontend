import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css'],
})
export class ImovelComponent implements OnInit {
  @Input()
  id!: number;
  constructor() {}

  ngOnInit(): void {}
}
