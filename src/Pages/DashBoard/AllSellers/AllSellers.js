import React, {  useContext, useEffect, useState } from 'react';
import { authContext } from '../../../Context/SharedContext';
import Seller from './Seller';

const AllSellers = () => {
   const [allSellers,setAllSeller] = useState()
   const {userDelete} = useContext(authContext)

   useEffect(()=>{
      fetch("http://localhost:5000/users?role=seller")
      .then(res=>res.json())
      .then(data=>{
         // console.log(data)
         setAllSeller(data)
      })

   },[])

    const handleDeleteUser = (user) => {
      console.log(user);
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("delete", data);
          userDelete()
            .then(() => {
              // User deleted.
              console.log("user deleted");
            })
            .catch((error) => {
              // An error ocurred
              // ...
            });
        });
    };

  //  console.log(allSellers)

  const handleVerified =(seller) =>{

    console.log(seller.email)

    fetch(`http://localhost:5000/verifyuser/${seller.email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }




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
               <th>Verified</th>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Delete</th>
               <th>Verify Seller</th>
             </tr>
           </thead>
           <tbody>
             {allSellers?.map((item) => (
               <Seller
                 handleDeleteUser={handleDeleteUser}
                 key={item._id}
                 item={item}
                 handleVerified={handleVerified}
               ></Seller>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   );
};

export default AllSellers;