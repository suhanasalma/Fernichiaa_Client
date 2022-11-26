import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/SharedContext";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

const AddProducts = () => {
  const { user } = useContext(authContext);
  // const [receneUser, setRecentUser] = useState("");
  const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

  //   console.log(user)

  // useEffect(() => {
  //   fetch(`http://localhost:5000/users/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       setRecentUser(data);
  //     });
  // }, [user?.email]);


    const { data: receneUser ='' } = useQuery({
      queryKey: ["users", user?.email],
      queryFn: () =>
        fetch(`http://localhost:5000/users/${user?.email}`).then((res) =>
          res.json()
        ),
    });

  console.log(receneUser);

  const handleAddProducts = (data) => {
   const img = data.img[0];
   const formData = new FormData();
   formData.append("image", img);
   const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
   fetch(url, {
     method: "POST",
     body: formData,
   })
   .then(res=>res.json())
   .then(result=>{
      console.log(result);
      if (result.success) {
         const product = {
           categoryId: parseInt(data.categoryName.split(",")[1]),
           categoryName: data.categoryName.split(",")[0],
           title: data.title,
           newPrice: parseInt(data.newPrice),
           oldPrice: parseInt(data.oldPrice),
           details: data.details,
           location: data.location,
           boughtYear: parseInt(data.boughtYear),
           img: result.data.display_url,
           sellerName: receneUser.name,
           sellerEmail: receneUser.email,
           sellerImg: receneUser.img,
           sellerPhone: receneUser.phone,
           postedTime: new Date().toISOString(),
         };
    fetch("http://localhost:5000/allProducts", {
      //  method: "POST",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((successdata) => {
        console.log(successdata);
        console.log('updated')
        alert('successfully added')
      });
         
      }
   })
    
  };

  return (
    <div>
      <div className="bg-info h-40 flex justify-center items-center text-3xl my-10">
        <div className="text-center">
          <h1>Add a product and sell your item to buy a new one</h1>
        </div>
      </div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add a Product
        </h2>

        <form onSubmit={handleSubmit(handleAddProducts)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="username">
                Username
              </label>
              <input
                {...register("sellerName")}
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
                Email Address
              </label>
              <input
                {...register("sellerEmail")}
                value={receneUser?.email}
                readOnly
                required
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="password">
                Age
              </label>
              <input
                value={receneUser?.age}
                readOnly
                required
                id="age"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Phone
              </label>
              <input
                value={receneUser?.phone}
                readOnly
                required
                id="phone"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="password">
                Role
              </label>
              <input
                {...register("role")}
                value={receneUser?.role}
                readOnly
                required
                id="role"
                type="text"
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
                {...register("sellerImg")}
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
          <h1 className="my-10 text-center text-secondary">Products Details</h1>
          {/* <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"> */}

          <div className="mb-5">
            <label className="text-gray-700 dark:text-gray-200" for="username">
              Select Category
            </label>
            <select
              {...register("categoryName")}
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
              //  {...register("role", { required: true })}
            >
              <option selected value="Office Chair,5">
                Office Chair
              </option>
              <option selected value="Lounge,4">
                Lounge
              </option>
              <option selected value="Living,2">
                Living
              </option>
              <option selected value="Bedroom,1">
                Bedroom
              </option>
              <option selected value="Dining,3">
                Dining
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label className="text-gray-700 dark:text-gray-200" for="password">
              Product Name
            </label>
            <input
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
            <label className="text-gray-700 dark:text-gray-200" for="password">
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
      </section>
    </div>
  );
};

export default AddProducts;
