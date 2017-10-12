import {TestBed, inject} from '@angular/core/testing';
import {NoteDataService} from './note-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('NoteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([NoteDataService], (service: NoteDataService) => {
    expect(service).toBeTruthy();
  }));

});