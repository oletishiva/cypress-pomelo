import homepage from '../locators/homePageLoc'


export default{

    /* Getter Methods to get the locators and used to apply actions 
    *
    */

    btn_login:function()
    {
        return cy.get(homepage.btn_login);
    },
    btn_register:function()
    {
        return cy.contains(homepage.btn_register);
    },
    btn_shotppingcart:function(){

        return cy.get(homepage.btn_shoppingcart)

    },
    get_emptyShoppingCartImage:function(){
        return cy.get(homepage.img_cart, { timeout: 5000 });
    },
    get_tabShop:function()
    {
        return cy.get(homepage.btn_shop)
    },

    /* Navigation function 
    *
    */

    navigateToRegistrationForm :function()
    {
       this.btn_register().click();
    },
    navigateToLoginPage:function()
    {
        this.btn_login().should('have.text','Login').click();
    },
    navigateToShoppingCart:function()
    {
        this.btn_shotppingcart().click();
    },

    /* Action Methods
    *
    */

    clickshop:function()
    {
        this.get_tabShop().click().should('be.visible');
    },

    toggleShopButton:function()
    {

        this.get_tabShop().click().then($body=>
        {
         if($body.find('.dropdown_arrow__active'))   
            console.log("expanded");
            else
            console.log("Its not expanded");

        });
    },

    /* Verification metods
    *
    */

    isEmptyShoppingCartImageExists:function()
    {
        this.get_emptyShoppingCartImage().should('exist');
    }
    
              

     
    

}