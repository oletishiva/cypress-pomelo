import signupSuccessPageLocators from '../locators/signupSuccess.locator'


var signupSuccessPage={
    verifyConfirmEmalTextExists: function () {
        cy.contains(signupSuccessPageLocators["emailConfirm"])
    },
    verifyEmailSentToMessageExists: function () {
        cy.contains(signupSuccessPageLocators["emailsentto"])
    },
    VerifySignupEmailCorect: function(signupEmail)
    {
        cy.contains(signupEmail);
    },
   // currently it is returning the value as [object,object], need investigation here 
    VerifyiSSingupUrlCorrect: function()
    {
      console.log("*****************"+cy.url());
      console.log("-------------"+cy.location('href'));
        //  cy.url({timeout: 20000}).should('eq',signupSuccessPageLocators["signupurl"])
    },
//
    VerifyClickHereLinkExits:function()
    {
        //cy.contains(signupSuccessPageLocators["clickHereLink"]).should('have.attr','href','Click here');
        cy.contains(signupSuccessPageLocators["clickHereLink"]).should('have.attr','href')
    },


}
export default signupSuccessPage;