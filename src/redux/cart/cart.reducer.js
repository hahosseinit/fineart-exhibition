import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload )
                //action.payload: the item that we want to add
                // cartItems: [...state.cartItems, action.payload]
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                //filter return anything that its true
                //action.payload.id the item that u wanna remove
                cartItems: state.cartItems.filter(cartItem =>
                cartItem.id !== action.payload.id
                //    we wanna keep items in above situation
                )
            };
        default:
            return state;
    }
}

export default cartReducer;