import { Injectable } from '@angular/core';
import { Note } from './../../note';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllNotes(): Observable<Note[]> {
    return Observable.of([
      new Note({id: 1, title: 'SmartNote is cool', complete: false, content: 'Welcome to SmartNote!'})
    ]);
  }

  public createNote(note: Note): Observable<Note> {
    return Observable.of(
      new Note({id: 1, title: 'SmartNote is cool', complete: false, content: 'Welcome to SmartNote!'})
    );
  }

  public getNoteById(noteId: number): Observable<Note> {
    return Observable.of(
      new Note({id: 1, title: 'SmartNote is cool', complete: false, content: 'Welcome to SmartNote!'})
    );
  }

  public updateNote(note: Note): Observable<Note> {
    return Observable.of(
      new Note({id: 1, title: 'SmartNote is cool', content: 'Welcome to SmartNote!'})
    );
  }

  public deleteNoteById(noteId: number): Observable<null> {
    return null;
  }
}
