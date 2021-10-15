import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretoresComponent } from './corretores.component';

describe('CorretoresComponent', () => {
  let component: CorretoresComponent;
  let fixture: ComponentFixture<CorretoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorretoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
