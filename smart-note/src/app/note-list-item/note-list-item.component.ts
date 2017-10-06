import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent {

  @Input() note: Note;

  @Output()
  toggleComplete: EventEmitter<Note> = new EventEmitter();

  @Output()
  remove: EventEmitter<Note> = new EventEmitter();

  constructor() {
  }
  toggleNoteComplete(note: Note) {
    this.toggleComplete.emit(note);
  }
  removeNote(note: Note) {
    this.remove.emit(note);
  }

}
