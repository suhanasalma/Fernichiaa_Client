import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardWishList = ({ wishlist }) => {
  const {
    categoryName,
    title,
    //   boughtYear,
    newPrice,
    oldPrice,
    sellerName,
    location,
    img,
    sellerImg,
    details,
    _id,
    postedTime,
    productCode,
  } = wishlist;

  const handleDeleteWishList = data =>{
    console.log(data.productCode);
     fetch(`http://localhost:5000/removeWishlist/${data.productCode}`, {
       method: "put",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
        
       });

        fetch(`http://localhost:5000/wishlists/${data._id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });


    



    
  }


  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteWishList(wishlist)}
          className="btn btn-xs"
        >
          X
        </button>
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
            <div className="text-sm opacity-50">{oldPrice} $</div>
          </div>
        </div>
      </td>
      <td>
        {location}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <th>
        <button className="btn btn-xs">Book Now</button>
      </th>
      <th>
        <Link to={`/productDetails/${productCode}`}>
          <button className="btn btn-xs">See Deatils</button>
        </Link>
      </th>
    </tr>
  );
};

export default DashBoardWishList;