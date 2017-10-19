import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http, Response } from '@angular/http';
import { Note } from './note';
import { Tag } from './tag';
import { AddNote } from './addnote';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  // api: GET/notes
  public getAllNotes(): Observable<Note[]> {
    return this.http
      .get(API_URL + '/notes')
      .map(response => {
        const notes = response.json();
        return notes.map((note) => new Note(note));
      })
      .catch(this.handleError);
  }

    // api: GET/tags
    public getAllTags(): Observable<Tag[]> {
      return this.http
        .get(API_URL + '/tags')
        .map(response => {
          const tags = response.json();
          return tags.map((tag) => new Tag(tag));
        })
        .catch(this.handleError);
    }

  // api: POST/NOTES
  public createNote(note: Note): Observable<Note> {
    return this.http
      .post(API_URL + '/notes', note)
      .map(response => {
        return new Note(response.json());
      })
      .catch(this.handleError);
  }

    // api: POST/tags
    public createTag(tag: Tag): Observable<Tag> {
      return this.http
        .post(API_URL + '/tags', tag)
        .map(response => {
          return new Tag(response.json());
        })
        .catch(this.handleError);
    }

    // api: POST/ADDNOTES
    public createAddNote(addnote: AddNote): Observable<AddNote> {
      return this.http
       .post(API_URL + '/addnote', addnote)
       .map(response => {
         return new AddNote(response.json());
       })
      .catch(this.handleError);
    }

  // api: GET/notes/:id
  public getNoteById(noteId: number): Observable<Note> {
    return this.http
      .get(API_URL + '/notes/' + noteId)
      .map(response => {
        return new Note(response.json());
      })
      .catch(this.handleError);
  }

  // api: GET/notes/:id
  public getAddNoteById(addnoteId: number): Observable<AddNote> {
    return this.http
      .get(API_URL + '/addnote/' + addnoteId)
      .map(response => {
        return new AddNote(response.json());
      })
      .catch(this.handleError);
  }

  public updateNote(note: Note): Observable<Note> {
    return this.http
      .put(API_URL + '/notes/' + note.id, note)
      .map(response => {
        return new Note(response.json());
      })
      .catch(this.handleError);
  }

  public modifyAddNote(addnote: AddNote): Observable<AddNote> {
    return this.http
      .put(API_URL + '/addnote/' + addnote.id, addnote)
      .map(response => {
        return new AddNote(response.json());
      })
      .catch(this.handleError);
  }

  // api: DELETE/notes/:id
  public deleteNoteById(noteId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/notes/' + noteId)
      .map(response => null)
      .catch(this.handleError);
  }

    // api: DELETE/tags/:id
    public deleteTagById(tagId: number): Observable<null> {
      return this.http
        .delete(API_URL + '/tags/' + tagId)
        .map(response => null)
        .catch(this.handleError);
    }

    // api: DELETE/addnote/:id
    public deleteAddNoteById(addnoteId: number): Observable<null> {
      return this.http
        .delete(API_URL + '/addnote/' + addnoteId)
        .map(response => null)
        .catch(this.handleError);
    }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}

