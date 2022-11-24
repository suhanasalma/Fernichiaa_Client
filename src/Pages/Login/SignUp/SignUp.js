import React, { useContext, useState } from 'react';
import img from '../../../Assets/logUp/1.jpg'
import { useForm } from "react-hook-form";
import { authContext } from '../../../Context/SharedContext';
import { Link } from 'react-router-dom';

const SignUp = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
   const formData = new FormData();


   const {createUser} = useContext(authContext)

   // const [data,setData] = useState('')

   const handleInfo = (data) =>{
      console.log(data)
      createUser(data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
   }
   




   return (
     <div>
       <div className="bg-info h-40 flex justify-center items-center text-3xl">
         <div className="text-center">
           <h1>SignUp</h1>
           <p>We welcome you whole heartly</p>
         </div>
       </div>
       <section className="bg-white ">
         <div className="flex justify-center items-center min-h-screen">
           <div className="hidden bg-cover lg:block lg:w-2/5">
             <img src={img} alt="" />
           </div>

           <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
             <div className="w-full">
               <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                 Get your free account now.
               </h1>

               <p className="mt-4 text-gray-500 ">
                 Let’s get you all set up so you can verify your personal
                 account and begin setting up your profile.
               </p>

               <form
                 onSubmit={handleSubmit(handleInfo)}
                 className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
               >
                 <div>
                   <label className="block mb-2 text-sm text-gray-600">
                     Name
                   </label>
                   <input
                     {...register("name")}
                     type="text"
                     placeholder="John"
                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                   />
                 </div>

                 <div>
                   <label className="block mb-2 text-sm text-gray-600 ">
                     Phone number
                   </label>
                   <input
                     {...register("phone")}
                     type="text"
                     placeholder="XXX-XX-XXXX-XXX"
                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                   />
                 </div>

                 <div>
                   <label className="block mb-2 text-sm text-gray-600">
                     Email address
                   </label>
                   <input
                     type="email"
                     {...register("email")}
                     placeholder="johnsnow@example.com"
                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                   />
                 </div>
                 <div>
                   <label className="block mb-2 text-sm text-gray-600">
                     Address
                   </label>
                   <input
                     {...register("address")}
                     placeholder="Dhaka, Bangladesh"
                     type="text"
                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                   />
                 </div>
                 <div>
                   <label className="block mb-2 text-sm text-gray-600">
                     Photo
                   </label>
                   <input
                     type="file"
                     {...register("photo")}
                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                   />
                 </div>

                 <div>
                   <label className="block mb-2 text-sm text-gray-600">
                     Select Acoount
                   </label>
                   <select
                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                     {...register("category", { required: true })}
                   >
                     <option selected value="User">
                       User
                     </option>
                     <option value="Seller">Seller</option>
                   </select>
                 </div>

                 <div>
                   <label className="block mb-2 text-sm text-gray-600 ">
                     Age
                   </label>
                   <input
                     {...register("age", {
                       required: "please enter age between 14 to 100",
                     })}
                     type="number"
                     min="14"
                     max="100"
                     placeholder="18"
                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md    focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                   />
                 </div>

                 <div>
                   <label className="block mb-2 text-sm text-gray-600 ">
                     Password
                   </label>
                   <input
                     {...register("password")}
                     type="password"
                     placeholder="Enter your password"
                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                   />
                 </div>

                 <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50">
                   <span>Sign Up </span>

                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="w-5 h-5 rtl:-scale-x-100"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       fillRule="evenodd"
                       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                       clipRule="evenodd"
                     />
                   </svg>
                 </button>
               </form>
               <div className="mt-6 text-center ">
                 <p href="#" className="text-sm ">
                   Already a member ?
                   <Link className="text-secondary ml-3" to="/login">
                     Log In
                   </Link>
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
};

export default SignUp;