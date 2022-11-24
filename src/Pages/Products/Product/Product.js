import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  const {
    categoryName,
    title,
    //   boughtYear,
    newPrice,
    oldPrice,
    sellerName,
    location,
    img,
    sellerImg,
    details,
    _id,
    postedTime,
    isVarified,
  } = product;
  console.log(product)

  return (
    <div className="shadow-2xl rounded-lg p-6">
      <img
        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src={img}
        alt=""
      />

      <div className="mt-8">
        <div className="flex justify-between">
          <span className="text-secondary uppercase">{categoryName}</span>
          <div className="">
            <span className="text-secondary text-xl">{newPrice}$</span>
            <span className="text-secondary text-xl line-through decoration-2 ml-2">
              {oldPrice}$
            </span>
          </div>
        </div>

        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {details?.slice(0, 100)}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-5">
            {isVarified ? (
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src={sellerImg} />
                </div>
              </div>
            ) : (
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src={sellerImg}
                alt=""
              />
            )}

            <div>
              <p
                href="#"
                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
              >
                {sellerName}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {postedTime?.split("T")[0]}
              </p>
            </div>
          </div>

          <Link
            to='/carts'
            className="inline-block text-secondary underline hover:text-blue-400"
          >
            Add To Cart
          </Link>
          <Link
            to={`/productDetails/${_id}`}
            className="inline-block text-secondary underline hover:text-blue-400"
          >
            Show Deatils
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
