/// <reference types="Cypress" />
import registrationPage from '../locators/registrationPage.locator'

export default{
    get_btnEmail:function()
    {
        return cy.contains(registrationPage.btn_Email)
    },
    get_btnPhone:function()
    {
        return cy.contains(registrationPage.btn_Phone)
    },
    get_txtEmail:function()
    {
        return cy.get(registrationPage.txt_email)
    },
    get_txtFirstName:function()
    {
        return cy.get(registrationPage.txt_firstName)
    },
    get_txtLastName:function()
    {
        return cy.get(registrationPage.txt_lastName)
    },
    get_txtPassword:function()
    {
        return cy.get(registrationPage.txt_password)
    },
    get_btnCreateAccount:function()
    {
        return cy.get(registrationPage.btn_createAnAccount)
    },
    get_btnUserMenu:function()
    {
        return cy.get(registrationPage.btn_userMenu)
    },



    clickEmailButton:function()
    {
        this.get_btnEmail().click();
    },
    typeEmail:function(email)
    {
        this.get_txtEmail().clear();
        this.get_txtEmail().type(email);
    },
    typeFirstName:function(firstName)
    {
        this.get_txtFirstName().clear();
        this.get_txtFirstName().type(firstName);
    },
    typeLastName:function(lastName)
    {
        this.get_txtLastName().clear();
        this.get_txtLastName().type(lastName);
    },
    typePassWord:function(password)
    {
        this.get_txtPassword().clear();
        this.get_txtPassword().type(password);
    },
    clickToCreateAccount:function(){
        this.get_btnCreateAccount().should('not.be.disabled').click();
    }
}