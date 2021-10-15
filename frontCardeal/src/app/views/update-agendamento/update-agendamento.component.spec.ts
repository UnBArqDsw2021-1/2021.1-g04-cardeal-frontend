import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgendamentoComponent } from './update-agendamento.component';

describe('UpdateAgendamentoComponent', () => {
  let component: UpdateAgendamentoComponent;
  let fixture: ComponentFixture<UpdateAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
