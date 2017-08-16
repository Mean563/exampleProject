import { TestBed, inject } from '@angular/core/testing';

import { PollservicesService } from './pollservices.service';

describe('PollservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollservicesService]
    });
  });

  it('should be created', inject([PollservicesService], (service: PollservicesService) => {
    expect(service).toBeTruthy();
  }));
});
