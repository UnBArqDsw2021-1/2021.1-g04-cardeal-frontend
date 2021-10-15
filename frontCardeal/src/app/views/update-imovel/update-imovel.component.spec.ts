import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImovelComponent } from './update-imovel.component';

describe('UpdateImovelComponent', () => {
  let component: UpdateImovelComponent;
  let fixture: ComponentFixture<UpdateImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
