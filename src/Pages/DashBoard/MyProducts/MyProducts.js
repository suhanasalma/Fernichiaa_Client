import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../Context/SharedContext';
import EditModal from './EditModal';
import MyProduct from './MyProduct';

const MyProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const { user } = useContext(authContext);
  const [modalInfo, setModalInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/sellProducts/${user?.email}`)
      .then((res) => res.json())
      .then(
        (data) => {
          // console.log(data);
          setMyProducts(data);
        },

      );
  }, [user?.email]);
console.log(user?.email)
  // const { data: myProducts = [] } = useQuery({
  //   queryKey: ["users", user?.email],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/sellProducts/${user?.email}`).then((res) =>
  //       res.json()
  //     ),
  // });

  const handleDeleteProduct = (deleteItem) => {
    console.log(deleteItem);
    fetch(`http://localhost:5000/products/${deleteItem._id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Successfully Deleted");
        console.log(data)});
  };

  const handleAdvertise = (adData) => {
    console.log(adData);
    fetch(`http://localhost:5000/products/boost/${adData._id}`, {
      method: "put",
    })
      .then((res) => res.json())
      .then((data) => {
        alert('added for advertise')
        console.log(data)});
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
                key={item._id}
                handleAdvertise={handleAdvertise}
                handleDeleteProduct={handleDeleteProduct}
                setModalInfo={setModalInfo}
                item={item}
              />
            ))}
          </tbody>
        </table>
        {modalInfo && <EditModal modalInfo={modalInfo} />}
      </div>
    </div>
  );
};

export default MyProducts;