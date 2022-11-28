import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authContext } from "../../../Context/SharedContext";
import Loading from "../../../Loading/Loading";
import EditModal from "./EditModal";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  // const [myProducts, setMyProducts] = useState([]);
  const { user } = useContext(authContext);
  const [modalInfo, setModalInfo] = useState(null);

  // useEffect(() => {
  //   fetch(`https://server-side-one-beta.vercel.app/sellProducts/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setMyProducts(data);
  //     });
  // }, [user?.email]);
  // console.log(user?.email);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellProducts", user?.email],
    queryFn: () =>
      fetch(
        `https://server-side-one-beta.vercel.app/sellProducts/${user?.email}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteProduct = (deleteItem) => {
    console.log(deleteItem);
    fetch(
      `https://server-side-one-beta.vercel.app/products/${deleteItem._id}`,
      {
        method: "delete",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast("successfully deleted");
        refetch();
        console.log(data);
      });
  };

  const handleAdvertise = (adData) => {
    console.log(adData);
    fetch(
      `https://server-side-one-beta.vercel.app/products/boost/${adData._id}`,
      {
        method: "put",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // alert("added for advertise");
        toast("added for advertise");
        refetch();
        console.log(data);
      });
  };

  return (
    <div>
      <div className="bg-info h-40 flex justify-center items-center text-3xl my-10">
        <div className="text-center">
          <h1>Product on Sell List</h1>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sold</th>
              <th>In Addvertise</th>
              <th>Name</th>
              <th>Category</th>
              <th>Post Date</th>
              <th>Sale Price</th>
              <th>Delete</th>
              <th>Advertise</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((item) => (
              <MyProduct
                refetch={refetch}
                key={item._id}
                handleAdvertise={handleAdvertise}
                handleDeleteProduct={handleDeleteProduct}
                setModalInfo={setModalInfo}
                item={item}
              />
            ))}
          </tbody>
        </table>
        {modalInfo && (
          <EditModal
            setModalInfo={setModalInfo}
            refetch={refetch}
            modalInfo={modalInfo}
          />
        )}
      </div>
    </div>
  );
};

export default MyProducts;
