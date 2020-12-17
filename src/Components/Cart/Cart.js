import React from 'react';

const Cart = (props) => {
    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const cart = props.cart;
    const total = cart.reduce( (total, product) => total + product.price, 0)
    let shippingConst = 0;
    if (total > 35) {
        shippingConst = 0;
    }
    else if (total > 15) {
        shippingConst = 4;
    }
    else if (total > 0) {
        shippingConst = 12;
    }
    const tax = total/ 10;

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price:{ formateNumber(total)}</p>
            <p>Tax + Vat: {formateNumber(tax)}</p>
            <p>shippingConst: {shippingConst}</p>
            <p>Total Price:{ formateNumber(total + shippingConst + tax )} </p> 

        </div>
    );
};

export default Cart;