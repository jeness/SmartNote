import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { NoteDataService } from './note-data.service';

@Injectable()
export class NotesResolver implements Resolve<Observable<Note[]>> {

  constructor(
    private noteDataService: NoteDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Note[]> {
    return this.noteDataService.getAllNotes();
  }
}
