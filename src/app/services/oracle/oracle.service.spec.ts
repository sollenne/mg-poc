import { TestBed, inject } from '@angular/core/testing';

import { OracleService } from './oracle.service';

describe('OracleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OracleService]
    });
  });

  it('should be created', inject([OracleService], (service: OracleService) => {
    expect(service).toBeTruthy();
  }));
});
