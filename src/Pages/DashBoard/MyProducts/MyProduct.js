import React from 'react';

const MyProduct = ({
  item,
  handleDeleteProduct,
  handleEditItem,
  handleAdvertise,
  setModalInfo,
  refetch,
}) => {
  const {
    advertised,
    boughtYear,
    categoryId,
    categoryName,
    detaills,
    img,
    location,
    newPrice,
    oldPrice,
    paid,
    postedTime,
    title,
  } = item;

  return (
    <tr>
      <th>
        <label>{paid ? "Sold" : "Not Sold"}</label>
      </th>
      <th>
        <label>{advertised ? "Boosting" : "Boost"}</label>
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
      <td>{newPrice}</td>
      <th>
        <button
          onClick={() => handleDeleteProduct(item)}
          className="btn btn-xs"
        >
          X
        </button>
      </th>
      <th>
        <button
          onClick={() => handleAdvertise(item)}
          disabled={advertised}
          className=" btn btn-xs"
        >
          Boost
        </button>
      </th>
      <th>
        <label
          onClick={() => setModalInfo(item)}
          // onClick={() => handleEditItem(item)}
          // disabled={advertised}
          htmlFor="my-modal-3"
          className=" btn btn-xs"
        >
          Edit
        </label>
      </th>
    </tr>
  );
};

export default MyProduct;