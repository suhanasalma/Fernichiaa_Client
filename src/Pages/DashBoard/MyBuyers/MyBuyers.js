import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../Context/SharedContext";
import Loading from "../../../Loading/Loading";
import MyBuyer from "./MyBuyer";

const MyBuyers = () => {
  const { user } = useContext(authContext);

  const {
    data: mybuyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mybuyers", user?.email],
    queryFn: () =>
      fetch(
        `https://server-side-one-beta.vercel.app/orders/mybuyers?email=${user?.email}`
      ).then((res) => res.json()),
  });

  console.log(mybuyers);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="bg-info h-40 flex justify-center items-center text-3xl">
        <div className="text-center">
          <h1>My Buyers</h1>
          {/* <p>choose your desire products</p> */}
        </div>
      </div>
      <div className="overflow-x-auto w-full  my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Status</th>
              <th>Product</th>
              <th>Seller</th>
              <th>Pickup Point</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mybuyers?.map((buyer) => (
              <MyBuyer
                key={buyer._id}
                refetch={refetch}
                buyer={buyer}
              ></MyBuyer>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
