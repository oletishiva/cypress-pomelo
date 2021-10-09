/// <reference types="Cypress" />
import shoptab from '../locators/shoptab.locator'


// Get all locators as reference functions
export default{
    getallClothings:function()
    {
      return  cy.get(shoptab.li_clothing)
    },


    clickAllClothings:function()
    {
        this.getallClothings().click();
    },

    clickListItem:function(listItem)
    {
        listItem.click();
    }

}