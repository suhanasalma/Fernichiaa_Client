import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../../Context/SharedContext";
import useAdmin from "../../Hooks/useAdmin";
import useTitle from "../../Hooks/useTitle";
import Loading from "../../Loading/Loading";
import Header from "../../Pages/SharedPages/Header/Header";

const DashboardLayer = () => {
  const { user } = useContext(authContext);
  const [currentUser, serCurrentUser] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isAdmin] = useAdmin(user?.email);
  useTitle("Dashboard");

  console.log(user);

  useEffect(() => {
    fetch(`https://server-side-one-beta.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        serCurrentUser(data);
        setLoading(false);
      });
  }, [user?.email]);

  // const { data: currentUser = [], isLoading } = useQuery({
  //   queryKey: ["currentUser", user?.email],
  //   queryFn: () =>
  //     fetch(`https://server-side-one-beta.vercel.app/users/${user?.email}`).then((res) =>
  //       res.json()
  //     ),
  // });

  console.log(currentUser);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Header></Header>

      <div className="drawer drawer-mobile border ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-10 ">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side mx-10 ">
          <label htmlFor="my-drawer-2 " className="drawer-overlay "></label>
          <div className="flex flex-col w-64 h-screen py-8 border-r bg-white ">
            <h2 className="text-3xl font-semibold uppercase text-center text-gray-800 ">
              {currentUser?.role}
            </h2>

            <div className="flex flex-col items-center mt-6 -mx-2">
              {currentUser?.isVarified ? (
                <div className="avatar online">
                  <div className="object-cover w-24 h-24 mx-2 rounded-full">
                    <img src={currentUser?.img} />
                  </div>
                </div>
              ) : (
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={currentUser?.img}
                  alt=""
                />
              )}
              <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                {currentUser?.name}
              </h4>
              <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                {currentUser?.email}
              </p>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                {isAdmin && (
                  // currentUser?.role !== "seller" &&
                  <>
                    <Link
                      to="/dashboard/allbuyers"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform  hover:bg-gray-200   hover:text-gray-700"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="mx-4 font-medium">All Buyers</span>
                    </Link>

                    <Link
                      to="/dashboard/allsellers"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform  hover:bg-gray-200   hover:text-gray-700"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="mx-4 font-medium">All Sellers</span>
                    </Link>
                  </>
                )}
                {currentUser?.role === "user" && (
                  <>
                    <Link
                      to="/dashboard/wishlist"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform hover:bg-gray-200  hover:text-gray-700"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="mx-4 font-medium">WishList</span>
                    </Link>
                    <Link
                      to="/dashboard/myorders"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform hover:bg-gray-200  hover:text-gray-700"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="mx-4 font-medium">My Orders</span>
                    </Link>
                  </>
                )}
                {currentUser?.role === "seller" && (
                  <>
                    {/* <Link
                      to="/dashboard/mybuyers"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform  hover:bg-gray-200   hover:text-gray-700"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="mx-4 font-medium">My Buyers</span>
                    </Link> */}

                    <Link
                      to="/dashboard/myproducts"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform hover:bg-gray-200  hover:text-gray-700"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="mx-4 font-medium">My Products</span>
                    </Link>
                    <Link
                      to="/dashboard/addproducts"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="mx-4 font-medium">Add a Products</span>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayer;
