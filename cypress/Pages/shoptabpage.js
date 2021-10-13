/// <reference types="Cypress" />
import shoptab from '../locators/shoptabLoc'


// Get all locators as reference functions
export default{
    getLi_allClothings:function()
    {
      return  cy.get(shoptab.clothing)
    },

    getProduct_underShopTab:function( prodname)
    {
        return cy.get(prodname);
    },




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