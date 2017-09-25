import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteDataService} from '../note-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private noteDataService: NoteDataService;
  
  newNote: Note = new Note();

  constructor(noteDataService: NoteDataService) {
    this.noteDataService = noteDataService;
  }

  ngOnInit() {
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




