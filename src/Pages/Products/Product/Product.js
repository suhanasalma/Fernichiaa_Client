import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/SharedContext";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading/Loading";

const Product = ({ product, setModalInfo }) => {
  const { user } = useContext(authContext);

  const {
    data: currentUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: () =>
      fetch(
        `https://server-side-one-beta.vercel.app/users/${user?.email}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const {
    categoryName,
    title,
    boughtYear,
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
    categoryId,
    sellerEmail,
    sellerPhone,
  } = product;

  const handleWishList = () => {
    const wishlist = {
      categoryName,
      categoryId,
      title,
      details,
      newPrice,
      sellerName,
      sellerEmail,
      location,
      img,
      sellerImg,
      sellerPhone,
      wishingEmail: currentUser?.email,
      productCode: _id,
    };

    fetch("https://server-side-one-beta.vercel.app/addwishlists", {
      //  method: "POST",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        toast("product added to wishlist");
      });
  };

  return (
    <div className="shadow-2xl rounded-lg p-6">
      <img
        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src={img}
        alt=""
      />

      <div className="mt-8">
        <div className="flex justify-between">
          {user?.uid ? (
            <button
              disabled={product?.paid}
              onClick={handleWishList}
              className="btn text-secondary uppercase"
            >
              WishList
            </button>
          ) : (
            <Link to="/login" className="btn text-secondary uppercase">
              WishList
            </Link>
          )}
          <p> Bought in {boughtYear}</p>
          <div className="flex sm:flex-col items-center justify-center lg:flex-row">
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
          {details?.slice(0, 100)}...
        </p>

        <div className="flex lg:flex-row sm:flex-col gap-10 sm:mt-10 items-center justify-between mt-4">
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
          {user?.uid ? (
            <label
              disabled={product?.paid}
              onClick={() => setModalInfo(product)}
              htmlFor="my-modal-4"
              className="btn text-secondary uppercase"
            >
              Book Now
            </label>
          ) : (
            <Link to="/login" className="btn text-secondary uppercase">
              Book Now
            </Link>
          )}
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
