import {Component} from '@angular/core';
import {NoteDataService} from './note-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [NoteDataService]
})
export class AppComponent {

  constructor(
    private noteDataService: NoteDataService
  ) {
  }

  onAddNote(note) {
    this.noteDataService.addNote(note);
  }

  onToggleNoteComplete(note) {
    this.noteDataService.toggleNoteComplete(note);
  }

  onRemoveNote(note) {
    this.noteDataService.deleteNoteById(note.id);
  }

  get notes() {
    return this.noteDataService.getAllNotes();
  }

}
