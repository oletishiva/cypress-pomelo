/// <reference types="Cypress" />
import searchItemsPageLoc from "../locators/searchItemsPageLoc"

export default{

     /* Getter Methods to get the locators and used to apply actions 
    *
    */

    getBtnAddToBag:function()
    {
        return cy.get(searchItemsPageLoc.btn_addToBag)
    },
    getBtnProductSize:function()
    {
        return cy.get(searchItemsPageLoc.btn_addItemToBagBySize)
    },






    /* Action Methods
    *
    */

    clickAddToBag: function(){
        
        this.getBtnAddToBag().click();

    },
    AddItemToBagBySize:function(fit){

        this.getBtnProductSize().contains(fit).click({force:true}); // Click the item Based on provided size S,M

    }

      
}