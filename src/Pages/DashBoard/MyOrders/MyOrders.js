import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from "../../../Context/SharedContext";
import Loading from '../../../Loading/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
  const {user} = useContext(authContext)


    const { data: myorders = [], isLoading,refetch } = useQuery({
      queryKey: ["myorders", user?.email],
      queryFn: () =>
        fetch(`http://localhost:5000/orders/myorder?email=${user?.email}`).then(
          (res) => res.json()
        ),
    });

    console.log(myorders)

    if(isLoading){
      return <Loading/>
    }
  


   return (
     <div>
       <div className="bg-info h-40 flex justify-center items-center text-3xl my-10">
         <div className="text-center">
           <h1>My Orders</h1>
         </div>
       </div>
       <div className="overflow-x-auto w-full">
         <table className="table w-full">
           <thead>
             <tr>
               <th>Status</th>
               <th>Product</th>
               <th>Seller</th>
               <th>PickUp Location</th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             {myorders.map((order) => (
               <MyOrder
                 key={order._id}
                 refetch={refetch}
                 order={order}
               ></MyOrder>
             ))}
           </tbody>
         </table>
       </div>
       <div className="text-right my-10">
         <button className="btn lg:w-96 text-white text-xl border-0 bg-secondary">
           Pay
         </button>
       </div>
     </div>
   );
};

export default MyOrders;