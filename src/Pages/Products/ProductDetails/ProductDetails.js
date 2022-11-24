import React from "react";
import { useLoaderData } from "react-router-dom";



const ProductDetails = () => {
  const productDetails = useLoaderData();
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
    sellerEmail,
    details,
    _id,
    postedTime,
    isVarified,
  } = productDetails;

  return (
    <div>
      <div className="bg-info h-40 flex justify-center items-center text-3xl">
        <div className="text-center">
          <h1>{title}</h1>
          <p>{categoryName}</p>
        </div>
      </div>

      <div class="mt-20 container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center ">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              {title}
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-300">{details}</p>
            <div class="grid gap-6 mt-8 sm:grid-cols-2">
              <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3">Brought Year: {boughtYear}</span>
              </div>

              <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3">Sell: {postedTime?.split("T")[0]}</span>
              </div>

              <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3">Buying price {oldPrice}$</span>
              </div>

              <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3">Selling Price {newPrice}$</span>
              </div>

              <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3">Pick from {location}</span>
              </div>

              <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3">Contact with me</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full h-screen lg:w-1/2">
          <img
            class="object-cover w-full h-3/6 max-w-2xl rounded-md"
            src={img}
            alt="glasses photo"
          />
        </div>
      </div>

      <div>
        <div className="space-y-6 py-10">
          <h1 className="text-5xl">Seller Information</h1>
          <div>
            <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                class="object-cover w-full h-56"
                src={sellerImg}
                alt="avatar"
              />

              <div class="py-5 text-center">
                <p
                  class="block text-2xl font-bold text-gray-800 dark:text-white"
                  tabindex="0"
                  role="link"
                >
                  {sellerName}
                </p>
                <span class="text-sm text-gray-700 dark:text-gray-200">
                  {sellerEmail}
                </span>
                <br />
                <span class="text-sm text-gray-700 dark:text-gray-200">
                  {isVarified ? "Verfied Seller" : "Not Verified"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
