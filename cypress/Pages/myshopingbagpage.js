/// <reference types="Cypress" />
import myshopingbaglocator from '../locators/myshopingbag.locator'

export default{

    getpromocodeTextbox:function()
    {
        return cy.get(myshopingbaglocator.txt_promocode)
    },
    getApplyButton:function()
    {
        return cy.get(myshopingbaglocator.btn_apply)
    },

    getPromoErrorLabel:function()
    {
       return cy.get(myshopingbaglocator.lbl_promoerror);
    },


    typePromeCode:function()
    {
        this.getpromocodeTextbox({timeout:10000}).last().clear({force: true});
        this.getpromocodeTextbox().last().type("shiva");
    },

    clickApply:function()
    {
        this.getApplyButton().click();
    },

    verifyPromoError:function()
    {
            cy.contains(myshopingbaglocator.lbl_promoerrortext).should('exist')
    }


}