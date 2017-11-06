import { Login } from './login.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(2000); 
  }

describe('Login page', () => {
  let page: Login;

  beforeEach(() => {
    page = new Login();
  });
  
  // display app title
  it('should get the title', () => {
    //page.navigateTo();
    //sleep();    
    expect(page.getTitle()).toEqual('SmartNote');
  });

  // get user name
  it('should get username', () => {
    //page.navigateTo();
    var username = page.getUsername().sendKeys('demo3');
    sleep();    
    expect(username).toBeTruthy;
  });

  // get user password
  it('should get password', () => {
    //page.navigateTo();
    var password =  page.getPassword().sendKeys('123456'); 
    sleep();     
    expect(password).toBeTruthy;
  });

    // get user password
    it('should be able to login', () => {
      //page.navigateTo();
      var login =  page.login().click(); 
      sleep();     
      expect(login).toBeTruthy;
    });

});
