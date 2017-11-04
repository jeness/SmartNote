import { TestBed, inject } from '@angular/core/testing';
import { TagService } from './tag.service';
// import { ApiService } from './../../api.service';
// import { ApiMockService } from './../api-mock/api-mock.service';

describe('TagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // TagService,
        // {
        //   provide:ApiService,
        //   useClass: ApiMockService
        // }
      ]
    });
  });

  it('should be created', inject([TagService], (service: TagService) => {
    expect(service).toBeTruthy();
  }));
});
