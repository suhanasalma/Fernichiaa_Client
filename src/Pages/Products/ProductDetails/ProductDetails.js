import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
   const productDetails = useLoaderData()
   const {
     categoryName,
     title,
     boughtYear,
     newPrice,
     oldPrice,
     sellerNamelocation,
     img,
     sellerImg,
     sellerEmail,
     details,
     _id,
   } = productDetails; 

   
   return (
      <div>
         <h1>Hello from details</h1>
      </div>
   );
};

export default ProductDetails;