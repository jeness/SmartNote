import { browser, by, element } from 'protractor';

export class Login {
  navigateTo() {
    return browser.get('/login');
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
  login() {
    return element(by.id("login"));
  }
}
