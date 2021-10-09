import loginpagelocator from "../locators/loginPage.locator";

var loginpage={
isloginToManatalTextExists: function()
{
    cy.contains(loginpagelocator.txt_loginToManatal());
}
}
export default loginpage;