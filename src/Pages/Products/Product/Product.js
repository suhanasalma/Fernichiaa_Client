import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import BookingModal from "../../SharedPages/BookingModal/BookingModal";

const Product = ({ product }) => {
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
  } = product;

  console.log(product.wishlist)

  const handleWishList = () =>{
    console.log('added')
    fetch(`http://localhost:5000/allProducts/${_id}`,{
      method:"PUT"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

  
  

  return (
    <div className="shadow-2xl rounded-lg p-6">
      <img
        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src={img}
        alt=""
      />

      <div className="mt-8">
        <div className="flex justify-between">
          <button
            disabled={product?.wishlist}
            onClick={handleWishList}
            className="btn text-secondary uppercase underline"
          >
            WishList
          </button>
          <div className="">
            <span className="text-secondary text-xl">{newPrice}$</span>
            <span className="text-secondary text-xl line-through decoration-2 ml-2">
              {oldPrice}$
            </span>
          </div>
        </div>

        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {details?.slice(0, 100)}...
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-5">
            {isVarified ? (
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src={sellerImg} />
                </div>
              </div>
            ) : (
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src={sellerImg}
                alt=""
              />
            )}

            <div>
              <p
                href="#"
                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
              >
                {sellerName}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {postedTime?.split("T")[0]}
              </p>
            </div>
          </div>

          {/* <Link
            // to="/wishlists"
            className="inline-block text-secondary underline hover:text-blue-400"
          >
            Book Now
          </Link> */}
          <label
            htmlFor="BookNow"
            className="inline-block text-secondary underline hover:text-blue-400"
          >
            Book Now
          </label>
          <Link
            to={`/productDetails/${_id}`}
            className="inline-block text-secondary underline hover:text-blue-400"
          >
            Show Deatils
          </Link>
        </div>
      </div>
      <BookingModal />
    </div>
    // <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
    //   <img
    //     class="object-cover object-center w-full h-56"
    //     src={img}
    //     alt="avatar"
    //   />

    //   <div class="flex items-center px-6 py-3 bg-gray-700">
    //     <h1 class="mx-3 text-lg font-semibold text-white">{title}</h1>
    //   </div>

    //   <div class="px-6 py-4">
    //     {/* <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
    //       Patterson johnson
    //     </h1>

    //     <p class="py-2 text-gray-700 dark:text-gray-400">
    //       Full Stack maker & UI / UX Designer , love hip hop music Author of
    //       Building UI.
    //     </p> */}

    //     <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
    //       <svg
    //         aria-label="suitcase icon"
    //         class="w-6 h-6 fill-current"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M14 11H10V13H14V11Z" />
    //         <path
    //           fill-rule="evenodd"
    //           clip-rule="evenodd"
    //           d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
    //         />
    //       </svg>

    //       <h1 class="px-2 text-sm">{newPrice} $</h1>
    //     </div>

    //     <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
    //       <svg
    //         aria-label="location pin icon"
    //         class="w-6 h-6 fill-current"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           clip-rule="evenodd"
    //           d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
    //         />
    //         <path
    //           fill-rule="evenodd"
    //           clip-rule="evenodd"
    //           d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
    //         />
    //       </svg>

    //       <h1 class="px-2 text-sm">{location}</h1>
    //     </div>

    //     <div class="flex items-center justify-between mt-4 text-gray-700">
    //       <button className="btn btn-sm hover:text-secondary bg-secondary border-0 text-white">
    //         Cart
    //       </button>
    //       <button className="btn btn-sm hover:text-secondary bg-secondary border-0 text-white">
    //         WishList
    //       </button>
    //       <button className="btn btn-sm hover:text-secondary bg-secondary border-0 text-white">
    //         Details
    //       </button>
    //       <Link to={`/productDetails/${_id}`}>
    //         <button className="btn btn-sm hover:text-secondary bg-secondary border-0 text-white">
    //           Details
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Product;
