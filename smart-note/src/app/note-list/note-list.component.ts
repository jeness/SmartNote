import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent {

  @Input()
  notes: Note[];

  @Output()
  toggleComplete: EventEmitter<Note> = new EventEmitter();

  @Output()
  remove: EventEmitter<Note> = new EventEmitter();

  constructor() {
  }
  
  onToggleNoteComplete(note: Note) {
    this.toggleComplete.emit(note);
  }

  onRemoveNote(note: Note) {
    this.remove.emit(note);
  }

}
