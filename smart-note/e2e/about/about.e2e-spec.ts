import { About } from './about.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(2000); 
}
  
describe('About page', () => {
  let page: About;

  beforeEach(() => {
    page = new About();
  });

  // display app title
  it('should get the title', () => {
    page.navigateTo();
    sleep();    
    expect(page.getTitle()).toEqual('SmartNote');
  });

//   // display app details
//   it('should display a list of tags', () => {
//     page.navigateTo();
//     expect(page.getAppDetails()).toEqual('Organize your life with SmartNote application for keeping track of notes, tasks, and to-do lists.');
//   });

});
