export const addItemToCart = (cartItems, cartItemToAdd) => {

    console.log('cart items');
    console.log(cartItems);

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    console.log('existing cart item');
    console.log(existingCartItem);

    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}