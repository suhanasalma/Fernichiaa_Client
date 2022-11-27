import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authContext } from "../../../Context/SharedContext";
import Loading from "../../../Loading/Loading";
import Buyer from "./Buyer";

const AllBuyers = () => {
  // const [allbuyer, setAllBuyer] = useState([]);
  // const { userDelete } = useContext(authContext);

  // useEffect(() => {
  //   fetch("http://localhost:5000/users?role=user")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       setAllBuyer(data);
  //     });
  // }, []);

  const {
    data: allbuyer = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allbuyer"],
    queryFn: () =>
      fetch("http://localhost:5000/users?role=user").then((res) => res.json()),
  });

  if(isLoading){
    return <Loading/>
  }



  const handleDeleteUser = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delete", data);
        toast('user deleted success')
        refetch()
        // userDelete()
        //   .then(() => {
        //     // User deleted.
        //     console.log("user deleted");
        //     // refetch()
        //     toast('successfully user deleted')
        //   })
        //   .catch((error) => {
        //     // An error ocurred
        //     // ...
        //   });
      });
  };

  return (
    <div>
      <div className="bg-info h-40 flex justify-center items-center text-3xl my-10">
        <div className="text-center">
          <h1>All Buyers Lists</h1>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allbuyer?.map((item) => (
              <Buyer
                handleDeleteUser={handleDeleteUser}
                key={item._id}
                item={item}
              ></Buyer>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;