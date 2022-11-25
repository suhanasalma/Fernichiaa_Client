import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../Context/SharedContext';
import MyProduct from './MyProduct';

const MyProducts = () => {
   const [myProducts,setMyProducts] = useState([])
   const {user} = useContext(authContext)

   useEffect(()=>{
      fetch(`http://localhost:5000/sellProducts/${user?.email}`)
        .then((res) => res.json())
        .then(
          (data) => {
            console.log(data);
            setMyProducts(data);
          },
          [user?.email]
        );

   })
   return (
     <div>
       <div className="bg-info h-40 flex justify-center items-center text-3xl my-10">
         <div className="text-center">
           <h1>Product on Sell List</h1>
         </div>
       </div>
       <div className="overflow-x-auto w-full">
         <table className="table w-full">
           <thead>
             <tr>
               <th>Sold</th>
               <th>Name</th>
               <th>Category</th>
               <th>Post Date</th>
               <th>Sale Price</th>
               <th>Delete</th>
               <th>Advertise</th>
               <th>Edit</th>
             </tr>
           </thead>
           <tbody>
             {myProducts?.map((item) => (
               <MyProduct item={item}/>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   );
};

export default MyProducts;