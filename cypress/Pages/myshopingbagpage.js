/// <reference types="Cypress" />
import myshopingbaglocator from '../locators/myshopingbagLoc'

export default {

    getTxt_promocode: function () {
        return cy.get(myshopingbaglocator.txt_promocode)
    },
    getBtn_apply: function () {
        return cy.get(myshopingbaglocator.btn_apply)
    },

    getLbl_promoErrorLabel: function () {
        return cy.get(myshopingbaglocator.lbl_promoerror);
    },
    getBtn_viewMyShopingBag: function () {
        return cy.get(myshopingbaglocator.btn_viewMyShoppingBag)
    },
    getBtn_proceedToCheckout: function () {
        return cy.get(myshopingbaglocator.btn_proceedToCheckout);
    },
    getDrodown_quantity: function () {
        return cy.get(myshopingbaglocator.drp_selectQty)
    },
    getDropdown_selectedValue: function () {
        return cy.get(myshopingbaglocator.drp_selectedValue)
    },
    getBtn_removeFromCart: function () {
        return cy.get(myshopingbaglocator.btn_cartRemove)
    },


    // click methods
    click_apply: function () {
        this.getBtn_apply().click();
    },
    click_viewMyShopingBag: function () {
        this.getBtn_viewMyShopingBag().click();
    },
    click_proceedToCheckout: function () {

        this.getBtn_proceedToCheckout().click().should('be.enabled');

    },

    /* User can able to select the Quantity to change from drop down , 
   this method will change the size and verify changed size is reflected or not */

    click_quantityAndSelect: function (qty) {
        this.getDrodown_quantity().last().select(qty);
        this.getDropdown_selectedValue().last().should('have.text', qty);
        //this.getDrodownQuantity().last().should('have.value', qty)
    },

    /* User can able to select the size to change from drop down , 
    this method will change the size and verify changed size is reflected or not */

    click_sizeAndSelect: function (size) {
        this.getDrodown_quantity().first().select(size);
        this.getDropdown_selectedValue().first().should('have.text', size);
        // cy.get('.pml-dropdown__select option:selected').first().should('have.text', size)

    },

    // Remove the items from the shopping Bag Page
    click_removeItemsFromCart: function () {
        this.getBtn_removeFromCart().click();
    },
    typePromeCode: function () {
        this.getTxt_promocode({ timeout: 10000 }).last().clear({ force: true });
        this.getTxt_promocode().last().type("shiva", { force: true });
    },





    verifyPromoError: function () {
        cy.contains(myshopingbaglocator.lbl_promoerrortext).should('exist')
    },

    /* This method is used to remove items from shopping cart */

    removeItemFromCart: function (el) {
        
        this.getBtn_removeFromCart().each(
            ($el, index, $list) => { 
                cy.log($el.length)
                if($el.length > 0)
                    cy.wrap($el).waitUntil(cy.get($el).should('be.visible')).click({force: true})
                else
                cy.log("no items to click")
                }
        )
    }


}