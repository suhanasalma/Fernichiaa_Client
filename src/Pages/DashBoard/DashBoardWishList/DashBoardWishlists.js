import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/SharedContext";
import Loading from "../../../Loading/Loading";
import DashBoardWishList from "./DashBoardWishList";

const DashBoardWishlists = () => {
  // const [wishlists, setWishlists] = useState([]);
  // const [isloading, setIsLoading] = useState(true);
  const { user } = useContext(authContext);
  // console.log(user);

  // useEffect(() => {
  //   fetch(`https://server-side-one-beta.vercel.app/wishlists?email=${user?.email}`, {
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem("furniture-token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setWishlists(data);
  //       setIsLoading(false);
  //     });
  // }, [user?.email]);

  const {
    data: wishlists = [],
    isloading,
    refetch,
  } = useQuery({
    queryKey: ["wishlists", user?.email],
    queryFn: () =>
      fetch(
        `https://server-side-one-beta.vercel.app/wishlists?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("furniture-token")}`,
          },
        }
      ).then((res) => res.json()),
  });

  //  console.log(wishlists)
  console.log(user?.email)

  if (isloading) {
    return <Loading />;
  }

  //  console.log(wishlists);

  return (
    <div className="mb-20">
      <div className="bg-info h-40 flex justify-center items-center text-3xl mb-20">
        <div className="text-center">
          <h1>WishLists</h1>
          <p>want to add more?</p>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Delete</th>
                <th>Product</th>
                <th>Pick Up</th>
                <th>Action</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {wishlists?.map((wishlist) => (
                <DashBoardWishList
                  refetch={refetch}
                  key={wishlist._id}
                  wishlist={wishlist}
                ></DashBoardWishList>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoardWishlists;
