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

  // get the first tag from the tag list
  it('should get the first tag from the tag list', () => {
    //page.navigateTo();
    expect(page.getAllTags().get(0).getText()).toEqual('Hi');
  });

  // // delete the first tag
  // it('should delete the first tag from the tag list', () => {
  //   page.navigateTo();
  //   // delete
  // });

  // display the newly entered tag
  it('should be able to create new tag', () => {
    //page.navigateTo();
    var newTag = page.getNewTag().sendKeys('Go gators!');
    sleep();    
    expect(newTag).toBeTruthy();
  });

  // display a list of tags
  it('should display a list of tags', () => {
    //page.navigateTo();
    expect(page.getAllTags().count()).toBe(4);
  });
});
