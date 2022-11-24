import ProductDetails from "../../Pages/Products/ProductDetails/ProductDetails";
import Products from "../../Pages/Products/Products/Products";
import Carts from '../../Pages/Carts/Carts/Carts'
import AllProducts from "../../Pages/Products/AllProducts/AllProducts";
import AllAdvertisements from "../../Pages/AllAdvertisements/AllAdvertisements";
import WishLists from "../../Pages/WishLists/WishLists";

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
          fetch(`http://localhost:5000/categories/${params.id}`),
        element: <Products />,
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productDetails/${params.id}`),
        element: <ProductDetails />,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/allproducts",
        loader: () => fetch(`http://localhost:5000/allProducts`),
        element: <AllProducts />,
      },
      {
        path: "/allProducts/advertise",
        element:<AllAdvertisements/>
      },
      {
        path:'/carts',
        element:<Carts/>
      },
      {
        path:'/wishlists',
        element:<WishLists/>
      }

    ],
  },
]);