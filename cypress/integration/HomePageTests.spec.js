
/// <reference types="Cypress" />
import HomePO from '../Pages/homepage'
import registrationPO from '../Pages/registrationPage'
import shoptabPO from '../Pages/shoptabpage'
import { generateRandomEmail } from '../utils/randomemailgenerator'
import pomeloBasicConstansts from '../constants/PomeloBaseConstants';
import myshopingbagPO from '../Pages/myshopingbagpage';
import searchItemsPO from '../Pages/searchItemsPage';
import loginPO from '../Pages/loginpage';
import myshopingbagLocator from '../locators/myshopingbag.locator';

var email = generateRandomEmail();


describe(" Non LogedIn User: Add Items to the Shopiing Bag",()=>{
    
    it("Non Logged In customer can able to add Itesms to the Cart",()=>{
        cy.wait(10000);
        HomePO.clickshop();
        shoptabPO.click_allClothings();
        console.log(cy.url());
        cy.url().should('include','clothes/clothes')
        //cy.get('.product-hover-interactions__add-to-bag > .option-items-wrapper >.option-item').first().click({force: true});
        //cy.get('.product-hover-interactions__add-to-bag ',{timeout:10000}).first().get('.option-items-wrapper >.option-item').first().click({force: true});
        searchItemsPO.AddItemToBagBySize("S")
       // cy.wait(5000)
      // cy.get('[data-cy=cart__view_bag]',{timeout:5000}).click();
        myshopingbagPO.click_viewMyShopingBag();
        
       //cy.get('.pml-dropdown__select').last().select('3')
        
       // cy.get('.pml-dropdown__select',{timeout:5000}).last().should('have.value', '3')
       // cy.get('.pml-dropdown__select').last().select('1')
       // cy.get('.pml-dropdown__select',{timeout:5000}).last().should('have.value', '1')
       
    // remove all cart Items
            myshopingbagPO.click_removeItemsFromCart();
            HomePO.isEmptyShoppingCartImageExists();
    });

    it("Non Logged In customer can able modify the Quantity In the Cart",()=>{
       
        cy.wait(10000);
        HomePO.clickshop();
        shoptabPO.click_allClothings();
        searchItemsPO.AddItemToBagBySize("S")
        myshopingbagPO.click_viewMyShopingBag();
        myshopingbagPO.click_quantityAndSelect("2")
        // cleanup items from the cart
        myshopingbagPO.click_removeItemsFromCart();
        HomePO.isEmptyShoppingCartImageExists();
        
   
    });

    it("Non Logged In customer can able modify the Size In the Cart",()=>{
       
        cy.wait(10000);
        HomePO.clickshop();
        shoptabPO.click_allClothings();
        searchItemsPO.AddItemToBagBySize("S")
        myshopingbagPO.click_viewMyShopingBag();
        myshopingbagPO.click_sizeAndSelect("M")

        // cleanup items from the cart
        myshopingbagPO.click_removeItemsFromCart();
        HomePO.isEmptyShoppingCartImageExists();

        
   
    });

    it("Should Show Error when apply wrong Promocode",()=>{
        
        HomePO.clickshop();
        cy.wait(10000);
        shoptabPO.click_allClothings();
        searchItemsPO.AddItemToBagBySize("S")
        myshopingbagPO.click_viewMyShopingBag();
        myshopingbagPO.typePromeCode();
        myshopingbagPO.click_apply();
        myshopingbagPO.verifyPromoError();

        //// cleanup items from the cart
        myshopingbagPO.click_removeItemsFromCart();
        HomePO.isEmptyShoppingCartImageExists();
   
    });

    it("Should able to remove items in the shoping Bag",()=>{
        
        HomePO.clickshop();
        cy.wait(10000);
        shoptabPO.click_allClothings();
        searchItemsPO.AddItemToBagBySize("S")
        myshopingbagPO.click_viewMyShopingBag();
        cy.get('.cart-remove').click()
        HomePO.isEmptyShoppingCartImageExists();
      
   
    });

});
describe("Homepage Tests",()=>{

    it("Navigate to shopiing cart page",()=>{
        HomePO.navigateToShoppingCart();
        HomePO.isEmptyShoppingCartImageExists();
    });
     
    it("Customer Able to Register on Pomelo Website Successfuylly Using Email",()=>{
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

    it("LoggedIn User can able to add Items to shopping Bag",()=>{
        HomePO.navigateToLoginPage();
        loginPO.typeEmail(pomeloBasicConstansts.existingemail)
        loginPO.typePassword(pomeloBasicConstansts.password)
        loginPO.click_login();
        registrationPO.get_btnUserMenu().contains(pomeloBasicConstansts.welcomeMessage);
        HomePO.clickshop();
        shoptabPO.click_allClothings();
        console.log(cy.url());
        cy.url().should('include','clothes/clothes')
        searchItemsPO.AddItemToBagBySize("M")
        myshopingbagPO.click_viewMyShopingBag();
        //myshopingbagPO.click_quantityAndSelect("3");
        cy.get('.product-image >.cart-remove').each(
            ($el,index) => {cy.wrap($el).should('be.visible').click()}
            )
        HomePO.isEmptyShoppingCartImageExists();
    });
});
    


    
