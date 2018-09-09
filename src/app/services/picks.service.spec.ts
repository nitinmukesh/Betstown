import { TestBed, inject } from '@angular/core/testing';

import { PicksService } from './picks.service';

describe('PicksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicksService]
    });
  });

  it('should be created', inject([PicksService], (service: PicksService) => {
    expect(service).toBeTruthy();
  }));
});
