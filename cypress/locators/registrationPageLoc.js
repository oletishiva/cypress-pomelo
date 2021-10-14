export default{
    btn_Email:'Email',// Tab Email,use this with contains
    btn_Phone:'Phone', // Tab Phone use this with contains
    txt_email:'[name="email"]', //input email
    txt_firstName:'[name="firstName"]',//input firstname
    txt_lastName:'[name="lastName"]', // input  lassname
    txt_password:'[name="password"]', // input passwrod
    btn_createAnAccount:'[data-cy=auth__login__email__button]', //Button Create An Account
    btn_userMenu:'[data-cy=auth__user__menu]', // Used after successful login
    btn_selectedItem:'.tabs__item.selected', // Used to which tab is selected 
    img_close:'.auth__close .icon-image', // Used to close the information window when registration success
    error_emailAlreadyExists:'Sorry email address already used' //  Used when user enters the existing email,use this with contains
}