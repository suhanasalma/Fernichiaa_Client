import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../../Context/SharedContext';

const BookingModal = ({ modalInfo }) => {
   const {user} = useContext(authContext)
   const [receneUser, setReceneUser] = useState("");
     const { register, handleSubmit } = useForm();


   useEffect(() => {
     fetch(`http://localhost:5000/users/${user?.email}`)
       .then((res) => res.json())
       .then((data) => {
         setReceneUser(data);
       });
   }, [user?.email]);

  


   // console.log(modalInfo);
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
     categoryId,
     sellerEmail,
     sellerPhone,
   } = modalInfo;

   const handleBooking = data =>{
      console.log(data);
   }

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1>Buyer Information</h1>
          <form onSubmit={handleSubmit(handleBooking)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="username"
                >
                  Name
                </label>
                <input
                  {...register("buyerName")}
                  //  placeholder={receneUser[0]?.name}
                  value={receneUser.name}
                  readOnly
                  required
                  //  placeholder={receneUser?.name}
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Email
                </label>
                <input
                  {...register("buyerEmail")}
                  value={receneUser?.email}
                  readOnly
                  required
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Address
                </label>
                <input
                  {...register("buyerAddress")}
                  value={receneUser?.address}
                  readOnly
                  required
                  id="address"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Photo
                </label>
                <input
                  {...register("buyerImg")}
                  value={receneUser?.img}
                  readOnly
                  required
                  id="img"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            {/* //product details */}
            <h1 className="my-10 text-center text-secondary">
              Products Details
            </h1>
            {/* <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"> */}

            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="password"
              >
                Product Name
              </label>
              <input
                value={title}
                {...register("title")}
                placeholder="Josefa Queen Size Bed"
                required
                id="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Price
              </label>
              <input
                {...register("oldPrice")}
                placeholder="120$"
                value={`${newPrice}$`}
                required
                id="oldPrice"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Product Image
              </label>
              <input
                {...register("Productimg")}
                required
                value={img}
                id="img"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <h1>Seller Information</h1>
            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Name
              </label>
              <input
                {...register("sellerName")}
                value={sellerName}
                required
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-secondary focus:ring-secondary focus:ring-opacity-40 dark:focus:border-secondary focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Contact No
              </label>
              <input
                {...register("sellerPhone")}
                value={sellerPhone}
                required
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-secondary focus:ring-secondary focus:ring-opacity-40 dark:focus:border-secondary focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Location to pick up
              </label>
              <input
                {...register("Pickinglocation")}
                value={location}
                required
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-secondary focus:ring-secondary focus:ring-opacity-40 dark:focus:border-secondary focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Email
              </label>
              <input
                {...register("sellerEmail")}
                value={sellerEmail}
                required
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-secondary focus:ring-secondary focus:ring-opacity-40 dark:focus:border-secondary focus:outline-none focus:ring"
              />
            </div>
            {/* </div> */}
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;