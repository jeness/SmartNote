import { browser, by, element } from 'protractor';

export class Login {
  navigateTo() {
    return browser.get('/index');
  }

  // get the app title
  getTitle() {
    return browser.getTitle();
  }

  // get username
  getUsername() {
    return element(by.id("username"))
  }
  // get password
  getPassword() {
    return element(by.id("password"))
  }

  // submit username and password
  getLoginButton() {
    return element(by.id("login"));
  }

  // get error message
  getError() {
    return element(by.model('loginError'));
  }
}
