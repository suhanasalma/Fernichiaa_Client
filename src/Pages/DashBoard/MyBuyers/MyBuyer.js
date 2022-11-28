import React from "react";
import { toast } from "react-toastify";

const MyBuyer = ({ refetch, buyer }) => {
  console.log(buyer);

  const {
    Productimg,
    buyerAddress,
    buyerEmail,
    buyerImg,
    buyerName,
    price,
    productCode,
    productTitle,
    Pickinglocation,
  } = buyer;

  const handleOrderDelete = (data) => {
    console.log(data.productCode);
    // console.log(`/orders/myorder/delete/${data._id}`)

    fetch(
      `https://server-side-one-beta.vercel.app/orders/myorder/delete/${data._id}`,
      {
        method: "delete",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast("deleted from order");
        console.log(data);
      });
  };

  return (
    <tr>
      <th>
        <label>{buyer?.booked ? "Paid" : "Non Paid"}</label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={Productimg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{productTitle}</div>
            <div className="text-sm opacity-50">{price}$</div>
          </div>
        </div>
      </td>
      <td>
        {buyerName}
        <br />
        <span className="badge badge-ghost badge-sm">{buyerEmail}</span>
      </td>
      <td>{Pickinglocation}</td>
      <th>
        {buyer?.booked ? (
          <button className="btn btn-xs">Details</button>
        ) : (
          <button
            onClick={() => handleOrderDelete(buyer)}
            className="btn btn-xs"
          >
            X
          </button>
        )}
      </th>
    </tr>
  );
};

export default MyBuyer;
