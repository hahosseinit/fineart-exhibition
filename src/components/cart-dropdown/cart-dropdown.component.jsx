import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropdownContainer, EmptyMassage, CartItemsContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ) : (
                    <EmptyMassage> Your cart is empty! </EmptyMassage>
                 )}
            </CartItemsContainer>
            <CustomButton  style = {{ marginTop: 'auto' }} onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </CartDropdownContainer>
    )};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));