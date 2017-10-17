import { browser, by, element } from 'protractor';

export class About {
  navigateTo() {
    return browser.get('/about');
  }
  // get the app name
  getWelcome() {
    return element(by.css('h1')).getText();
  }

  // get the app name
  getAppName() {
    return element(by.css('.header h1')).getText();
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
