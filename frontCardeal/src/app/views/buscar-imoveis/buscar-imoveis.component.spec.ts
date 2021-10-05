import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarImoveisComponent } from './buscar-imoveis.component';

describe('BuscarImoveisComponent', () => {
  let component: BuscarImoveisComponent;
  let fixture: ComponentFixture<BuscarImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarImoveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
