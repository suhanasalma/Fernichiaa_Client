import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Product = ({product}) => {
   console.log(product)
   const {
   //   categoryName,
     title,
   //   boughtYear,
   //   newPrice,
   //   oldPrice,
   //   sellerNamelocation,
     img,
   //   sellerImg,
   //   sellerEmail,
     details,
     _id
   } = product;
   return (
     <div className="card bg-base-100 shadow-xl">
       <figure className="relative">
         <img className="h-96 w-full" src={img} alt="Shoes" />
       </figure>
       <div
         className="absolute top-10 right-80 text-4xl flex items-center justify-center lg:left-96 bg-white text-secondary h-14 rounded-full w-14 tooltip"
         data-tip="add to cart"
       >
         <FaHeart className="" />
       </div>
       <div className="card-body">
         <h2 className="card-title">
           {title}
           {/* <div className="badge badge-secondary">NEW</div> */}
         </h2>
         <p>{details?.slice(0, 100)}...</p>
         <div className="card-actions justify-end">
           <button className="btn bg-secondary text-white hover:text-secondary border-none">
             Book Now
           </button>
           <Link to={`/productDetails/${_id}`}>
             <button className="btn bg-secondary text-white hover:text-secondary border-none">
               Show Details
             </button>
           </Link>
         </div>
       </div>
     </div>
   );
};

export default Product;