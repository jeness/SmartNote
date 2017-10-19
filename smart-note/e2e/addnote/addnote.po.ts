import { browser, by, element } from 'protractor';

export class Addnote {
  navigateTo() {
    return browser.get('/addNote');
  }

}
