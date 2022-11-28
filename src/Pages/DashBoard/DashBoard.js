import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/SharedContext";
import Loading from "../../Loading/Loading";
import AddProducts from "./AddProducts/AddProducts";
import AllSellers from "./AllSellers/AllSellers";
import DashBoardWishlists from "./DashBoardWishList/DashBoardWishlists";

const DashBoard = () => {
  const { user } = useContext(authContext);
  const [currentUser, serCurrentUser] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://server-side-one-beta.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        serCurrentUser(data);
        setLoading(false);
      });
  }, [user?.email]);

  if(isLoading){
    return <Loading></Loading>
  }

  // console.log(currentUser)
  return (
    <div className="bg-info h-screen w-full flex justify-center items-center">
      <div className="text-4xl">
        <h1>
          <h1>Welcome To DashBoard</h1>
        </h1>
        <p>This is where you can controll your activities</p>
      </div>
    </div>
  );
};

export default DashBoard;
