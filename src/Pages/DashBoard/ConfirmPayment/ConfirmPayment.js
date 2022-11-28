import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../Context/SharedContext";
import Loading from "../../../Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import Confirm from "./Confirm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

const ConfirmPayment = () => {
  const { user } = useContext(authContext);
  const stripePromise = loadStripe(process.env.REACT_APP_StripePK);
  const order = useLoaderData();
  console.log(order);

  console.log(stripePromise);

  

  return (
    <div className=" border-4 bg-primary p-10 flex flex-col items-center justify-center h-screen w-full">
      <div className="mb-20 space-y-5 text-white">
        <h1>Payment By Card</h1>
        <p>
          Please Pay{" "}
          <span className="ml-5 text-2xl text-secondary">{order?.price}$</span>
          for{" "}
          <span className="text-2xl text-secondary ml-5">{order?.productTitle}</span>
        </p>
      </div>
      <div className="w-1/2">
        <Elements stripe={stripePromise}>
          <Confirm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default ConfirmPayment;
