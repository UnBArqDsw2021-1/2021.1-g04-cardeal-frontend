import { TestBed } from '@angular/core/testing';

import { ProprietarioService } from './proprietario.service';

describe('ProprietarioService', () => {
  let service: ProprietarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProprietarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
