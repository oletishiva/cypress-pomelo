/* This Page contains the locators of Item Added To Bag  & 
* View My SHopping Bag Page

*/

export default{
    txt_promocode:'input', // Enter Promocode in the My Shopping Bag page
    btn_apply:'.cart-discount__main > >.pml-btn-label', // Apply Button Beside PromoCode
    lbl_promoerror:'.pomelo-snack-bar active', // Error when enter wrong promo
    lbl_promoerrortext:'Invalid voucher code', //Error text when enter wrong promo
    btn_proceedToCheckout:'[data-cy="cart__checkout"]', // Proceed To Checkout Button
    btn_viewMyShoppingBag:'[data-cy=cart__view_bag]', // View My Shopping Bag when add item to the Add to Bag
    drp_selectQty:'.pml-dropdown__select', // Quantity Or Size Selection or modification, we can make rename to this selector
    drp_selectedValue:'.pml-dropdown__select option:selected', // Used to verify selected value in the drop down
    btn_cartRemove:'.product-image .cart-remove' // X -- remove button

    

}