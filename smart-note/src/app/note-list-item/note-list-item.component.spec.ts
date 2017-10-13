/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { NoteListItemComponent } from './note-list-item.component';
import { Note } from '../note';

describe('NoteListItemComponent', () => {
  let component: NoteListItemComponent;
  let fixture: ComponentFixture<NoteListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteListItemComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListItemComponent);
    component = fixture.componentInstance;
    component.note = new Note({ id: 1, title: 'Test', complete: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
