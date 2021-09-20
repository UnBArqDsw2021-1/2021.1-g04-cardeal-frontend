import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCorretorComponent } from './update-corretor.component';

describe('UpdateCorretorComponent', () => {
  let component: UpdateCorretorComponent;
  let fixture: ComponentFixture<UpdateCorretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCorretorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
