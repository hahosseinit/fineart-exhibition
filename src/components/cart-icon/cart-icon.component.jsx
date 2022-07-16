import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { ItemCountContainer, CartIconContainer } from './cart-icon.styles';

const cartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon style={{ width: '24px', height: '24px'}} />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);