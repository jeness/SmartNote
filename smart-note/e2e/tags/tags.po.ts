import { browser, by, element } from 'protractor';

export class Tags {
  navigateTo() {
    return browser.get('/tag');
  }

  // get the app title
  getTitle() {
    return browser.getTitle();
  }

  // add a new tag
  getNewTag() {
    return element(by.id("newTag"));
    //return element(by.css(".tag input[type=text]"));
  }

  // add the new tag to tag list
  addNewTag() {
    return element(by.css('.tag input[type=keydown.enter]'));
  }

  // get all the tags
  getAllTags() {
    // return element.all(by.id('tags')).all(by.css('div'));
    return element.all(by.css(".tag .tag-list-wrap .tag-item"));
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
