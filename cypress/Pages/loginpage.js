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


//  click methods
     click_login:function(){
        this.getBtn_login().click();
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