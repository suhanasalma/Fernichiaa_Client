import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import BookingModal from "../../../Products/BookingModal/BookingModal";
import Product from "../../../Products/Product/Product";

const Advertisements = () => {
  const [adervertises, setAdvertised] = useState([]);
     const [modalInfo, setModalInfo] = useState(null);
       useTitle("Advertisement");


  useEffect(() => {
    fetch("http://localhost:5000/allProducts/advertise")
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data)
        setAdvertised(data.result);
      });
  }, []);

  return (
    <div className=" mx-10">
      {adervertises?.length ? (
        <div className=" my-40">
          <div className="w-1/2 mx-auto mb-20 text-center">
            <h1 className="text-4xl text-secondary mb-5">
              Advertisement Products
            </h1>
            <p>
              you can look for your products.we always try to maintain quality
              of used products just because this is second hand page you won't
              get anything bad quality products
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {adervertises?.slice(0, 3).map((product) => (
              <Product
                setModalInfo={setModalInfo}
                key={product._id}
                product={product}
              ></Product>
            ))}
          </div>
          {adervertises?.length > 3 ? (
            <div className="text-center">
              <Link to="/allProducts/advertise">
                <button className="btn btn-lg hover:text-secondary bg-secondary border-0 text-white mt-10">
                  See All
                </button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="uppercase text-4xl flex justify-center items-center text-secondary my-20" >
          <h1>Right now nothing is available For Advertise</h1>
        </div>
      )}

      {modalInfo && (
        <BookingModal setModalInfo={setModalInfo} modalInfo={modalInfo} />
      )}
    </div>
  );
};

export default Advertisements;
