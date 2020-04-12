import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.styles.scss';

import {addItem, deleteItem, removeItem} from './../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, removeItem,  addItem, deleteItem}) => { 
    
    const {name, imageUrl, price, quantity} = cartItem;
    console.log('quantity is ' + quantity);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove" onClick={() => deleteItem(cartItem)}>&#10005;</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteItem: (item) => dispatch(deleteItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);