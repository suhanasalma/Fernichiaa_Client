import React from 'react';

const Product = ({product}) => {
   console.log(product)
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
   } = product;
   return (
     <div className="card bg-base-100 shadow-xl">
       <figure>
         <img src={img} alt="Shoes" />
       </figure>
       <div className="card-body">
         <h2 className="card-title">
           {title}
           <div className="badge badge-secondary">NEW</div>
         </h2>
         <p>{details}</p>
         <div className="card-actions justify-end">
           <div className="badge badge-outline">Fashion</div>
           <div className="badge badge-outline">Products</div>
         </div>
       </div>
     </div>
   );
};

export default Product;