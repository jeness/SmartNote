import { TestBed, inject } from '@angular/core/testing';
import { NoteService } from './note.service';
import { ApiService } from './../../api.service';
import { ApiMockService } from './../api-mock/api-mock.service';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteService, 
        {
          provide:ApiService,
          useClass: ApiMockService       
        }
      ]
    });
  });

  it('should be created', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));
});
