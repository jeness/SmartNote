import { browser, by, element } from 'protractor';

export class Tags {
  navigateTo() {
    return browser.get('/tag');
  }

  // get the welcome msg
  getParagraphText() {
    return element(by.css('h1')).getText();
  }

//   // get the list of tags
//   getAllTags() {  
//     return element(by.css('tag-list-wrap')).all(by.tagName('tag-item')); 
//     // return element.all(by.css('.tag .tag-list-wrap .tag-item'));
//   }

//   // add a tag
//   addTag() {
//     //return element(by.model('newTag.title'));
//     return element(by.css('.new-note input[type=text]'));
//   }

//   // delete the first tag
//   deleteFirstTag() {

//   }

//   // delete the last tag
//   deleteLastTag() {

//   }

//   // delete a specific tag
//   deleteTag() {

//   }
}
