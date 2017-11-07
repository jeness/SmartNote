import { browser, by, element } from 'protractor';

export class SmartNote {
  navigateTo() {
    return browser.get('/');
  }

  getLogoutButton() {
    return element(by.css(" .logout"));
  }
}
