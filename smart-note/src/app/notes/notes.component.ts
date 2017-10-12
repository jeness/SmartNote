import { Component, OnInit } from '@angular/core';
import { NoteDataService } from '../note-data.service';
import { Note } from '../note';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NoteDataService]  
})

export class NotesComponent implements OnInit {

  notes: Note[] = [];
  constructor(
    private noteDataService: NoteDataService,
    private route: ActivatedRoute    
  ) {
  }

  public ngOnInit() {
    this.route.data
      .map((data) => data['notes'])
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
