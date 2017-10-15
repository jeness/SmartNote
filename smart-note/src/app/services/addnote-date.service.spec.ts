import { TestBed, inject } from '@angular/core/testing';

import { AddnoteDateService } from './addnote-date.service';

describe('AddnoteDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddnoteDateService]
    });
  });

  it('should be created', inject([AddnoteDateService], (service: AddnoteDateService) => {
    expect(service).toBeTruthy();
  }));
});
