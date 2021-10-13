/// <reference types="Cypress" />
import registrationPageLoc from "../locators/registrationPageLoc"

export default{
    get_btnEmail:function()
    {
        return cy.contains(registrationPageLoc.btn_Email)
    },
    get_btnPhone:function()
    {
        return cy.contains(registrationPageLoc.btn_Phone)
    },
    get_txtEmail:function()
    {
        return cy.get(registrationPageLoc.txt_email)
    },
    get_txtFirstName:function()
    {
        return cy.get(registrationPageLoc.txt_firstName)
    },
    get_txtLastName:function()
    {
        return cy.get(registrationPageLoc.txt_lastName)
    },
    get_txtPassword:function()
    {
        return cy.get(registrationPageLoc.txt_password)
    },
    get_btnCreateAccount:function()
    {
        return cy.get(registrationPageLoc.btn_createAnAccount)
    },
    get_btnUserMenu:function()
    {
        return cy.get(registrationPageLoc.btn_userMenu)
    },
    get_selectedItem:function()
    {
        return cy.get(registrationPageLoc.btn_selectedItem)
    },
    get_imgClose:function()
    {
        return cy.get(registrationPageLoc.img_close)
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
    },

    clikImageClose:function()
    {
        this.get_imgClose().click({force:true});
    },
 

    // Verification Methods

    isDefaultEmailSelected:function()
    {
        this.get_selectedItem().should('have.text','Email');
    },

    displayError_EmailAddressAlreadyUsed:function()
    {
        cy.contains(registrationPageLoc.error_emailAlreadyExists).should('exist')
    }
      
}