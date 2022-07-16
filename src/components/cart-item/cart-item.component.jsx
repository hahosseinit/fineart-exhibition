import React from 'react';

import { Name, ItemDetailsContainer, CartItemContainer } from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity } }) => (
    <CartItemContainer className='cart-item'>
        <img style={{width: '30%'}} src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <Name>{name}</Name>
            <span>
                {quantity} × ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;