import { browser, by, element } from 'protractor';

export class Login {
  navigateTo() {
    return browser.get('/index');
  }

  // get the app title
  getTitle() {
    return browser.getTitle();
  }

  getUsername() {
    return element(by.id("username"))
  }
  getPassword() {
    return element(by.id("password"))
  }

  getLoginButton() {
    return element(by.id("login"));
  }

  getError() {
    return element(by.model('loginError'));
  }
}
