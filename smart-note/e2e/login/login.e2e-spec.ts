import { Login } from './login.po';
import { browser } from 'protractor';

// sleep for demonstration 
function sleep() {
    browser.driver.sleep(1500); 
  }

describe('Login page', () => {
  let page: Login;

  beforeEach(() => {
    page = new Login();
  });

//   // to do some clean up
//   // use afterEach(()=> {});

});
