import { Tags } from './tags.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(2000); 
}

describe('Tag Page', () => {
  let page: Tags;

  beforeEach(() => {
    page = new Tags();
  });

  // display app title
  it('should get the title', () => {
    page.navigateTo();
    sleep();
    expect(page.getTitle()).toEqual('SmartNote');
  });
//   // to do some clean up
//   // use afterEach(()=> {});

  // get the first tag from the tag list
  it('should get the first tag from the tag list', () => {
    page.navigateTo();
    expect(page.getAllTags().get(0).getText()).toEqual('Hi');
  });

  // delete the first tag
  it('should delete the first tag from the tag list', () => {
    page.navigateTo();
    // delete
  });

  // display the newly entered tag
  it('should get the newly inserted tag', () => {
    page.navigateTo();
    page.getNewTag().sendKeys('Go gators!');
    sleep();    
    expect(page.getAllTags().get(0).getText()).toEqual('Go gators!');
  });

  // display a list of tags
  it('should display a list of tags', () => {
    page.navigateTo();
    expect(page.getAllTags().count()).toBe(4);
  });

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

});
