import { Component, OnInit } from '@angular/core';
import { NoteDataService } from './note-data.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NoteDataService]  
})

export class AppComponent implements OnInit {

  notes: Note[] = [];

  constructor(
    private noteDataService: NoteDataService
  ) {
  }

  public ngOnInit() {
    this.noteDataService
      .getAllNotes()
      .subscribe(
        (notes) => {
          this.notes = notes;
        }
      );
  }

  onAddNote(note) {
    this.noteDataService
      .addNote(note)
      .subscribe(
        (newNote) => {
          this.notes = this.notes.concat(newNote);
        }
      );
  }

  onToggleNoteComplete(note) {
    this.noteDataService
      .toggleNoteComplete(note)
      .subscribe(
        (updatedNote) => {
          note = updatedNote;
        }
      );
  }
  onRemoveNote(note) {
    this.noteDataService
      .deleteNoteById(note.id)
      .subscribe(
        (_) => {
          this.notes = this.notes.filter((n) => n.id !== note.id);
        }
      );
  }
}
