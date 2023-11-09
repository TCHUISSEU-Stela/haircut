import { TestBed } from '@angular/core/testing';

import { HaircutSalonService } from './haircut-salon.service';

describe('HaircutSalonService', () => {
  let service: HaircutSalonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaircutSalonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
