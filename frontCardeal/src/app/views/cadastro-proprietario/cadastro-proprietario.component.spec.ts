import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProprietarioComponent } from './cadastro-proprietario.component';

describe('CadastroProprietarioComponent', () => {
  let component: CadastroProprietarioComponent;
  let fixture: ComponentFixture<CadastroProprietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProprietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProprietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
