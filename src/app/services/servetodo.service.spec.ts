import { TestBed } from '@angular/core/testing';

import { ServetodoService } from './servetodo.service';

describe('ServetodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServetodoService = TestBed.get(ServetodoService);
    expect(service).toBeTruthy();
  });
});
