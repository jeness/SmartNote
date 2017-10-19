import { About } from './about.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(1500); 
  }
  
describe('About page', () => {
  let page: About;

  beforeEach(() => {
    page = new About();
  });


  // display welcome msg
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getWelcome()).toEqual('Welcome to SmartNote');
  });

  // display app name
  it('should display App name', () => {
    page.navigateTo();
    expect(page.getAppName()).toEqual('SmartNote app');
  });

  // display app info msg
  it('should display a list of tags', () => {
    page.navigateTo();
    expect(page.getAppInfo()).toEqual('SmartNote is a notes app based on Angualr 4 and Node.js. developed by Group Augo');
  });

  // display app details
  it('should display a list of tags', () => {
    page.navigateTo();
    expect(page.getAppDetails()).toEqual('Organize your life with SmartNote application for keeping track of notes, tasks, and to-do lists.');
  });

});
