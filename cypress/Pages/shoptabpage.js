/// <reference types="Cypress" />
import shoptab from '../locators/shoptabLoc'


 /* Getter Methods to get the locators and used to apply actions 
    *
    */


export default{
    getLi_allClothings:function()
    {
      return  cy.get(shoptab.clothing)
    },

    getProduct_underShopTab:function( prodname)
    {
        return cy.get(prodname);
    },

    /* Action Methods
    *
    */


    click_allClothings:function()
    {
        this.getLi_allClothings().click();
    },

    clickListItem:function(listItem)
    {
        listItem.click();
    },

    click_productOfShopTab(prodname)
    {
        this.getProduct_underShopTab(prodname).should('exist').click()
    }

}