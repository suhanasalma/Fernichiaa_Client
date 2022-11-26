import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
  const products = useLoaderData();



  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="flex items-center justify-between">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Sale Post
            </h1>
          </div>
          <hr class="my-8 border-gray-200 dark:border-gray-700" />
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
