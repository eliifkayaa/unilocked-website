import { TestBed } from '@angular/core/testing';

import { BootstrapDataService } from './bootstrap-data.service';

describe('BootstrapDataService', () => {
  let service: BootstrapDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootstrapDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
