import { Component } from '@angular/core';
import {Note} from './note';
import {NoteDataService} from './note-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [NoteDataService]
})
export class AppComponent {
  title = 'app';

  private noteDataService: NoteDataService;
  
  newNote: Note = new Note();

  constructor(noteDataService: NoteDataService) {
    this.noteDataService = noteDataService;
  }

  addNote() {
    this.noteDataService.addNote(this.newNote);
    this.newNote = new Note();
  }

  toggleNoteComplete(note) {
    this.noteDataService.toggleNoteComplete(note);
  }

  removeNote(note) {
    this.noteDataService.deleteNoteById(note.id);
  }

  get notes() {
    return this.noteDataService.getAllNotes();
  }

}
