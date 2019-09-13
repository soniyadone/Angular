import { TestBed } from '@angular/core/testing';

import { CRUDMethodService } from './crudmethod.service';

describe('CRUDMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CRUDMethodService = TestBed.get(CRUDMethodService);
    expect(service).toBeTruthy();
  });
});
