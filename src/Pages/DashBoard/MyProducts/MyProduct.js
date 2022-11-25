import React from 'react';

const MyProduct = ({item}) => {
   const {advertised,boughtYear,categoryId,categoryName,detaills,img,location,newPrice,oldPrice,paid,postedTime,title} = item;


   return (
     <tr>
       <th>
         <label>{paid ? "Sold" : "Not Sold"}</label>
       </th>
       <td>
         <div className="flex items-center space-x-3">
           <div className="avatar">
             <div className="mask mask-squircle w-12 h-12">
               <img src={img} alt="Avatar Tailwind CSS Component" />
             </div>
           </div>
           <div>
             <div className="font-bold">{title}</div>
             <div className="text-sm opacity-50">{location}</div>
           </div>
         </div>
       </td>
       <td>{categoryName}</td>
       <td>{postedTime?.split("T")[0]}</td>
       <td>{newPrice} $</td>
       <th>
         <button className="btn btn-xs">X</button>
       </th>
       <th>
         <button disabled={advertised} className=" btn btn-xs">
           Boost
         </button>
       </th>
       <th>
         <button disabled={advertised} className=" btn btn-xs">
           Edit
         </button>
       </th>
     </tr>
   );
};

export default MyProduct;