import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TagComponent } from './tag.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiMockService } from '../services/api-mock/api-mock.service';
import { TagService } from '../services/tag/tag.service';
import { MsgService } from '../services/msg/msg.service';

import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagComponent ],
      providers: [
        TagService,
        TagService,
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({
              notes: []
            })
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
