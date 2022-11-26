import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../Context/SharedContext';

const BookingModal = ({ product, modalInfo, setModalInfo }) => {
  const { user } = useContext(authContext);
  const [currentUser, setCurrentUser] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [user?.email]);

  // console.log(currentUser)

  console.log(modalInfo);
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
  } = modalInfo;




  // console.log(modalInfo.title);

  const handleBooking = (data) => {
    // console.log(data);
    console.log(modalInfo.title);
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="bookModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalInfo([])}
            htmlFor="bookModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Confirm Payment</h3>
          <form onSubmit={handleSubmit(handleBooking)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="username"
                >
                  Username
                </label>
                <input
                  {...register("buyerName")}
                  //  placeholder={receneUser[0]?.name}
                  value={currentUser.name}
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
                  Email Address
                </label>
                <input
                  {...register("buyerEmail")}
                  value={currentUser?.email}
                  readOnly
                  required
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Phone
                </label>
                <input
                  value={currentUser?.phone}
                  {...register("buyerPhone")}
                  readOnly
                  required
                  id="phone"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Photo
                </label>
                <input
                  {...register("buyerImg")}
                  value={currentUser?.img}
                  readOnly
                  required
                  id="img"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
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
                {...register("productTitle")}
                value={title}
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
                Buying Price
              </label>
              <input
                {...register("oldPrice")}
                placeholder="120$"
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
                Buying Year
              </label>
              <input
                {...register("boughtYear")}
                placeholder="2018"
                required
                id="boughtYear"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="password"
              >
                Selling Price
              </label>
              <input
                {...register("newPrice")}
                placeholder="70$"
                required
                id="newPrice"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-5">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Products Details
              </label>
              <textarea
                {...register("details")}
                required
                placeholder="This was bought 3 year ago, now we are shifting our house so we are bu…"
                id="details"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                {...register("location")}
                placeholder="Dhaka"
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
                Product Image
              </label>
              <input
                {...register("img")}
                required
                id="img"
                type="file"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
    </>
  );
};

export default BookingModal;