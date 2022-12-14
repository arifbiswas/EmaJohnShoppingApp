import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data));
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products 
                        key={product.id}
                        product ={product}
                    
                    ></Products>)
                }
            </div>
            <div className="janina-container">
                <h1>Jani contaienr</h1>
            </div>
        </div>
    );
};

export default Shop;