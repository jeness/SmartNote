import { TestBed, inject } from '@angular/core/testing';

import { AddNoteService } from './add-note.service';

describe('AddNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNoteService]
    });
  });

  it('should be created', inject([AddNoteService], (service: AddNoteService) => {
    expect(service).toBeTruthy();
  }));
});
