import { TestBed, inject } from '@angular/core/testing';
import { AddNoteService } from './add-note.service';
import { ApiService } from './../../api.service';
import { ApiMockService } from './../api-mock/api-mock.service';

describe('AddNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddNoteService, 
        {
          provide:ApiService,
          useClass: ApiMockService       
        }
      ]    });
  });

  it('should be created', inject([AddNoteService], (service: AddNoteService) => {
    expect(service).toBeTruthy();
  }));
});