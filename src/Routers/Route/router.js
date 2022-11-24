import Products from "../../Pages/Products/Products/Products";
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
        loader : ({params})=>
         fetch(`http://localhost:5000/categories/${params.id}`)
        ,
        element: <Products />,
      },
    ],
  },
]);