import React, { useEffect, useState } from "react";
import Product from "../../../Products/Product/Product";

const Advertisements = () => {
  const [adervertises, setAdvertised] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts/advertise")
      .then((res) => res.json())
      .then((data) => setAdvertised(data));
  }, []);

  console.log(adervertises);

  return (
    <div className="">
      {adervertises.length ? (
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
            {adervertises.map((product) => (
              <Product product={product}></Product>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Advertisements;
