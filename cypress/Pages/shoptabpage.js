/// <reference types="Cypress" />
import shoptab from '../locators/shoptab.locator'


// Get all locators as reference functions
export default{
    getLi_allClothings:function()
    {
      return  cy.get(shoptab.li_clothing)
    },


    click_allClothings:function()
    {
        this.getLi_allClothings().click();
    },

    clickListItem:function(listItem)
    {
        listItem.click();
    }

}