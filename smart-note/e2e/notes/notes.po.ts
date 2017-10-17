import { browser, by, element } from 'protractor';

export class Notes {
  navigateTo() {
    return browser.get('/notes');
  }

}
