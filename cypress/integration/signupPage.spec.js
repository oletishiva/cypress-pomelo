/// <reference types="Cypress" />
import { signuppageLocator, signupErrorMessages } from '../locators/signupPage.locator';
import signupPage from '../Pages/signup.pages'
import { generateRandomEmail } from '../utils/randomemailgenerator'
import manatalConstants from '../constants/manatal.constants';
import signupSuccessPage from '../Pages/signupSuccess.pages';
import loginpage from '../Pages/login.pages';


var companyemail = generateRandomEmail();


context('Postive Scenarios: Validation of sign up form', () => {
  beforeEach(() => {
    cy.visit('/signup/')
  })

  describe('signup Page:Successful signup', () => {
      it('Verify User can able to signup successfully6 with valid details', () => {

      signupPage.enter_name(manatalConstants.name);
      signupPage.enter_orgname(manatalConstants.orgname)
      signupPage.enter_email(companyemail)
      signupPage.enter_confirmEmail(companyemail)
      signupPage.enter_password(manatalConstants.password)
      signupPage.click_rb_agency().should('be.checked');
      signupPage.clickIAgree();
      signupPage.click_signup();
      signupSuccessPage.verifyConfirmEmalTextExists();
      signupSuccessPage.VerifySignupEmailCorect(companyemail);
      //signupSuccessPage.VerifyiSSingupUrlCorrect(); // URL value is not returning cy.url();
      signupSuccessPage.VerifyClickHereLinkExits();

    })

  })

  

  })
