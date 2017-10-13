import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesComponent } from './notes.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiMockService } from '../api-mock.service';
import { NoteDataService } from '../note-data.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesComponent],
      providers: [
        NoteDataService,
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
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
