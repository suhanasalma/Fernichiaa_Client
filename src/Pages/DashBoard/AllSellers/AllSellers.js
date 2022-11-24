import React, { useEffect, useState } from 'react';
import Seller from './Seller';

const AllSellers = () => {
   const [allSellers,setAllSeller] = useState()

   useEffect(()=>{
      fetch("http://localhost:5000/users?role=seller")
      .then(res=>res.json())
      .then(data=>{
         // console.log(data)
         setAllSeller(data)
      })

   },[])

   console.log(allSellers)




   return (
     <div>
       <div className="bg-info h-40 flex justify-center items-center text-3xl my-10">
         <div className="text-center">
           <h1>All Sellers Lists</h1>
         </div>
       </div>
       <div className="overflow-x-auto w-full">
         <table className="table w-full">
           <thead>
             <tr>
               <th>
                 Verified
               </th>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Delete</th>
               <th>Verify Seller</th>
             </tr>
           </thead>
           <tbody>
             {allSellers?.map((item) => (
               <Seller item={item}></Seller>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   );
};

export default AllSellers;