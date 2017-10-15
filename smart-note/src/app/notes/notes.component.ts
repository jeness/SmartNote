import { Component, OnInit } from '@angular/core';
//import { NoteDataService } from '../note-data.service';
import { NoteService } from '../services/note/note.service';
import { Note } from '../note';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  //providers: [NoteDataService] 
  providers: [NoteService]    
})

export class NotesComponent implements OnInit {

  notes: Note[] = [];
  constructor(
    //private noteDataService: NoteDataService,
    private noteService: NoteService,    
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
    this.noteService
      .addNote(note)
      .subscribe(
        (newNote) => {
          this.notes = this.notes.concat(newNote);
        }
      );
  }

  onToggleNoteComplete(note) {
    this.noteService
      .toggleNoteComplete(note)
      .subscribe(
        (updatedNote) => {
          note = updatedNote;
        }
      );
  }
  onRemoveNote(note) {
    this.noteService
      .deleteNoteById(note.id)
      .subscribe(
        (_) => {
          this.notes = this.notes.filter((n) => n.id !== note.id);
        }
      );
  }
}
