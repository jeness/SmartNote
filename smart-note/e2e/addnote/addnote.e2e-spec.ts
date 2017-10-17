import { Addnote } from './addnote.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(1500); 
  }

describe('SmartNote App', () => {
  let page: Addnote;

  beforeEach(() => {
    page = new Addnote();
  });

//   // to do some clean up
//   // use afterEach(()=> {});

});