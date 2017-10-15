import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
//import { NoteDataService } from './note-data.service';
import { NoteService } from './services/note/note.service';

@Injectable()
export class NotesResolver implements Resolve<Observable<Note[]>> {

  constructor(
    private noteService: NoteService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Note[]> {
    return this.noteService.getAllNotes();
  }
}
