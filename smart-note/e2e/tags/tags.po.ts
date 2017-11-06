import { browser, by, element } from 'protractor';

export class Tags {
  navigateTo() {
    return browser.get('/tag');
  }

  // get the app title
  getTitle() {
    return browser.getTitle();
  }

  // get the newly inserted tag
  getNewTag() {
    return element(by.id("newTag"));
  }

  // get all the tags
  getAllTags() {
    return element.all(by.id('tags')).all(by.css('div'));
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
