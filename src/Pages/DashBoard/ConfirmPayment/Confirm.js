import React, { useContext, useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { authContext } from "../../../Context/SharedContext";
import { async } from "@firebase/util";

const Confirm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const { user } = useContext(authContext);
  const {
    Pickinglocation,

    Productimg,
    buyerAddress,

    buyerEmail,

    buyerName,

    price,

    productCode,

    productTitle,

    sellerEmail,

    sellerImg,
    sellerName,

    sellerPhone,

    _id,
  } = order;
  console.log(price);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://server-side-one-beta.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `bearer ${localStorage.getItem("dotorToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      setSuccess("Thank you, your payment done");
      setTransectionId(paymentIntent.id);

      const confirmPayment = {
        price,
        productCode,
        transectionId: paymentIntent.id,
        buyerEmail,
        sellerEmail,
        orderId: _id,
      };
      console.log(confirmPayment);

      fetch("https://server-side-one-beta.vercel.app/payments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(confirmPayment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    console.log("paymentIntent", paymentIntent);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#ffffff",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn bg-secondary text-white border-0 w-full my-10 text-lg"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      <p className="text-red-700 font-bold">{cardError}</p>
      {success && (
        <>
          <p className="text-center text-white mb-10 font-bold text-2xl">
            {success}
          </p>
          <p className="text-center text-white font-bold text-2xl">
            Your Transection id:{" "}
            <span className="text-secondary">{transectionId}</span>
          </p>
        </>
      )}
    </form>
  );
};

export default Confirm;
