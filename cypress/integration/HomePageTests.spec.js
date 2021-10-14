
/// <reference types="Cypress" />
import '../support/commands'
import HomePO from '../Pages/homepage'
import registrationPO from '../Pages/registrationPage'
import shoptabPO from '../Pages/shoptabpage'
import { generateRandomEmail } from '../utils/randomemailgenerator'
import pomeloBasicConstansts from '../constants/PomeloBaseConstants';
import myshopingbagPO from '../Pages/myshopingbagpage';
import searchItemsPO from '../Pages/searchItemsPage';
import loginPO from '../Pages/loginpage';
import shoptabLoc from '../locators/shoptabLoc';
import 'cypress-wait-until';

var email = generateRandomEmail();

describe("New User Registration",()=>{
    
    it("Customer Able to Register on Pomelo Website Successfuylly Using Email", () => {
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

    it("Customer Should get Error When trying to register with the exising email", () => {
        HomePO.navigateToRegistrationForm();
        registrationPO.isDefaultEmailSelected();
        registrationPO.typeEmail(pomeloBasicConstansts.existingemail);
        registrationPO.typeFirstName(pomeloBasicConstansts.firstName)
        registrationPO.typeLastName(pomeloBasicConstansts.lastName)
        registrationPO.typePassWord(pomeloBasicConstansts.password)
        registrationPO.clickToCreateAccount();
        registrationPO.displayError_EmailAddressAlreadyUsed();
        cy.log("Error Showed successfully")


    });

})

describe(" Non LogedIn User: Add Items to the Shopiing Bag", () => {

    it("Non Logged In customer can able to add Itesms to the Cart", () => {
        cy.wait(10000);

        HomePO.clickshop();
        shoptabPO.click_allClothings();
        console.log(cy.url());
        cy.url().should('include', 'clothes/clothes')
        searchItemsPO.AddItemToBagBySize("S")
        myshopingbagPO.click_viewMyShopingBag();
        // remove all cart Items
        myshopingbagPO.click_removeItemsFromCart();
        HomePO.isEmptyShoppingCartImageExists();
    });

    it("Non Logged In customer can able modify the Quantity In the Cart", () => {

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

    it("Non Logged In customer can able modify the Size In the Cart", () => {

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

    it("Should Show Error when apply wrong Promocode", () => {

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

    it("Should able to remove items in the shoping Bag", () => {

        HomePO.clickshop();
        cy.wait(10000);
        shoptabPO.click_allClothings();
        searchItemsPO.AddItemToBagBySize("S")
        myshopingbagPO.click_viewMyShopingBag();
        myshopingbagPO.click_removeItemsFromCart();
        HomePO.isEmptyShoppingCartImageExists();



    });
    /* This follwing test case will demonstrate the user can able to select the item from different product
    * and able to check out with out entering promocode. When he check out it should ask for login or signup 
    *
    * We can also simply check user landed on login page or not 
    * The Reason for checking if developer working on Non logged In user functionality/
    * He can only execute this below method to make sure that login page is not broken
    * */

    it("Non Logged In Customer Should get the option to login or signup after checkout", () => {
        HomePO.clickshop();
        cy.wait(10000);
        shoptabPO.click_productOfShopTab(shoptabLoc.dresses);
        console.log(cy.url());
        // cy.verifyUrlText('/clothes/dresses') --> Currently have issue with the latest cypress to use custom command in spec files
        cy.url().should('include','/clothes/dresses')
        searchItemsPO.AddItemToBagBySize("S")
        myshopingbagPO.click_viewMyShopingBag()
        myshopingbagPO.click_proceedToCheckout()
        /* The following will make sure the user got the required options to login  */
        loginPO.getTxt_email().should('be.visible')
        loginPO.getTxt_password().should('be.visible')
        loginPO.getBtn_login().should('be.visible')
        loginPO.getBtn_signup().should('be.visible')

    });


});

describe("Shoping Bag Tests With LoggedIn User ", () => {

    it("Navigate to shopiing cart page", () => {
        HomePO.navigateToShoppingCart();
        HomePO.isEmptyShoppingCartImageExists();
    });

    

    it("LoggedIn User can able to add Items to shopping Bag, modify Size and Quantity", () => {
        HomePO.navigateToLoginPage();
        loginPO.typeEmail(pomeloBasicConstansts.existingemail)
        loginPO.typePassword(pomeloBasicConstansts.password)
        loginPO.click_login();
        registrationPO.get_btnUserMenu().contains(pomeloBasicConstansts.welcomeMessage);
        HomePO.clickshop();
        shoptabPO.click_allClothings();
        console.log(cy.url());
        cy.url().should('include', 'clothes/clothes')
        searchItemsPO.AddItemToBagBySize("M")
        myshopingbagPO.click_viewMyShopingBag()
         myshopingbagPO.click_sizeAndSelect("L") // can able to modify the items in the cart
        myshopingbagPO.click_quantityAndSelect("2") // can able to modify the count of the items
        myshopingbagPO.click_removeItemsFromCart();
        HomePO.isEmptyShoppingCartImageExists();
    });

    
});




