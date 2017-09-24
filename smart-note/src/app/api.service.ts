import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Note } from './note';
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

  public getAllNotes(): Observable<Note[]> {
    return this.http
      .get(API_URL + '/notes')
      .map(response => {
        const notes = response.json();
        return notes.map((note) => new Note(note));
      })
      .catch(this.handleError);
  }

  public createNote(note: Note): Observable<Note> {
    return this.http
      .post(API_URL + '/notes', note)
      .map(response => {
        return new Note(response.json());
      })
      .catch(this.handleError);
  }

  public getNoteById(noteId: number): Observable<Note> {
    return this.http
      .get(API_URL + '/notes/' + noteId)
      .map(response => {
        return new Note(response.json());
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

  public deleteNoteById(noteId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/notes/' + noteId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}

