import { browser, by, element } from 'protractor';

export class About {
  navigateTo() {
    return browser.get('/about');
  }
  
  // get the app title
  getTitle() {
    return browser.getTitle();
  }

  // get the app name
  getAppName() {
    //return element(by.css('.header h1')).getText();
    return element(by.id('app-name')).getText();
  }
  
  // get info
  getAppInfo() {
    return element(by.css('.about.profile-card.header > h2')).getText();
  }
 
  getAppDetails() {
    return element(by.css('.profile-card.profile-bio > p')).getText();
  }
  // getAppDetails() {
  //   return element(by.css('.profile-bio p')).getText();
  // }
}
