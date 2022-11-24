import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
   const products = useLoaderData()
  
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
      {
         products.map(product=><Product key={product._id} product={product}></Product>)
      }
    </div>
  );
};

export default Products;