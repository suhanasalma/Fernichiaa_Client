import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import BookingModal from "../BookingModal/BookingModal";
import Product from "../Product/Product";



const Products = () => {
  const products = useLoaderData();
    // const [modalInfo, setModalInfo] = useState("");
    const [modalInfo, setModalInfo] = useState(null);
    useTitle('Products')



  return (
    <div>
      <section class="bg-white ">
        <div class="lg:container px-6 py-10 mx-auto">
          <div class="flex items-center justify-between">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Sale Post
            </h1>
          </div>
          <hr class="my-8 border-gray-200 dark:border-gray-700" />
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Product
                setModalInfo={setModalInfo}
                key={product._id}
                product={product}
              ></Product>
            ))}
          </div>
        </div>
      </section>
      {modalInfo && (
        <BookingModal setModalInfo={setModalInfo} modalInfo={modalInfo} />
      )}
    </div>
  );
};

export default Products;
