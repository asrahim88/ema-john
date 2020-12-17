import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>by {seller}</p>
                <br/>
                <p><small>${price}</small></p>
                <p>only {stock} left in stock - order soon</p>
                <button   className="main-button" onClick={() => {props.handleAddProduct(props.product)}} > <FontAwesomeIcon icon={faShoppingCart} />  Add to Cart </button>
            </div>

        </div>
    );
};

export default Product;