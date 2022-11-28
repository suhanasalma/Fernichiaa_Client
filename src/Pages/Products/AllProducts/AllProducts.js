import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import BookingModal from "../BookingModal/BookingModal";
import Product from "../Product/Product";

const AllProducts = () => {
  // const allProducts = useLoaderData()
  const [allProducts, setAllProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const limit = 6;
  const [modalInfo,setModalInfo] = useState('')
  useTitle('ALl Products')
  // const page =count/limit

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts?page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.result);
        setCount(data.count);
      });
  }, [page, limit]);


  console.log(allProducts);

  const pages = Math.ceil(count / limit);

  return (
    <>
      <div className="bg-info h-40 flex justify-center items-center text-3xl mx-10">
        <div className="text-center">
          <h1>All Products</h1>
          <p>choose your desire products</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-20">
        {allProducts?.map((product) => (
          <Product
            setModalInfo={setModalInfo}
            key={product._id}
            product={product}
          ></Product>
        ))}
        {/* <h1>{page}</h1> */}
      </div>
      <div className="flex justify-center space-x-1 text-gray-100 my-20">
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            type="button"
            title="Page 1"
            className="inline-flex items-center justify-center w-8 h-8 text-lg ml-3 font-semibold border rounded shadow-md bg-slate-100 text-secondary border-secondary"
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
      {modalInfo && (
        <BookingModal setModalInfo={setModalInfo} modalInfo={modalInfo} />
      )}
    </>
  );
};

export default AllProducts;
