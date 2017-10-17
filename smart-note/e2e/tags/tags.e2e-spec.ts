import { Tags } from './tags.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(1500); 
  }

describe('SmartNote App', () => {
  let page: Tags;

  beforeEach(() => {
    page = new Tags();
  });

//   // to do some clean up
//   // use afterEach(()=> {});

  // display taginfo
  it('should display tag info', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Your tags are here:');
  });

//   // display a list of tags
//   it('should display a list of tags', () => {
//     page.navigateTo();
//     expect(page.getTags().count()).toBe(8);
//   });

//   // initially there are 8 tags there
//   it('should show 8 tags when we first load the app', () => {
//     page.navigateTo();
//     expect(page.getAllTags.count()).toEqual(8);    
//   });

//   // add a tag and check it is added
//   it('should add a new tag', () => {
//     page.navigateTo();
//     page.addTag.sendKeys("demo");    
//   });

//   // delete the first tag
//   it("should be able to delete a tag", () => {  
//     page.navigateTo();
//     let firstTodo = element.all(by.css(".todos .todo")).first();
//     firstTodo.click();

//     let todosList = element.all(by.css(".todos .todo"));
//     expect(page.count()).toEqual(8);    
// })

// // delete the last tag

});
