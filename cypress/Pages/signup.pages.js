import  { signuppageLocator, signupErrorMessages } from '../locators/signupPage.locator';

// actions on the signup page

var signupPage = {

    txt_name:function () {
        return cy.get(signuppageLocator.txt_name())           
    },
    txt_orgname:function (){
       return cy.get(signuppageLocator.txt_orgname());
    },
    txt_email:function (){
        return cy.get(signuppageLocator.txt_email());
     },
     txt_confirmEmail:function (){
        return cy.get(signuppageLocator.txt_confirmEmail());
     },
     txt_password:function (){
        return cy.get(signuppageLocator.txt_password());
     },

     txt_phonenumber:function (){
        return cy.get(signuppageLocator.txt_phonenumber());
     },


// actions on the objects

    enter_name: function (name) {
      return  cy.get(signuppageLocator.txt_name())
            .type(name).should('have.value', name)
    },
    enter_orgname: function (orgname) {
        cy.get(signuppageLocator.txt_orgname())
            .type(orgname).should('have.value', orgname)
    },
    enter_email: function (email) {
        cy.get(signuppageLocator.txt_email())
            .type(email).should('have.value', email)
    },
    enter_confirmEmail: function (confrimEmail) {
        cy.get(signuppageLocator.txt_confirmEmail())
            .type(confrimEmail).should('have.value', confrimEmail)
    },
    enter_password: function (password) {
        cy.get(signuppageLocator.txt_password())
            .type(password);
       
    },

    enter_phonenumber: function (phonenumber){

        cy.get(signuppageLocator.txt_phonenumber())
        .type(phonenumber);
    },

    click_signup: function () {
        cy.contains('Sign up').click()

    },
    click_rb_agency: function () {
        return cy.get(signuppageLocator.rb_agency()).click();
    },
    click_rb_company: function () {
        return cy.get(signuppageLocator.rb_company()).click();
    },

    click_lnk_login:function() {
        return cy.contains(signuppageLocator.lnk_logintxt()).click(); // should not retrun statement for contains method
    },
    

    /* Error messages validations ( This we can make it as one common function and pass the message to validate)
        But because of only few errors and better readability on the page i have defined as different functions for each error
        */
    err_name: function () {
      return  cy.contains(signupErrorMessages["name_errormessage"])
    },
    err_orgname: function () {
      return  cy.contains(signupErrorMessages["orgname_errormessage"])
    },
    err_email: function () {
      return  cy.contains(signupErrorMessages["email_errormessage"])
    },
    err_confirmemail: function () {
      return  cy.contains(signupErrorMessages["confirmemail_errormessage"])
    },
    err_password: function () {
        return cy.contains(signupErrorMessages["password_errormessage"])
    },
    err_termsandconditions: function () {
       return cy.contains(signupErrorMessages["termsandconditions_errormessage"])
    },
    err_phonenumberError: function()
    {
        return cy.contains(signupErrorMessages["phonenumber_errormessage"])
    },

    //click agree terms and conditions

    clickIAgree: function(){
       cy.get(signuppageLocator.cbx_agree()).click();
    },

    // Verify focus of textbox orgname

    focus_validation: function () {
        cy.get(signuppageLocator.txt_orgname()).focus()
            .should('have.focus')

    },

    // Verify Password field is maksed or not

    isPasswordMasked:function(){
        cy.get(signuppageLocator.txt_password()).invoke('attr', 'type').should('eq', 'password')
    }

};

export default signupPage;