export const addItemToCart = (cartItems, cartItemToAdd) => {
//    we are gonna look inside of our existing cartItems to see if that cart items already exist
//    The find() method returns the first element in the provided array based on the condition we add in ()
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
        return cartItems.map( cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }
    //if the cartItem is not found inside of our array then we wanna return a new array
    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
};