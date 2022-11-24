import React from "react";
import { Link } from "react-router-dom";
import img from "../../../Assets/Logo/Sofa.svg";

const Header = () => {


  const menus = [
    <li>
      <Link to="/">Home</Link>
    </li>,
    <li>
      <Link to="/allProducts/advertise">Advertise Products</Link>
    </li>,
    <li>
      <Link to="/allproducts">Products</Link>
    </li>,
    <li>
      <Link>Login</Link>
    </li>,
  ];



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
              <h1 className="uppercase">refernichaia</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menus}</ul>
      </div>
      <div className="navbar-end">
        <Link>Dashboard</Link>
      </div>
    </div>
  );
};

export default Header;
