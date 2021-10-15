import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCorretorComponent } from './crud-corretor.component';

describe('CrudCorretorComponent', () => {
  let component: CrudCorretorComponent;
  let fixture: ComponentFixture<CrudCorretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCorretorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
