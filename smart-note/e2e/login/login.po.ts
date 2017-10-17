import { browser, by, element } from 'protractor';

export class Login {
  navigateTo() {
    return browser.get('/login');
  }

}
