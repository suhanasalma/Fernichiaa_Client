import React from 'react';

const Wishlist = ({ wishlist }) => {
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
   } = wishlist;
  return (
    <tr>
      <th>
        <button className="btn btn-xs">X</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
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
        <button className="btn btn-xs">See Deatils</button>
      </th>
    </tr>
  );
};

export default Wishlist;