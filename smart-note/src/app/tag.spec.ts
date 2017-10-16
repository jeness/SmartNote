import { Tag } from './tag';

describe('Tag', () => {
  it('should create an instance', () => {
    expect(new Tag()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let note = new Tag({
      title: 'hello',
      complete: true
    });
    expect(note.title).toEqual('hello');
    expect(note.complete).toEqual(true);
  });
  
  
});
