import { TestBed } from '@angular/core/testing';

import { MonteCarloService } from './monte-carlo.service';

describe('MonteCarloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonteCarloService = TestBed.get(MonteCarloService);
    expect(service).toBeTruthy();
  });
});
