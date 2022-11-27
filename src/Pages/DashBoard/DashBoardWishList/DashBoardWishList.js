import React, { useContext, useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../../Context/SharedContext';

const DashBoardWishList = ({ wishlist, refetch }) => {
  const { user } = useContext(authContext);
  const [receneUser, setReceneUser] = useState("");


  
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReceneUser(data);
      });
  }, [user?.email]);

  console.log(receneUser)

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
    sellerEmail,
    sellerPhone,
    details,
    _id,
    postedTime,
    productCode,
  } = wishlist;

  const handleDeleteWishList = (data) => {
    console.log(data.productCode);
    fetch(`http://localhost:5000/removeWishlist/${data.productCode}`, {
      method: "put",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast("remove from wishlist");
      });
  };

  const handleBookNow = (data) => {
    const order = {
      buyerName: receneUser?.name,
      buyerEmail: receneUser?.email,
      buyerAddress: receneUser?.address,
      buyerImg: receneUser?.img,
      productTitle: data?.title,
      price: data?.newPrice,
      Productimg: data?.img,
      productCode: productCode,
      sellerName: data?.sellerName,
      sellerPhone: data?.sellerPhone,
      sellerEmail: data?.sellerEmail,
      sellerImg: data?.sellerImg,
      Pickinglocation: data?.location,
      wishingId: data._id,
    };

    console.log(order);

      fetch("http://localhost:5000/transferOrder", {
      method: "post",
      headers: {
     'content-type':'application/json'
    },
       body:JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        refetch()
        toast('added to order')
      })
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
            <div className="text-sm opacity-50">{newPrice} $</div>
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
        <button onClick={() => handleBookNow(wishlist)} className="btn btn-xs">
          Book Now
        </button>
      </th>
      <th>
        <Link to={`/productDetails/${productCode}`}>
          <button className="btn btn-xs">See Deatils</button>
        </Link>
      </th>
    </tr>
  );
};;

export default DashBoardWishList;