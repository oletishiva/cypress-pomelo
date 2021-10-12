/// <reference types="Cypress" />
import searchItemsPageLoc from "../locators/searchItemsPageLoc"

export default{
    getBtnAddToBag:function()
    {
        return cy.get(searchItemsPageLoc.btn_addToBag)
    },
    getBtnProductSize:function()
    {
        return cy.get(searchItemsPageLoc.btn_addItemToBagBySize)
    },






    //Click Methods on Search Results Page

    clickAddToBag: function(){
        
        this.getBtnAddToBag().click();

    },
    AddItemToBagBySize:function(fit){

        this.getBtnProductSize().contains(fit).click({force:true}); // Click the item Based on provided size S,M

    }

      
}