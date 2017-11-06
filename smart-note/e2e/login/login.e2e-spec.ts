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
    page.navigateTo();
    sleep();    
    expect(page.getTitle()).toEqual('SmartNote');
  });
//   // to do some clean up
//   // use afterEach(()=> {});

});
