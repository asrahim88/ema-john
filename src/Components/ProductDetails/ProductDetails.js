import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {key} =useParams();
    const product = fakeData.find(prdKey => prdKey.key === key);
    return (
        <div>
            <h1 style ={{textAlign: 'center'}}>Your Product Details</h1> 
            <Product showAddToCArt = {false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;