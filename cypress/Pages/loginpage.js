/// <reference types="Cypress" />
import loginPageLoc from "../locators/loginPageLoc";

export default{

    getTxt_email:function(){
       return cy.get(loginPageLoc.txt_email)
    },
    getTxt_password:function(){
        return cy.get(loginPageLoc.txt_password)
     },
     getBtn_login:function(){
        return cy.get(loginPageLoc.btn_login)
     },

     getBtn_signup:function(){
        return cy.contains(loginPageLoc.btn_singup)

     },


//  click methods
     click_login:function(){
        this.getBtn_login().click();
     },

     click_signup:function()
     {
        this.getBtn_signup().should('be.visible').click();
     },

     //
     typeEmail:function(email)
     {
        this.getTxt_email().clear();
        this.getTxt_email().type(email)
     },
     typePassword:function(password)
     {
        this.getTxt_password().clear();
        this.getTxt_password().type(password)
     }


}