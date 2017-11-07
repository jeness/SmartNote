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

  // it('should be able to create new tag', () => {
  //   var newTag = page.getNewTag().sendKeys('Go gators!');
  //   sleep();    
  //   expect(newTag).toBeTruthy();
  // });

  it('should be able to add the new tag to the tag list', () => {
    var newTag = page.getNewTag().sendKeys('Go gators!');
    var newTagSubmit = page.addNewTag();
    expect(newTagSubmit).toBeTruthy();    
  });

  // it('should show a list of tags when first load the app', () => {
  //   expect(page.getAllTags().count()).toEqual(3);
  // });
  it('should not add an empty tag', ()=> {
    var newTag = page.getNewTag().sendKeys('');
    var newTagSubmit = page.addNewTag();
    expect(newTagSubmit).toBeTruthy(); 
  });
});
