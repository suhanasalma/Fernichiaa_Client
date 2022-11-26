import React from 'react';

const Buyer = ({ item, handleDeleteUser }) => {
  const { name, address, age, email, img, isVarified, phone } = item;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{address}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <th>
        <button onClick={() => handleDeleteUser(item)} className="btn btn-xs">
          X
        </button>
      </th>
    </tr>
  );
};

export default Buyer;