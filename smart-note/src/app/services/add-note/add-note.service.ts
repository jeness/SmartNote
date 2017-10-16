import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { AddNote } from './../../addnote';
import { ApiService } from './../../api.service';
import { Observable } from 'rxjs/Observable';

//const api = environment.apiUrl;

@Injectable()
export class AddNoteService {
  // allNote = [];
  // allNote$ = new BehaviorSubject<Array<object>>(this.allNote);

  // constructor(
  //   private http: HttpClient
  // ) {
  //   this._updateAllNote();
  // }

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /notes
  _addNote(addnote: AddNote): Observable<AddNote> {
    return this.api.createAddNote(addnote);
  }

  _getAddNoteById(addnoteId: number): Observable<AddNote> {
    return this.api.getAddNoteById(addnoteId);
  }

  // modify
  _modifyAddNote(addnote: AddNote): Observable<AddNote> {
    return this.api.modifyAddNote(addnote);
  }

  // Simulate DELETE /notes/:id
  _deleteAddNoteById(addnoteId: number): Observable<AddNote> {
      return this.api.deleteAddNoteById(addnoteId);
    }



  // _updateAllNote() {
  //   this.http.get(api + '/allNote')
  //     .subscribe((data) => {
  //       this.allNote$.next(data['data']);
  //     });
  // }
}




// @Injectable()
// export class NoteService {

//   constructor(
//     private api: ApiService
//   ) {
//   }

//   // Simulate POST /notes
//   addNote(note: Note): Observable<Note> {
//     return this.api.createNote(note);
//   }

//   // Simulate DELETE /notes/:id
//   deleteNoteById(noteId: number): Observable<Note> {
//     return this.api.deleteNoteById(noteId);
//   }

//   // Simulate PUT /notes/:id
//   updatNote(note: Note): Observable<Note> {
//     return this.api.updateNote(note);
//   }

//   // Simulate GET /notes
//   getAllNotes(): Observable<Note[]> {
//     return this.api.getAllNotes();
//   }

//   // Simulate GET /Notes/:id
//   getNoteById(noteId: number): Observable<Note> {
//     return this.api.getNoteById(noteId);
//   }

//   // Toggle complete
//   toggleNoteComplete(note: Note) {
//     note.complete = !note.complete;
//     return this.api.updateNote(note);
//   }

// }