import { Notes } from './notes.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(1500); 
  }

describe('SmartNote App', () => {
  let page: Notes;

  beforeEach(() => {
    page = new Notes();
  });

//   // to do some clean up
//   // use afterEach(()=> {});

});
