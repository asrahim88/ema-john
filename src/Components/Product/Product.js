import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"> <Link to={'/product/'+ key}>{name}</Link> </h4>
                <p>by {seller}</p>
                <br/>
                <p><small>${price}</small></p>
                <p>only {stock} left in stock - order soon</p>
                {props.showAddToCArt && <button   className="main-button" onClick={() =>
                     {props.handleAddProduct(props.product)}} > 
                     <FontAwesomeIcon icon={faShoppingCart} />  
                     Add to Cart </button>}
            </div>

        </div>
    );
};

export default Product;