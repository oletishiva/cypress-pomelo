//locators on the signup page
var signuppageLocator = {

    txt_name: function () {
        return '[data-vv-name=name]'
    },

    txt_orgname: function () {
        return '[data-vv-name=organization_name]'
    },
    txt_email: function () {
        return '[data-vv-name=company_email_address]'
    },
    txt_confirmEmail: function () {
        return '[data-vv-name=confirm_company_email_address]'
    },
    txt_password:function(){
        return '[data-vv-name=password]'
    },
    txt_phonenumber: function()
    {
        return '.vti__input'
    },
    btn_signup:function(){
        return '.signup-material-button-contained'
        
    },
    rb_agency:function() {
        return 'input#agency'
    },
    rb_company:function() {
        return 'input#company'
    },
    cbx_agree:function() {
        return '[data-vv-name=agree]'
    },
    lnk_logintxt:function(){
        return 'Log in' // This is text, can be used with cy.contains() function in page objects page
    },
    focus_locator: function() {
        return '.focused'
 }

};

// error messages text  to verify error validations

var signupErrorMessages={
        'name_errormessage':'The name field is required',
        'orgname_errormessage':'The organization name field is required',
        'email_errormessage':'The company email address field is required',
        'confirmemail_errormessage':'The confirm company email address field is required',
        'password_errormessage':'The password field is required',
        'termsandconditions_errormessage':'The agree field is required',
        'phonenumber_errormessage':'Enter a valid phone number',
        'invalidEmail_errormessage':'The company email address field must be a valid email',
        'email_alreadyExists_errormessage':'User with this email address already exists.'
};

export default {signuppageLocator,signupErrorMessages};
