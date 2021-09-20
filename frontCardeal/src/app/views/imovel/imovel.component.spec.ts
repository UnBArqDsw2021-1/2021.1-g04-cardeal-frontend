import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelComponent } from './imovel.component';

describe('ImovelComponent', () => {
  let component: ImovelComponent;
  let fixture: ComponentFixture<ImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
