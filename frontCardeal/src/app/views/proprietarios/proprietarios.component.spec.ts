import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietariosComponent } from './proprietarios.component';

describe('ProprietariosComponent', () => {
  let component: ProprietariosComponent;
  let fixture: ComponentFixture<ProprietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
