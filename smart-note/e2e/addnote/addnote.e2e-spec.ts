import { Addnote } from './addnote.po';
import { by, browser, protractor } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(2000); 
  }
  
var selectDropdownbyNum = function ( element, optionNum ) {
    if (optionNum){
        var options = element.findElements(by.css('my-dropdown-menu'))   
        .then(function(options){
            options[optionNum].click();
        });
    }
};

describe('Addnote page', () => {
  let page: Addnote;

  beforeEach(() => {
    page = new Addnote();
  });
  // display app title
  it('should get the title', () => {
    page.navigateTo();
    sleep();    
    expect(page.getTitle()).toEqual('SmartNote');
  });

  it('should create a new note', ()=>{
    let noteTitle = page.getNoteTitle();
    //let tag = page.getTag();
    //let tagList = page.getTagList();
    
    noteTitle.sendKeys('note1');
    //tag.click();

    expect(noteTitle.getAttribute('value')).toEqual('note1');     
    noteTitle.sendKeys(protractor.Key.ENTER);    
    sleep();    
  });

});