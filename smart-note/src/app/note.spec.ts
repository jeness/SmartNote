import {Note} from './note';

describe('Note', () => {
  it('should create an instance', () => {
    expect(new Note()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const note = new Note({
      title: 'hello',
      content: 'Welcome to SmartNote'
    });
    expect(note.title).toEqual('hello');
    expect(note.content).toEqual('Welcome to SmartNote');
  });
});