import { AddNote } from './addnote';

describe('Note', () => {
  it('should create an instance', () => {
    expect(new AddNote()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let note = new AddNote({
      title: 'hello',
      complete: true
    });
    expect(note.title).toEqual('hello');
    expect(note.complete).toEqual(true);
  });
  
  
});
