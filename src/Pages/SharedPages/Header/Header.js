import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../Assets/Logo/Sofa.svg";
import { authContext } from "../../../Context/SharedContext";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  const navigate = useNavigate()

  const signOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const menus = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/allProducts/advertise">Advertise Products</Link>
      </li>

      <li>
        <Link to="/allproducts">Products</Link>
      </li>

      {user?.uid ? (
        <>
          {/* <li>
            <Link to="/wishlists">WishList</Link>
          </li> */}
          <li onClick={signOut}>
            <Link>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <div className="flex-1">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img className="w-16" src={img} alt="" />
              <h1 className="uppercase text-xl">refernichiaa</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menus}</ul>
      </div>
      {user?.uid && (
        <div className="navbar-end gap-5">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard">{user.displayName}</Link>
        </div>
      )}
      <label htmlFor="my-drawer-2" className=" lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
