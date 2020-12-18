import React from 'react';
import './ReviewItems.css';

const componentName = (props) => {
 
    const {name, quantity, key, price} = props.product;
    
    return (
        <div className = 'reviewItems'> 
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>${price}</p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className="main-button"> Remove </button>
        </div>
    );
};

export default componentName;