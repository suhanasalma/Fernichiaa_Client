import React, { useEffect, useState } from "react";
import Buyer from "./Buyer";

const AllBuyers = () => {
      const [allbuyer, setAllBuyer] = useState();

      useEffect(() => {
        fetch("http://localhost:5000/users?role=user")
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            setAllBuyer(data);
          });
      }, []);


   return (
     <div>
       <div className="bg-info h-40 flex justify-center items-center text-3xl my-10">
         <div className="text-center">
           <h1>All Buyers Lists</h1>
         </div>
       </div>
       <div className="overflow-x-auto w-full">
         <table className="table w-full">
           <thead>
             <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Delete</th>
             </tr>
           </thead>
           <tbody>
             {allbuyer?.map((item) => (
               <Buyer item={item}></Buyer>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   );
};

export default AllBuyers;