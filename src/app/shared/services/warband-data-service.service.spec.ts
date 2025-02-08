import { TestBed } from '@angular/core/testing';

import { WarbandDataServiceService } from './warband-data-service.service';

describe('WarbandDataServiceService', () => {
  let service: WarbandDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarbandDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
