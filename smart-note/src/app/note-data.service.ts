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

  // Simulate GET /notes
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


// @Injectable()
// export class NoteDataService {

//   // Placeholder for last id so we can simulate
//   // automatic incrementing of id's
//   lastId: number = 0;
  
  
//   notes: Note[] = [];

//   constructor() { }

//   addNote(note: Note): NoteDataService {
//     if(!note.id) {
//       note.id = ++this.lastId;
//     }
//     this.notes.push(note);
//     return this;
//   }

//   // Simulate DELETE /notes/:id
//   deleteNoteById(id: number): NoteDataService {
//     this.notes = this.notes
//       .filter(note => note.id !== id);
//     return this;
//   }

//   // Simulate PUT /notes/:id
//   updateNoteById(id: number, values: Object = {}): Note {
//     let note = this.getNoteById(id);
//     if (!note) {
//       return null;
//     }
//     Object.assign(note, values);
//     return note;
//   }

//   // Simulate GET /notes
//   getAllNotes(): Note[] {
//     return this.notes;
//   }

//   // Simulate GET /notes/:id
//   getNoteById(id: number): Note {
//     return this.notes
//       .filter(note => note.id === id)
//       .pop();
//   }

//   // Toggle note complete
//   toggleNoteComplete(note: Note){
//     let updatedNote = this.updateNoteById(note.id, {
//       complete: !note.complete
//     });
//     return updatedNote;
//   }
  

// }

