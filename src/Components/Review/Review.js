import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    
    useEffect( () =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);


        const cartProduct = productKeys.map(pdKey => {
            const product = fakeData.find(pd => pd.key === pdKey); 
            product.quantity = savedCart[pdKey]
            return product;
        });
        setCart(cartProduct);
    }, []);
    const removeProduct = (removeProductKey) =>{
        const newCart = cart.filter(pd => pd.key !== removeProductKey);
        setCart(newCart);
        removeFromDatabaseCart(removeProductKey);
    }
    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div className = "twin-container">
            <div className = "product-container">
            {
                cart.map(pd => <ReviewItems removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItems>)
            }
            {
                thankYou
            }
            </div>
            <div className = "cart-container">
                <Cart cart ={cart}>
                    <button className = "main-button" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;