export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        console.log('adding...');
        var result =  cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
        console.log(result);
        return result;
    } 

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const deleteItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id && cartItem.quantity > 0 ?
        {...cartItem, quantity: cartItem.quantity - 1} :
        cartItem
    );
}