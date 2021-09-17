import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProprietarioComponent } from './update-proprietario.component';

describe('UpdateProprietarioComponent', () => {
  let component: UpdateProprietarioComponent;
  let fixture: ComponentFixture<UpdateProprietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProprietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProprietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
