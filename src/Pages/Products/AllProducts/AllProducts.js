import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const AllProducts = () => {
   // const allProducts = useLoaderData()
   const [allProducts,setAllProducts] = useState([]);
   const [count,setCount] = useState(0)
   const [page,setPage] = useState(0)
   const limit =6
   // const page =count/limit


   useEffect(() => {
     fetch(`http://localhost:5000/allProducts?page=${page}&limit=${limit}`)
       .then((res) => res.json())
       .then((data) =>{
         setAllProducts(data.result)
         setCount(data.count)
      }
       );
   }, [page,limit]);

   const pages = Math.ceil(count / limit);


   return (
      <>
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
       {allProducts?.map((product) => (
         <Product key={product._id} product={product}></Product>
       ))}
       {/* <h1>{page}</h1> */}
       
     </div>
     <div className="flex justify-center space-x-1 text-gray-100 my-20">
         {[...Array(pages).keys()].map((number) => (
           <button
             key={number+1}
             type="button"
             title="Page 1"
             className="inline-flex items-center justify-center w-8 h-8 text-lg ml-3 font-semibold border rounded shadow-md bg-slate-100 text-secondary border-secondary"
             onClick={() => setPage(number)}
           >
             {number}
           </button>
         ))}
       </div>
       </>
   );
};

export default AllProducts;