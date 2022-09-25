import React from 'react';
import './Products.css'

const Products = (props) => {
    const {id,name,img,seller,price,ratings}=props.product;
    // console.log(id,name,img,seller,price,ratings);
    return (
        <div className='product-container'>
            <img src={img} alt="" />

            
        </div>
    );
};

export default Products;