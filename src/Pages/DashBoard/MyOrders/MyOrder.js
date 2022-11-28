import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyOrder = ({ order, refetch }) => {
  // console.log(order);
  const {
    Pickinglocation,
    Productimg,
    price,
    productTitle,
    sellerEmail,
    sellerName,
    sellerImg,
    sellerPhone,
    _id,
  } = order;

  console.log(order);

  // const { data: products } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () => fetch("https://server-side-one-beta.vercel.app/products")
  //   .then(res=>res.json)
  // });

  // console.log(products)

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
        <label>{order?.paid ? "Paid" : "Non Paid"}</label>
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
        {sellerName}
        <br />
        <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
      </td>
      <td>{Pickinglocation}</td>
      <th>
        <button
          disabled={order?.paid}
          onClick={() => handleOrderDelete(order)}
          className="btn btn-xs"
        >
          X
        </button>
      </th>
      <th>
        <Link to={`/dashboard/confirmpayment/${_id}`}>
          <button disabled={order?.paid} className="btn btn-xs">
            Pay
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default MyOrder;
