import {TestBed, async, inject} from '@angular/core/testing';
import {Note} from './note';
import {NoteDataService} from './note-data.service';

describe('NoteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteDataService]
    });
  });

  it('should ...', inject([NoteDataService], (service: NoteDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllNotes()', () => {

    it('should return an empty array by default', inject([NoteDataService], (service: NoteDataService) => {
      expect(service.getAllNotes()).toEqual([]);
    }));

    it('should return all notes', inject([NoteDataService], (service: NoteDataService) => {
      let note1 = new Note({title: 'Hello 1', complete: false});
      let note2 = new Note({title: 'Hello 2', complete: true});
      service.addNote(note1);
      service.addNote(note2);
      expect(service.getAllNotes()).toEqual([note1, note2]);
    }));

  });

  describe('#save(note)', () => {

    it('should automatically assign an incrementing id', inject([NoteDataService], (service: NoteDataService) => {
      let note1 = new Note({title: 'Hello 1', complete: false});
      let note2 = new Note({title: 'Hello 2', complete: true});
      service.addNote(note1);
      service.addNote(note2);
      expect(service.getNoteById(1)).toEqual(note1);
      expect(service.getNoteById(2)).toEqual(note2);
    }));

  });

  describe('#deleteNoteById(id)', () => {

    it('should remove note with the corresponding id', inject([NoteDataService], (service: NoteDataService) => {
      let note1 = new Note({title: 'Hello 1', complete: false});
      let note2 = new Note({title: 'Hello 2', complete: true});
      service.addNote(note1);
      service.addNote(note2);
      expect(service.getAllNotes()).toEqual([note1, note2]);
      service.deleteNoteById(1);
      expect(service.getAllNotes()).toEqual([note2]);
      service.deleteNoteById(2);
      expect(service.getAllNotes()).toEqual([]);
    }));

    it('should not removing anything if note with corresponding id is not found', inject([NoteDataService], (service: NoteDataService) => {
      let note1 = new Note({title: 'Hello 1', complete: false});
      let note2 = new Note({title: 'Hello 2', complete: true});
      service.addNote(note1);
      service.addNote(note2);
      expect(service.getAllNotes()).toEqual([note1, note2]);
      service.deleteNoteById(3);
      expect(service.getAllNotes()).toEqual([note1, note2]);
    }));

  });

  describe('#updateNoteById(id, values)', () => {

    it('should return note with the corresponding id and updated data', inject([NoteDataService], (service: NoteDataService) => {
      let note = new Note({title: 'Hello 1', complete: false});
      service.addNote(note);
      let updatedNote = service.updateNoteById(1, {
        title: 'new title'
      });
      expect(updatedNote.title).toEqual('new title');
    }));

    it('should return null if note is not found', inject([NoteDataService], (service: NoteDataService) => {
      let note = new Note({title: 'Hello 1', complete: false});
      service.addNote(note);
      let updatedNote = service.updateNoteById(2, {
        title: 'new title'
      });
      expect(updatedNote).toEqual(null);
    }));

  });

  describe('#toggleNoteComplete(note)', () => {

    it('should return the updated note with inverse complete status', inject([NoteDataService], (service: NoteDataService) => {
      let note = new Note({title: 'Hello 1', complete: false});
      service.addNote(note);
      let updatedNote = service.toggleNoteComplete(note);
      expect(updatedNote.complete).toEqual(true);
      service.toggleNoteComplete(note);
      expect(updatedNote.complete).toEqual(false);
    }));

  });

});
