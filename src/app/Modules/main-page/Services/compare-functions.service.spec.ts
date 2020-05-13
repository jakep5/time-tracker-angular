import { TestBed } from '@angular/core/testing';

import { CompareFunctionsService } from './compare-functions.service';

describe('CompareFunctionsService', () => {
  let service: CompareFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
