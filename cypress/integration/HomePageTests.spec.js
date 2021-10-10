
/// <reference types="Cypress" />
import HomePO from '../Pages/homepage'
import registrationPO from '../Pages/registrationPage'
import shoptabPO from '../Pages/shoptabpage'
import { generateRandomEmail } from '../utils/randomemailgenerator'
import pomeloBasicConstansts from '../constants/PomeloBaseConstants';
import myshopingbagPO from '../Pages/myshopingbagpage';

var email = generateRandomEmail();
describe("Homepage Tests",()=>{
     
    it.only("Customer Able to Register on Pomelo Website Successfuylly Using Email",()=>{
        HomePO.navigateToRegistrationForm();
        registrationPO.isDefaultEmailSelected();
        registrationPO.typeEmail(email);
        registrationPO.typeFirstName(pomeloBasicConstansts.firstName)
        registrationPO.typeLastName(pomeloBasicConstansts.lastName)
        registrationPO.typePassWord(pomeloBasicConstansts.password)
        registrationPO.clickToCreateAccount();
        registrationPO.get_btnUserMenu().contains(pomeloBasicConstansts.welcomeMessage);
        registrationPO.clikImageClose()   
        cy.log("account created successfully")
        
        
    });

    it("Navigate to Login page",()=>{
        HomePO.navigateToLoginPage();
    });

    it("Navigate to shopiing cart page",()=>{
        HomePO.navigateToShoppingCart();
        HomePO.isEmptyShoppingCartImageExists();
    });

    it("AddItemsTo the Card",()=>{
        
        HomePO.clickshop();
        cy.wait(5000)
        shoptabPO.clickAllClothings();
        console.log(cy.url());
        cy.url().should('include','clothes/clothes')
        //cy.get('.product-hover-interactions__add-to-bag > .option-items-wrapper >.option-item').first().click({force: true});
        cy.get('.product-hover-interactions__add-to-bag ',{timeout:10000}).first().get('.option-items-wrapper >.option-item').first().click({force: true});
        cy.wait(5000)
        cy.get('[data-cy=cart__view_bag]',{timeout:5000}).click();
        cy.get('.pml-dropdown__select').last().select('3')
        cy.get('.pml-dropdown__select',{timeout:5000}).last().should('have.value', '3')
        cy.get('.pml-dropdown__select').last().select('1')
        cy.get('.pml-dropdown__select',{timeout:5000}).last().should('have.value', '1')
        myshopingbagPO.typePromeCode();
        myshopingbagPO.clickApply();
        myshopingbagPO.verifyPromoError();
       cy.get('.cart-remove').click()
       HomePO.isEmptyShoppingCartImageExists();

        //shoptabPO.clickListItem(shoptabPO.getallClothings())
        //shoptabPO.getallClothings().click();
    });
});