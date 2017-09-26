import { Injectable } from '@angular/core';
import { Note } from './note';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoteDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /notes
  addNote(note: Note): Observable<Note> {
    return this.api.createNote(note);
  }

  // Simulate DELETE /notes/:id
  deleteNoteById(noteId: number): Observable<Note> {
    return this.api.deleteNoteById(noteId);
  }

  // Simulate PUT /notes/:id
  updatNote(note: Note): Observable<Note> {
    return this.api.updateNote(note);
  }

  // Simulate GET /Notes
  getAllNotes(): Observable<Note[]> {
    return this.api.getAllNotes();
  }

  // Simulate GET /Notes/:id
  getNoteById(noteId: number): Observable<Note> {
    return this.api.getNoteById(noteId);
  }

  // Toggle complete
  toggleNoteComplete(note: Note) {
    note.complete = !note.complete;
    return this.api.updateNote(note);
  }
}
