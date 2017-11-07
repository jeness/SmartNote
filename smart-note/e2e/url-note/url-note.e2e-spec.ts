import { URLNotes } from './url-note.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(2000); 
}

describe('URL note Page', () => {
  let page: URLNotes;

  beforeEach(() => {
    page = new URLNotes();
  });

  // display app title
  it('should get the title', () => {
    page.navigateTo();
    sleep();
    expect(page.getTitle()).toEqual('SmartNote');
  });

  it('should create a URL note', ()=>{
    
  });


});
