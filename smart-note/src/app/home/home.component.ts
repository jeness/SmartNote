import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../services/note/note.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private noteService: NoteService;
  
  newNote: Note = new Note();

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  ngOnInit() {
  }

  addNote() {
    this.noteService.addNote(this.newNote);
    this.newNote = new Note();
  }

  toggleNoteComplete(note) {
    this.noteService.toggleNoteComplete(note);
  }

  removeNote(note) {
    this.noteService.deleteNoteById(note.id);
  }

  get notes() {
    return this.noteService.getAllNotes();
  }

}




