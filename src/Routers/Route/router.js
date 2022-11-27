import ProductDetails from "../../Pages/Products/ProductDetails/ProductDetails";
import Products from "../../Pages/Products/Products/Products";
import AllProducts from "../../Pages/Products/AllProducts/AllProducts";
import AllAdvertisements from "../../Pages/AllAdvertisements/AllAdvertisements";
import LogIn from "../../Pages/Login/LogIn/LogIn";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import DashboardLayer from "../../Layer/DashboardLayer/DashboardLayer";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import AddProducts from "../../Pages/DashBoard/AddProducts/AddProducts";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import DashBoardWishlists from "../../Pages/DashBoard/DashBoardWishList/DashBoardWishlists";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layer/Main/Main");
const { default: Home } = require("../../Pages/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/products/${params.id}`),
        element: <Products />,
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productDetails/${params.id}`),
        element: <ProductDetails />,
      },
      {
        path: "/allproducts",
        // loader: () => fetch(`http://localhost:5000/allProducts`),
        element: <AllProducts />,
      },
      {
        path: "/allProducts/advertise",
        element: <AllAdvertisements />,
      },
      // {
      //   path: "/wishlists",
      //   element: <WishLists />,
      // },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayer />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers />,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers />,
      },
      {
        path: "/dashboard/mybuyers",
        element: <MyBuyers />,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/addproducts",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/wishlist",
        element: <DashBoardWishlists></DashBoardWishlists>,
      },
    ],
  },
]);